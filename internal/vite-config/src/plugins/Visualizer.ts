/**
 * Package file volume analysis
 */
import { analyzer } from "vite-bundle-analyzer";
import { type PluginOption } from "vite";

export function configVisualizerConfig() {
  return analyzer({
    analyzerMode: "static",
    reportTitle: "MFish Bundle Analyzer",
    gzipOptions: {
      level: 9
    },
    openAnalyzer: true
  }) as PluginOption;
}
