/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: "class", // Enable class-based dark mode
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primaryLight: "#4F46E5", // Light mode primary color (Indigo 600)
          primaryDark: "#6366F1", // Dark mode primary color (Indigo 500)
          backgroundLight: "#FFFFFF", // Light mode background
          backgroundDark: "#111827", // Dark mode background
          textLight: "#1F2937", // Light mode text
          textDark: "#E5E7EB", // Dark mode text
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  