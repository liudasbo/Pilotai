/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1a2332",
        "primary-dark-alt": "#252d3d",
        "accent-orange": "#e85d04",
        "accent-orange-hover": "#d35400",
        "neutral-100": "#F8F9FA",
        "neutral-200": "#e9ecef",
        "section-light": "#F8F9FA",
        "text-dark": "#212529",
        "text-muted": "#6c757d",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "section-label": ["0.75rem", { letterSpacing: "0.2em", lineHeight: "1.2" }],
        "heading-hero": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "heading-section": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-sub": ["1.5rem", { lineHeight: "1.3" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "section-x": "clamp(1.5rem, 5vw, 4rem)",
        "section-y": "clamp(3rem, 6vw, 5rem)",
      },
    },
  },
  plugins: [],
};
