<template>
  <XProvider :locale="getAntdLocale" :theme="antTheme">
    <NConfigProvider
      style="height: 100%"
      :theme="getDarkMode === ThemeEnum.DARK ? nDarkTheme : nLightTheme"
      preflight-style-disabled
    >
      <AppProvider>
        <RouterView />
      </AppProvider>
    </NConfigProvider>
  </XProvider>
</template>
<script setup lang="ts">
  import { XProvider } from "ant-design-x-vue";
  import { RouterView } from "vue-router";
  import { darkTheme as nDarkTheme, lightTheme as nLightTheme, NConfigProvider } from "naive-ui";
  import { AppProvider } from "@/components/general/Application";
  import { useDarkModeTheme, useRootSetting, useTitle } from "@mfish/core/hooks";
  import { useLocale } from "@mfish/core/i18n/UseLocale";
  import { ThemeEnum } from "@mfish/core/enums";

  const { getAntdLocale } = useLocale();
  const { getDarkMode } = useRootSetting();
  const { antTheme } = useDarkModeTheme(getDarkMode);
  useTitle();
</script>
