<template>
  <div @click.stop="toggleCollapsed">
    <DoubleRightOutlined v-if="getCollapsed" />
    <DoubleLeftOutlined v-else />
  </div>
</template>
<script lang="ts" setup>
  import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons-vue";
  import { useMenuSetting } from "@mfish/core/src/hooks/setting/UseMenuSetting";

  defineOptions({ name: "SiderTrigger" });
  const { getCollapsed, toggleCollapsed } = useMenuSetting();
</script>
