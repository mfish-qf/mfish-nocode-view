<template>
  <span :class="[prefixCls, theme]" @click="toggleCollapsed">
    <MenuUnfoldOutlined v-if="getCollapsed" /> <MenuFoldOutlined v-else />
  </span>
</template>
<script lang="ts" setup>
  import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
  import { useMenuSetting } from "@mfish/core/src/hooks/setting/UseMenuSetting";
  import { useDesign } from "@mfish/core";
  import { propTypes } from "@mfish/core/src/utils/PropTypes";
  defineOptions({ name: "HeaderTrigger" });
  defineProps({
    theme: propTypes.oneOf(["light", "dark"])
  });
  const { getCollapsed, toggleCollapsed } = useMenuSetting();
  const { prefixCls } = useDesign("layout-header-trigger");
</script>
