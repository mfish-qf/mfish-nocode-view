<template>
  <transition name="zoom-fade" mode="out-in">
    <LockPage v-if="getIsLock" />
  </transition>
</template>
<script lang="ts" setup>
  import { computed } from "vue";
  import LockPage from "./LockPage.vue";
  import { useLockStore } from "@/stores/Lock.ts";

  const lockStore = useLockStore();
  const getIsLock = computed(() => lockStore?.getLockInfo?.isLock ?? false);
</script>
