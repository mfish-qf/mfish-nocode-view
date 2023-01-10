<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import { RouterView } from "vue-router";
import { AppProvider } from "/@/components/general/Application";
import { useTitle } from "/@/hooks/web/UseTitle";
import { useLocale } from "/@/i18n/UseLocale";

const { getAntdLocale } = useLocale();
//动态设置标题
useTitle();
</script>

<template>
  <ConfigProvider :locale="getAntdLocale">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>
