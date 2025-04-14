<template>
  <ConfigProvider :locale="getAntdLocale" :theme="antTheme">
    <NConfigProvider
      style="height: 100%"
      :theme="getDarkMode === ThemeEnum.DARK ? nDarkTheme : nLightTheme"
      preflight-style-disabled
    >
      <AppProvider>
        <RouterView />
      </AppProvider>
    </NConfigProvider>
  </ConfigProvider>
</template>
<script setup lang="ts">
  import { ConfigProvider } from "ant-design-vue";
  import { RouterView } from "vue-router";
  import { darkTheme as nDarkTheme, lightTheme as nLightTheme, NConfigProvider } from "naive-ui";
  import { AppProvider } from "@/components/general/Application";
  import { useTitle } from "@mfish/core/src/hooks/web/UseTitle";
  import { useLocale } from "@mfish/core/src/i18n/UseLocale";
  import { useDarkModeTheme } from "@mfish/core/src/hooks/setting/UseDarkModeTheme";
  import { useRootSetting } from "@mfish/core";
  import { ThemeEnum } from "@mfish/core/enums";

  const { getAntdLocale } = useLocale();
  const { getDarkMode } = useRootSetting();
  const { antTheme } = useDarkModeTheme(getDarkMode);
  useTitle();
</script>
