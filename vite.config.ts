import { defineApplicationConfig } from "@mfish/vite-config";

export default defineApplicationConfig({
  overrides: {
    optimizeDeps: {
      include: [
        "echarts/core",
        "echarts/charts",
        "echarts/components",
        "echarts/renderers",
        "qrcode",
        "@iconify/vue",
        "ant-design-vue/es/locale/zh_CN",
        "ant-design-vue/es/locale/en_US"
      ],
      exclude: [
        "vue",
        "@vue/runtime-dom",
        "@vue/runtime-core",
        "@vue/reactivity",
        "@vue/shared",
        "vue-i18n",
        "vue-router",
        "pinia"
      ]
    }
  }
});
