import UnoCSS from "unocss/vite";
import { type UserConfig } from "vite";

const commonConfig: (mode: string) => UserConfig = (mode) => ({
  server: {
    host: true
  },
  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1500,
    minify: "oxc",
    rolldownOptions: {
      checks: {
        pluginTimings: false
      },
      ...(mode === "production"
        ? {
            output: {
              minify: {
                compress: {
                  dropConsole: true,
                  dropDebugger: true
                }
              }
            }
          }
        : {})
    }
  },
  plugins: [UnoCSS()]
});

export { commonConfig };
