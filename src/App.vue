<template>
  <ConfigProvider :locale="getAntdLocale" :theme="isDark ? darkTheme : lightTheme">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>
<script setup lang="ts">
  import { ConfigProvider } from "ant-design-vue";
  import { RouterView } from "vue-router";
  import { AppProvider } from "/@/components/general/Application";
  import { useTitle } from "/@/hooks/web/UseTitle";
  import { useLocale } from "/@/i18n/UseLocale";
  import { useDarkModeTheme } from "/@/hooks/setting/UseDarkModeTheme";

  const { getAntdLocale } = useLocale();
  const { isDark, darkTheme, lightTheme } = useDarkModeTheme();
  //动态设置标题
  useTitle();
</script>
