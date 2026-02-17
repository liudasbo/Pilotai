export default function manifest() {
  return {
    name: "Pilotai Program",
    short_name: "Pilotai",
    description:
      "Premium pilot training and curated aviation lifestyle experiences in Lithuania.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#263c54",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
