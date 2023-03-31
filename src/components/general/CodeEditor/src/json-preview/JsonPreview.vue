<template>
  <vue-json-pretty v-bind="$props"/>
</template>

<script lang="ts" setup>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

defineProps({
  deep: { type: Number, default: 3 },
  showLength: { type: Boolean, default: true },
  showLineNumber: { type: Boolean, default: true },
  data: Object
});
</script>
