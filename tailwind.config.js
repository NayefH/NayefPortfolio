module.exports = {
  theme: {
    extend: {
      colors: {
        "neon-turquoise": "#0ff",
        "black-bg": "#000000",
      },
      animation: {
        "neon-glow": "neon-glow 1.5s ease-in-out infinite alternate",
        flicker: "flicker 2s infinite linear",
        "fade-in": "fade-in 2s ease-in",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "slide-in-left": "slide-in-left 1s cubic-bezier(0.4, 0, 0.2, 1) both",
        "slide-in-right": "slide-in-right 1s cubic-bezier(0.4, 0, 0.2, 1) both",
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 6s linear infinite",
        "pulse-fast": "pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gold-glow": "gold-glow 2s ease-in-out infinite alternate",
        "gradient-move": "gradient-move 12s ease-in-out infinite alternate",
        "gold-particle": "gold-particle 7s linear infinite",
        "bg-scroll": "bg-scroll 40s linear infinite",
        "bg-scroll-up": "bg-scroll-up 40s linear infinite",
        "jp-scroll": "jp-scroll 10s linear infinite",
        "jp-scroll-horizontal":
          "jp-scroll-horizontal 40s linear infinite reverse",

        // Neue Animation für Hexagon Glow (optional)
        "hexagon-glow": "hexagon-glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 22%, 24%, 55%": { opacity: "0.4" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "gold-glow": {
          "0%, 100%": { textShadow: "0 0 24px #FFD700, 0 0 48px #FFD700" },
          "50%": { textShadow: "0 0 48px #FFD700, 0 0 96px #FFD700" },
        },
        "gradient-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        "gold-particle": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.3" },
          "10%": { opacity: "0.7" },
          "50%": { transform: "translateY(-40px) scale(1.2)", opacity: "0.5" },
          "100%": { transform: "translateY(-80px) scale(1)", opacity: "0.3" },
        },
        "bg-scroll": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 100%" },
        },
        "bg-scroll-up": {
          "0%": { backgroundPosition: "0% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        "jp-scroll": {
          "0%": { transform: "translateY(40vh)" },
          "100%": { transform: "translateY(-60vh)" },
        },
        "jp-scroll-horizontal": {
          "0%": { transform: "translateX(40vw)" },
          "100%": { transform: "translateX(-60vw)" },
        },
        // Hexagon Glow pulsiert
        "hexagon-glow": {
          "0%": {
            boxShadow: "0 0 10px #0ff99, 0 0 20px #0ffcc, 0 0 40px #0fff",
            borderColor: "#0ff",
          },
          "100%": {
            boxShadow: "0 0 25px #0ff, 0 0 50px #0ff, 0 0 80px #0ff",
            borderColor: "#0cc",
          },
        },
      },
      clipPath: {
        hexagon: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
      },
    },
  },
  plugins: [
    // Plugin für clip-path (benötigt)
    require("tailwind-clip-path"),
  ],
};
