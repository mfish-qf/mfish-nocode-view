<template>
  <Card title="快捷导航" style="overflow: hidden">
    <CardGrid v-for="item in navItems" :key="item.title" class="cursor-pointer" @click="clickCard(item)">
      <span class="flex flex-col items-center">
        <Icon :icon="item.icon" :color="item.color" size="20" />
        <span class="text-md mt-2 truncate">{{ item.title }}</span>
      </span>
    </CardGrid>
  </Card>
</template>
<script lang="ts" setup>
  import { Card, CardGrid } from "ant-design-vue";
  import { navItems } from "./Data";
  import { Icon } from "@mfish/core/components/Icon";
  import { useGo } from "@mfish/core/hooks";

  const go = useGo();

  function clickCard(item) {
    go(item.url);
  }
</script>
