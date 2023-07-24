import { defineConfig } from "unocss";
import { primaryColor } from "./build/config/ThemeConfig";

export default defineConfig({
  rules: [
    [
      "text-evenly",
      {
        textAlignLast: "justify",
        textAlign: "justify"
      }
    ]
  ],
  theme: {
    colors: {
      primary: primaryColor
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1600px"
    },
    transitionProperty: {
      width: "width",
      spacing: "margin, padding"
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      inherit: "inherit",
      none: "none",
      2: "2 2 0%",
      3: "3 3 0%",
      4: "4 4 0%",
      5: "5 5 0%",
      6: "6 6 0%"
    }
  }
});
