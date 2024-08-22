import { resolve } from "node:path";
import { generate } from "@ant-design/colors";
import { theme } from "ant-design-vue";
import convertLegacyToken from "ant-design-vue/lib/theme/convertLegacyToken";
import { colorError, colorSuccess, colorWarning } from "@mfish/types";

const { defaultAlgorithm, defaultSeed } = theme;
const primaryColor = "#ee4f12";

function generateAntColors(color: string, theme: "default" | "dark" = "default") {
  return generate(color, {
    theme
  });
}

/**
 * less global variable
 */
export function generateModifyVars() {
  const palettes = generateAntColors(primaryColor);
  const primary = palettes[5];
  const primaryColorObj: Record<string, string> = {};

  for (let index = 0; index < 10; index++) {
    primaryColorObj[`primary-${index + 1}`] = palettes[index];
  }
  const mapToken = defaultAlgorithm(defaultSeed);
  const v3Token = convertLegacyToken(mapToken);
  return {
    ...v3Token,
    // reference:  Avoid repeated references
    hack: `true; @import (reference) "${resolve("src/design/config.less")}";`,
    "primary-color": primary,
    ...primaryColorObj,
    "info-color": primary,
    "processing-color": primary,
    "success-color": colorSuccess, //  Success color
    "error-color": colorError, //  False color
    "warning-color": colorWarning, //   Warning color
    "font-size-base": "14px", //  Main font size
    "border-radius-base": "2px", //  Component/float fillet
    "link-color": primary //   Link color
  };
}
