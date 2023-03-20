/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // ## Screen sizes
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440px",
      },
      // ## Colors
      colors: {
        // ### Primary
        cl_VeryDarkBlue: "hsl(243, 87%, 12%)",
        cl_DesaturatedBlue: "hsl(238, 22%, 44%)",
        // ### Accent
        cl_BrightBlue: "hsl(224, 93%, 58%)",
        cl_ModerateCyan: "hsl(170, 45%, 43%)",
        // ### Neutral
        cl_LightGrayishBlue: "hsl(240, 75%, 98%)",
        cl_LightGray: "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],
}
