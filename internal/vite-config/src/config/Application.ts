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
    const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = loadEnv(mode, root);
    const defineData = await createDefineData(root);
    const plugins = await createPlugins({
      isBuild,
      root
    });

    const pathResolve = (pathname: string) => resolve(root, ".", pathname);
    const [prefix, target] = VITE_PROXY ? JSON.parse(VITE_PROXY) : ["", ""];
    const applicationConfig: UserConfig = {
      base: VITE_PUBLIC_PATH,
      resolve: {
        alias: [
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
          },
          {
            find: /@workflow\//,
            replacement: `${pathResolve("packages/workflow/src")}/`
          },
          {
            find: /@form-designer\//,
            replacement: `${pathResolve("packages/form-designer/src")}/`
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
        rolldownOptions: {
          output: {
            // 入口文件名
            entryFileNames: "assets/[name]-[hash].js",
            codeSplitting: {
              groups: [
                // antd 细粒度拆分（icons 单独拆出，通常最大）
                { name: "antd-icons", test: /node_modules[\\/]@ant-design[\\/]icons-vue/, priority: 30 },
                { name: "antd-utils", test: /node_modules[\\/]@ant-design[\\/]/, priority: 20 },
                { name: "antd", test: /node_modules[\\/]ant-design-vue[\\/]/, priority: 20 },
                { name: "antd-x", test: /node_modules[\\/]ant-design-x-vue[\\/]/, priority: 20 },

                // vue 核心（@vue[\\/] 精确匹配 @vue/，不会误匹配 @vueuse）
                { name: "vue-vendor", test: /node_modules[\\/](vue|@vue[\\/]|pinia|vue-router)[\\/]/, priority: 20 },
                { name: "vueuse", test: /node_modules[\\/]@vueuse[\\/]/, priority: 20 },

                // echarts 细粒度拆分
                { name: "echarts-gl", test: /node_modules[\\/]echarts-gl[\\/]/, priority: 20 },
                { name: "echarts", test: /node_modules[\\/]echarts[\\/]/, priority: 15 },

                // 工作流引擎
                { name: "vue-flow", test: /node_modules[\\/]@vue-flow[\\/]/, priority: 15 },

                // UI 组件
                { name: "naive", test: /node_modules[\\/]naive-ui[\\/]/, priority: 15 },

                // 编辑器
                { name: "codemirror", test: /node_modules[\\/](@codemirror|codemirror|cm6-theme)[\\/]/, priority: 15 },

                // 工具库
                { name: "dayjs", test: /node_modules[\\/]dayjs[\\/]/, priority: 15 },
                { name: "lodash", test: /node_modules[\\/]lodash/, priority: 15 },
                { name: "markdown-it", test: /node_modules[\\/]markdown-it[\\/]/, priority: 10 },
                { name: "html2canvas", test: /node_modules[\\/]html2canvas[\\/]/, priority: 10 },
                { name: "sm-crypto", test: /node_modules[\\/]sm-crypto[\\/]/, priority: 10 },
                { name: "crypto-js", test: /node_modules[\\/]crypto-js[\\/]/, priority: 10 },
                { name: "bootstrap", test: /node_modules[\\/]bootstrap[\\/]/, priority: 10 },

                // 拖拽/排序
                { name: "dnd", test: /node_modules[\\/](sortablejs|vuedraggable)[\\/]/, priority: 10 },

                // 国际化
                { name: "vue-i18n", test: /node_modules[\\/]vue-i18n[\\/]/, priority: 10 },

                // 其他零散依赖
                { name: "cropperjs", test: /node_modules[\\/]cropperjs[\\/]/, priority: 5 },
                { name: "qrcode", test: /node_modules[\\/]qrcode[\\/]/, priority: 5 },
                { name: "zxcvbn", test: /node_modules[\\/]@zxcvbn-ts[\\/]/, priority: 5 },
                { name: "iconify", test: /node_modules[\\/]@iconify[\\/]/, priority: 5 },

                // 兜底：其余 node_modules 统一放入 vendor
                { name: "vendor", test: /node_modules[\\/]/, priority: 1 }
              ]
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
