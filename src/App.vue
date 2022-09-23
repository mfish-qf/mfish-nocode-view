<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <config-provider>
    <RouterView />
  </config-provider>
</template>
