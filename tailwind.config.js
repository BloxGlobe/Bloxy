module.exports = {
  content: ["./index.html", "./src/**/*.{ts,html}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease",
        slideUp: "slideUp 0.4s ease"
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { transform: "translateY(10px)" }, to: { transform: "translateY(0)" } }
      }
    }
  },
  plugins: []
};
