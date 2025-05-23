module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", "sans-serif"], // Cairo fontunu varsayılan sans-serif yap
      },
      letterSpacing: {
        custom: "0.97px", // Özel letter spacing değeri
      },
    },
  },
  plugins: [],
};
