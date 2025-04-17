<template>
  <Card title="项目" v-bind="$attrs" style="overflow: hidden">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>

    <Card.Grid
      v-for="item in items"
      :key="item.title"
      class="!md:w-1/3 !w-full cursor-pointer"
      @click="clickCard(item)"
    >
      <span class="flex">
        <Icon :icon="item.icon" :color="item.color" size="30" />
        <span class="text-lg ml-4">{{ item.title }}</span>
      </span>
      <div class="flex mt-2 h-10 text-secondary">{{ item.desc }}</div>
      <div class="flex justify-between text-secondary">
        <span>{{ item.group }}</span>
        <span>{{ item.date }}</span>
      </div>
    </Card.Grid>
  </Card>
</template>
<script lang="ts" setup>
  import { Card } from "ant-design-vue";
  import { Icon } from "@mfish/core/components/Icon";
  import { groupItems } from "./Data";

  const items = groupItems;

  function clickCard(item) {
    window.open(item.url, "_blank");
  }
</script>
<style lang="less"></style>
