import { ConfigEnv, loadEnv, UserConfig } from "vite";
import { createProxy } from "./build/vite/Proxy";
import { wrapperEnv } from "./build/BuildUtils";
import { resolve } from "path";
import pkg from "./package.json";
import dayjs from "dayjs";
import { createVitePlugins } from "./build/vite/plugin";
import { generateModifyVars } from "./build/generate/GenerateModifyVars";
import { OUTPUT_DIR } from "./build/Constant";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
};
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const viteEnv = wrapperEnv(loadEnv(mode, root));
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;
  const isBuild = command === "build";
  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        {
          find: "vue-i18n",
          replacement: "vue-i18n/dist/vue-i18n.cjs.js"
        },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve("src") + "/"
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve("types") + "/"
        }
      ]
    },
    server: {
      https: false,
      // Listening on all local IPs
      host: true,
      port: VITE_PORT,
      // Load proxy configuration from .env
      proxy: createProxy(VITE_PROXY)
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
    },
    build: {
      target: "es2015",
      cssTarget: "chrome80",
      outDir: OUTPUT_DIR,
      /**
       * 当 minify=“minify:'terser'” 解开注释 需要安装Terser
       * npm add -D terser
       * Uncomment when minify="minify:'terser'"
       */
      // minify: 'terser',
      // terserOptions: {
      //   compress: {
      //     keep_infinity: true,
      //     drop_console: VITE_DROP_CONSOLE,
      //   },
      // },
      // 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000
    },
    define: {
      // setting vue-i18-next
      // Suppress warning
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },

    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true
        }
      }
    },

    // 单独管理Vite插件
    plugins: createVitePlugins(viteEnv, isBuild),

    optimizeDeps: {
      // @iconify/iconify: 依赖项是由@purge-icons/generated动态虚拟加载的，因此需要明确指定
      include: [
        "@vue/runtime-core",
        "@vue/shared",
        "@iconify/iconify",
        "ant-design-vue/es/locale/zh_CN",
        "ant-design-vue/es/locale/en_US"
      ]
    }
  };
};