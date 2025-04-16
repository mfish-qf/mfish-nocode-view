<template>
  <span :class="[prefixCls, theme]" @click="toggleCollapsed">
    <MenuUnfoldOutlined v-if="getCollapsed" /> <MenuFoldOutlined v-else />
  </span>
</template>
<script lang="ts" setup>
  import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
  import { useDesign, useMenuSetting } from "@mfish/core/hooks";
  import { propTypes } from "@mfish/core/utils/PropTypes";

  defineOptions({ name: "HeaderTrigger" });
  defineProps({
    theme: propTypes.oneOf(["light", "dark"])
  });
  const { getCollapsed, toggleCollapsed } = useMenuSetting();
  const { prefixCls } = useDesign("layout-header-trigger");
</script>
