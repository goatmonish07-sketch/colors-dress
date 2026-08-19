/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#E91E63",
          dark: "#C2185B",
          light: "#FCE4EC",
        },
        cta: "#FF3F6C",
        ink: "#212121",
        muted: "#878787",
        line: "#EDEDED",
        page: "#F1F3F6",
        success: "#388E3C",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 4px rgba(0,0,0,0.08)",
        hover: "0 4px 16px rgba(0,0,0,0.14)",
        nav: "0 1px 6px rgba(0,0,0,0.10)",
      },
      maxWidth: {
        shell: "1280px",
      },
    },
  },
  plugins: [],
};
