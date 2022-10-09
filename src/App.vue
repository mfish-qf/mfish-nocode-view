<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import { RouterView } from "vue-router";
import { useTitle } from "/@/hooks/web/UseTitle";

useTitle();
</script>

<template>
  <ConfigProvider>
    <RouterView />
  </ConfigProvider>
</template>
