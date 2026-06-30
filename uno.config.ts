import { defineConfig, presetTypography } from "unocss";
import presetWind3 from "@unocss/preset-wind3";

export default defineConfig({
  presets: [presetWind3(), presetTypography()],
  content: {
    pipeline: {
      include: [/\.(vue|ts|tsx)$/]
    }
  }
});
