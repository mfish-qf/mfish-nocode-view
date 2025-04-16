<template>
  <div @click.stop="toggleCollapsed">
    <DoubleRightOutlined v-if="getCollapsed" />
    <DoubleLeftOutlined v-else />
  </div>
</template>
<script lang="ts" setup>
  import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons-vue";
  import { useMenuSetting } from "@mfish/core/hooks";

  defineOptions({ name: "SiderTrigger" });
  const { getCollapsed, toggleCollapsed } = useMenuSetting();
</script>
