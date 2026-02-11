import Link from "next/link";

const NAV_LINKS = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#about" },
  { label: "SHOP", href: "#shop" },
  { label: "NEWS", href: "#news" },
  { label: "TEAM", href: "#team" },
  { label: "CAREERS", href: "#careers" },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-section-x py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          PILOTAI
        </Link>
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white text-sm font-medium tracking-wider hover:opacity-90"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
