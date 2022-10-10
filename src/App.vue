<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import { RouterView } from "vue-router";
import { useTitle } from "/@/hooks/web/UseTitle";
import { useLocale } from "/@/i18n/UseLocale";

const { getAntdLocale } = useLocale();
useTitle();
</script>

<template>
  <config-provider :locale="getAntdLocale">
    <RouterView />
  </config-provider>
</template>
