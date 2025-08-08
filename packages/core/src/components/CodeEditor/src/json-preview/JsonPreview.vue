<template>
  <VueJsonPretty v-bind="$props" :theme="darkMode" />
</template>

<script lang="ts" setup>
  import VueJsonPretty from "vue-json-pretty";
  import "vue-json-pretty/lib/styles.css";
  import { useRootSetting } from "@core/hooks";

  defineProps({
    deep: { type: Number, default: 3 },
    showLength: { type: Boolean, default: true },
    showLineNumber: { type: Boolean, default: true },
    data: Object
  });

  const darkMode = useRootSetting().getDarkMode;
</script>
