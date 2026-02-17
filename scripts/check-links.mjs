import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const appDir = path.join(projectRoot, "app");
const scanDirs = [path.join(projectRoot, "app"), path.join(projectRoot, "components")];

const hrefRegex = /href="([^"{][^"]*)"/g;
const validRoutes = new Set(["/"]);
const errors = [];

async function walk(dir, matcher, results = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walk(fullPath, matcher, results);
      continue;
    }

    if (matcher(fullPath)) {
      results.push(fullPath);
    }
  }

  return results;
}

function toRouteFromPageFile(filePath) {
  const relativePath = path.relative(appDir, filePath).replace(/\\/g, "/");
  if (relativePath === "page.js") return "/";

  const segments = relativePath
    .replace(/\/page\.js$/, "")
    .split("/")
    .filter(Boolean)
    .filter((segment) => !segment.startsWith("(") && !segment.startsWith("@"));

  return `/${segments.join("/")}`;
}

function normalizeHref(href) {
  if (!href) return null;
  if (href.startsWith("http://") || href.startsWith("https://")) return null;
  if (href.startsWith("mailto:")) return null;
  if (href.startsWith("tel:")) return null;
  if (href.startsWith("#")) return "/";
  if (!href.startsWith("/")) return null;

  return href.split("?")[0].split("#")[0] || "/";
}

const pageFiles = await walk(appDir, (filePath) => filePath.endsWith("/page.js"));
for (const pageFile of pageFiles) {
  validRoutes.add(toRouteFromPageFile(pageFile));
}

const sourceFiles = (
  await Promise.all(scanDirs.map((dir) => walk(dir, (filePath) => filePath.endsWith(".js"))))
).flat();

for (const sourceFile of sourceFiles) {
  const source = await fs.readFile(sourceFile, "utf8");
  let match;

  while ((match = hrefRegex.exec(source)) !== null) {
    const originalHref = match[1];
    const normalizedHref = normalizeHref(originalHref);

    if (!normalizedHref) {
      continue;
    }

    if (!validRoutes.has(normalizedHref)) {
      errors.push(`${path.relative(projectRoot, sourceFile)} -> ${originalHref}`);
    }
  }
}

if (errors.length > 0) {
  console.error("Broken internal routes referenced in source files:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("No broken internal route references found.");
