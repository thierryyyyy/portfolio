/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        sans:    ["Satoshi", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      colors: {
        bg:      "#111113",
        bg2:     "#16161A",
        bg3:     "#1C1C22",
        card:    "#1E1E26",
        border:  "#2A2A35",
        border2: "#333340",
        orange:  "#FF5F1F",
        orange2: "#FF7A40",
        amber:   "#FFA040",
        ink:     "#F0EEE9",
        ink2:    "#A8A6A0",
        ink3:    "#6A6870",
      },
      boxShadow: {
        card:       "0 4px 16px rgba(0,0,0,.3)",
        "card-lg":  "0 16px 48px rgba(0,0,0,.4)",
        orange:     "0 4px 24px rgba(255,95,31,.35)",
        "orange-lg":"0 8px 36px rgba(255,95,31,.5)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        float:     "float 4s ease-in-out infinite",
        spin:      "spin .6s linear infinite",
      },
      keyframes: {
        fadeUp:  { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:  { from: { opacity: "0" }, to: { opacity: "1" } },
        float:   { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        spin:    { to: { transform: "rotate(360deg)" } },
      },
    },
  },
  plugins: [],
};
