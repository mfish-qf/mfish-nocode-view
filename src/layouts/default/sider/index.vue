<template>
  <div :class="`${prefixCls}-wrapper`">
    <Drawer v-if="getIsMobile" placement="left" :class="`${prefixCls}-drawer`" :width="getMenuWidth"
            :getContainer="null" :visible="!getCollapsed" @close="handleClose">
      <Sider />
    </Drawer>
    <MixSider v-else-if="getIsMixSidebar" />
    <Sider v-else />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Sider from "./LayoutSider.vue";
import MixSider from "./MixSider.vue";
import { Drawer } from "ant-design-vue";
import { useAppInject } from "/@/hooks/web/UseAppInject";
import { useMenuSetting } from "/@/hooks/setting/UseMenuSetting";
import { useDesign } from "/@/hooks/web/UseDesign";

export default defineComponent({
  name: "SiderWrapper",
  components: { Sider, Drawer, MixSider },
  setup() {
    const { prefixCls } = useDesign("layout-sider");
    const { getIsMobile } = useAppInject();
    const { setMenuSetting, getCollapsed, getMenuWidth, getIsMixSidebar } = useMenuSetting();

    function handleClose() {
      setMenuSetting({
        collapsed: true
      });
    }

    return { prefixCls, getIsMobile, getCollapsed, handleClose, getMenuWidth, getIsMixSidebar };
  }
});
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-layout-sider';

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
