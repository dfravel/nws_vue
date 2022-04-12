const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}", "./index.html"],
  mode: "",
  darkMode: "media",
  theme: {
    colors: {
      pageBackground: "#F4F9FA",
      pageHeader: "#09282F",
      cardHeader: "#6597A8",
      secondaryCardHeader: "#626FA7",
      secondaryCardBackground: "#D6DCF5",
      stripeOdd: "#EAEFF1",
      stripeEven: "#D5E0E3",
      tableHover: "#D6DCF5",

      // messaging
      error: "#E86464",
      success: "#5DBC40",
      warning: "#FEB01D",

      // log levels
      trace: "#BFDBFE",
      debug: "#1fb6ff",
      info: "#FEF3C7",
      warn: "#FEB01D",
      error: "#E86464",
      fatal: "#BE185D",


      accentBlue: "#4A7BDD",

      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      orange: colors.orange,
      green: colors.green,
      yellow: colors.yellow,
      purple: colors.purple,
      blue: colors.blue,
      pink: colors.pink,
      red: colors.rose,
      amber: colors.amber,
    },
    fontFamily: {
      sans: ["Avenir", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "3xl": "1900px",
      "2xl": "1536px",
    },
    extend: {
      zIndex: {
        "-1": "-1",
        100: "100",
      },
      flexGrow: {
        5: "5",
      },
      height: {
        "screen/1": "75vh",
        "screen/2": "50vh",
        "screen/2.25": "65vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
      width: {
        "screen/1": "75vw",
        "screen/2": "50vw",
        "screen/2.25": "65vw",
        "screen/3": "calc(100vw / 3)",
        "screen/4": "calc(100vw / 4)",
        "screen/5": "calc(100vw / 5)",
      },
      maxHeight: {
        "screen-menu": "calc(100vh - 3.5rem)",
        modal: "calc(100vh - 160px)",
      },
      transitionProperty: {
        position: "right, left, top, bottom, margin, padding",
        backgroundImage: "background-image",
      },
      margin: {
        "2.5px": "2.5px",
      },
      keyframes: {
        shake: {
          "from, to": { transform: "translate3d(0, 0, 0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translate3d(-10px, 0, 0)" },
          "20%, 40%, 60%, 80%": { transform: "translate3d(10px, 0, 0)" },
        },
        fadeInUp: {
          from: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
          to: { opacity: 1, transform: "none" },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        screens: {},
      },
      colors: {
        main: {
          DEFAULT: colors.gray[700],
          dark: "#ffffff",
        },
        primary: {
          DEFAULT: "#1fb6ff",
          dark: "#ffffff",
        },
        highlight: {
          DEFAULT: colors.red[700],
          dark: colors.violet[800],
        },
        "highlight-background": {
          DEFAULT: colors.yellow[400],
          dark: "#1fb6ff",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
