<template>
  <ConfigProvider :locale="getAntdLocale" :theme="isDark ? darkTheme : lightTheme">
    <NConfigProvider style="height: 100%" :theme="isDark ? nDarkTheme : nLightTheme" preflight-style-disabled>
      <AppProvider>
        <RouterView />
      </AppProvider>
    </NConfigProvider>
  </ConfigProvider>
</template>
<script setup lang="ts">
  import { ConfigProvider } from "ant-design-vue";
  import { RouterView } from "vue-router";
  import { NConfigProvider } from "naive-ui";
  import { darkTheme as nDarkTheme, lightTheme as nLightTheme } from "naive-ui";
  import { AppProvider } from "@/components/general/Application";
  import { useTitle } from "@/hooks/web/UseTitle";
  import { useLocale } from "@/i18n/UseLocale";
  import { useDarkModeTheme } from "@/hooks/setting/UseDarkModeTheme";

  const { getAntdLocale } = useLocale();
  const { isDark, darkTheme, lightTheme } = useDarkModeTheme();
  // 动态设置标题
  useTitle();
</script>
