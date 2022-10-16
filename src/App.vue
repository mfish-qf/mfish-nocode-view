<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import { AppProvider } from "/@/components/Application";
import { useTitle } from "/@/hooks/web/UseTitle";
import { useLocale } from "/@/i18n/UseLocale";

const { getAntdLocale } = useLocale();
//动态设置标题
useTitle();
</script>

<template>
  <config-provider :locale="getAntdLocale">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </config-provider>
</template>
