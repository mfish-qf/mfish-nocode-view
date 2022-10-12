<template>
  <transition name="fade-bottom" mode="out-in">
    <LockPage v-if="getIsLock" />
  </transition>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';
  import LockPage from './LockPage.vue';
  import { useLockStore } from '/@/store/modules/Lock';

  const lockStore = useLockStore();
  const getIsLock = computed(() => lockStore?.getLockInfo?.isLock ?? false);
</script>
