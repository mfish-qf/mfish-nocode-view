import { resolve } from "node:path";
import dayjs from "dayjs";
import { readPackageJSON } from "pkg-types";
import { defineConfig, loadEnv, mergeConfig, type UserConfig } from "vite";
import { createPlugins } from "../plugins";
import { generateModifyVars } from "../utils/ModifyVars";
import { commonConfig } from "./Common";
import fs from "node:fs";
import { parse } from "yaml";

export interface DefineOptions {
  overrides?: UserConfig;
  options?: object;
}

const OUTPUT_DIR = "mfish-nocode-view";

function defineApplicationConfig(defineOptions: DefineOptions = {}) {
  const { overrides = {} } = defineOptions;

  return defineConfig(async ({ command, mode }) => {
    const root = process.cwd();
    const isBuild = command === "build";
    const { VITE_PORT, VITE_PUBLIC_PATH, VITE_USE_VISUALIZER, VITE_PROXY } = loadEnv(mode, root);
    const defineData = await createDefineData(root);
    const plugins = await createPlugins({
      isBuild,
      root,
      enableAnalyze: VITE_USE_VISUALIZER === "true"
    });

    const pathResolve = (pathname: string) => resolve(root, ".", pathname);
    const [prefix, target] = VITE_PROXY ? JSON.parse(VITE_PROXY) : ["", ""];
    const applicationConfig: UserConfig = {
      base: VITE_PUBLIC_PATH,
      resolve: {
        alias: [
          {
            find: "vue-i18n",
            replacement: "vue-i18n/dist/vue-i18n.cjs.js"
          },
          // @/xxxx => src/xxxx
          {
            find: /@\//,
            replacement: `${pathResolve("src")}/`
          },
          // #/xxxx => types/xxxx
          {
            find: /#\//,
            replacement: `${pathResolve("types")}/`
          },
          {
            find: /@core\//,
            replacement: `${pathResolve("packages/core/src")}/`
          },
          {
            find: /@nocode\//,
            replacement: `${pathResolve("packages/nocode/src")}/`
          },
          {
            find: /@custom-api\//,
            replacement: `${pathResolve("packages/custom-api/src")}/`
          }
        ]
      },
      define: defineData,
      server: {
        port: Number(VITE_PORT),
        proxy: {
          [prefix]: {
            target,
            changeOrigin: true,
            ws: true,
            rewrite: (path) => path.replace(new RegExp(`${prefix}`), "")
            // only https
            // secure: false
          }
        },
        open: true, // 项目启动后，自动打开
        warmup: {
          clientFiles: ["./index.html", "./src/{views,components}/*"]
        }
      },
      build: {
        target: "es2015",
        cssTarget: "chrome80",
        outDir: OUTPUT_DIR,
        rollupOptions: {
          output: {
            // 入口文件名
            entryFileNames: "assets/[name]-[hash].js",
            manualChunks: {
              vue: ["vue", "pinia", "vue-router"],
              antd: ["ant-design-vue", "@ant-design/icons-vue"],
              naive: ["naive-ui"],
              echarts: ["echarts"]
            }
          }
        }
      },
      css: {
        preprocessorOptions: {
          less: {
            modifyVars: generateModifyVars(),
            javascriptEnabled: true
          }
        }
      },
      plugins
    };

    const mergedConfig = mergeConfig(commonConfig(mode), applicationConfig);

    return mergeConfig(mergedConfig, overrides);
  });
}

async function createDefineData(root: string) {
  try {
    const pkgJson = await readPackageJSON(root);
    const { dependencies, devDependencies, name, version } = pkgJson;
    const fileContent = fs.readFileSync("pnpm-workspace.yaml", "utf8");
    const yamlData = parse(fileContent);
    //从catalog中获取依赖版本
    if (yamlData?.catalog) {
      if (dependencies) {
        Object.keys(dependencies).forEach((key) => {
          dependencies[key] = yamlData.catalog[key] || dependencies[key];
        });
      }
      if (devDependencies) {
        Object.keys(devDependencies).forEach((key) => {
          devDependencies[key] = yamlData.catalog[key] || devDependencies[key];
        });
      }
    }
    const __APP_INFO__ = {
      pkg: { dependencies, devDependencies, name, version },
      lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
    };
    return {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    };
  } catch {
    return {};
  }
}

export { defineApplicationConfig };
