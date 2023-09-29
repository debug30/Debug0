/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#5151a4",
        textColor: "#FFFFFF",
        highlightColor: "#9affff",
      },
      dropShadow: {
        custom: "0 4px 3px rgba(255,255,255,0.4)",
      },
      boxShadow: {
        custom: "0px 4px 21px 5px rgba(154, 255, 255, 0.50)",
        register:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        registerBtn:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      },
    },
  },
  plugins: [],
};
