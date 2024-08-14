<template>
  <div :class="`${prefixCls}-wrapper`">
    <Drawer
      v-if="getIsMobile"
      placement="left"
      :class="`${prefixCls}-drawer`"
      :width="getMenuWidth"
      :get-container="false"
      :open="!getCollapsed"
      @close="handleClose"
    >
      <LayoutSider />
    </Drawer>
    <MixSider v-else-if="getIsMixSidebar" />
    <LayoutSider v-else />
  </div>
</template>
<script lang="ts" setup>
  import LayoutSider from "./LayoutSider.vue";
  import MixSider from "./MixSider.vue";
  import { Drawer } from "ant-design-vue";
  import { useAppInject } from "@/hooks/web/UseAppInject";
  import { useMenuSetting } from "@/hooks/setting/UseMenuSetting";
  import { useDesign } from "@/hooks/web/UseDesign";
  import { nextTick, onBeforeMount, unref } from "vue";
  defineOptions({ name: "SiderWrapper" });

  const { prefixCls } = useDesign("layout-sider");
  const { getIsMobile } = useAppInject();
  const { setMenuSetting, getCollapsed, getMenuWidth, getIsMixSidebar } = useMenuSetting();

  function handleClose() {
    setMenuSetting({
      collapsed: true
    });
  }
  onBeforeMount(async () => {
    await nextTick();
    if (unref(getIsMobile)) {
      handleClose();
    }
  });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-layout-sider";

  .@{prefix-cls} {
    &-drawer {
      .ant-drawer-body {
        height: 100vh;
        padding: 0;
      }

      .ant-drawer-header-no-title {
        display: none;
      }
    }
  }
</style>
