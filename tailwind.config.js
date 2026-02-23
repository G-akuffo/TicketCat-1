/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: {
          DEFAULT: "#050505", // Main card background
          raised: "#0A0A0A", // Search bars, headers, secondary cards
          elevated: "#111111", // Borders, dividers
          highlight: "#1A1A1A", // Button backgrounds, borders
          inverse: "#FFFFFF",
          error: "#1A0505", // Security banner background
        },
        txt: {
          main: "#FFFFFF",
          dim: "#EEEEEE",
          secondary: "#AAAAAA",
          muted: "#888888", // Captions, subtitles
          subtle: "#71717a", // Icons, location text (Zinc-500)
          ghost: "#444444", // Placeholders, low contrast icons
          inverted: "#000000",
        },
        border: {
          DEFAULT: "#111111",
          subtle: "#18181b", // Zinc-900
          highlight: "#333333",
        },
        gold: {
          DEFAULT: "#D4AF37",
          accent: "#00FF88",
        },
        silver: {
          DEFAULT: "#C0C0C0",
          accent: "#00A3FF",
        },
        bronze: {
          DEFAULT: "#CD7F32",
          accent: "#FF7F50",
        },
        general: {
          DEFAULT: "#444444",
          accent: "#FFFFFF",
        },
        status: {
          error: "#FF4444",
          success: "#00FF88",
        },
      },
    },
  },
  plugins: [],
};
