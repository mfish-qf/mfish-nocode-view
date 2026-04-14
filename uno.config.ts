import { defineConfig, presetTypography } from "unocss";
import presetWind3 from "@unocss/preset-wind3";

export default defineConfig({
  presets: [presetWind3(), presetTypography()],
  content: {
    pipeline: {
      include: [/\.(vue|ts|tsx)$/]
    }
  },
  theme: {
    colors: {
      primary: "var(--primary-color, #4f46e5)",
      "primary-5": "color-mix(in srgb, var(--primary-color, #4f46e5), transparent 95%)",
      "primary-10": "color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%)",
      "primary-20": "color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%)",
      "primary-30": "color-mix(in srgb, var(--primary-color, #4f46e5), transparent 70%)",
      "primary-light": "color-mix(in srgb, var(--primary-color, #4f46e5), white 80%)",
      "primary-soft": "color-mix(in srgb, var(--primary-color, #4f46e5), white 60%)",
      "primary-dark": "color-mix(in srgb, var(--primary-color, #4f46e5), black 20%)"
    }
  }
});
