/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-100": "#f8f9fa",
        blanchedalmond: "#e7d9be",
        gray: {
          100: "#fcfcfc",
          200: "#808080",
          300: "#171717",
          400: "rgba(255, 255, 255, 0.3)",
        },
        gainsboro: {
          100: "#e6e6e6",
          200: "rgba(217, 217, 217, 0.25)",
        },
        whitesmoke: { 100: "#f1f2f3" },
        darkslategray: {
          100: "#474747",
          200: "#263c54",
          300: "#333",
        },
        chocolate: {
          100: "#cc6e36",
          200: "#b3541c",
        },
        silver: "#b2bdc2",
        slategray: "#647881",
      },
      spacing: {
        "num-140_6": "140.6px",
        "num-402": "402px",
        "num-23": "23px",
        "num-22": "22px",
      },
      fontFamily: {
        jost: ["var(--font-jost)", "Jost", "system-ui", "sans-serif"],
      },
      padding: {
        "num-0": "0px",
        "num-14": "14px",
        "num-20": "20px",
        "num-119": "119px",
      },
      fontSize: {
        "num-13": "13px",
        "num-37": "37px",
        "num-16": "16px",
      },
      lineHeight: {
        "num-23": "23px",
        "num-25": "25px",
        "num-42": "42px",
        "num-24": "24px",
        "num-15_6": "15.6px",
        "num-22": "22px",
      },
      letterSpacing: {
        "num-0_56": "0.56px",
        "num-0_39": "0.39px",
        "num-0_24": "0.24px",
      },
      screens: {
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
