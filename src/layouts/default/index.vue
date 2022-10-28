<template>
  <Layout :class="prefixCls" v-bind="lockEvents">
    <LayoutFeatures />
    <LayoutHeader fixed v-if="getShowFullHeaderRef" />
    <Layout :class="[layoutClass]">
      <LayoutSideBar v-if="getShowSidebar || getIsMobile" />
      <Layout :class="`${prefixCls}-main`">
        <LayoutMultipleHeader />
        <LayoutContent />
        <LayoutFooter />
      </Layout>
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, computed, unref } from "vue";
import { Layout } from "ant-design-vue";
import { createAsyncComponent } from "/@/utils/factory/CreateAsyncComponent";
import LayoutHeader from "./header/index.vue";
import LayoutContent from "./content/index.vue";
import LayoutSideBar from "./sider/index.vue";
import LayoutMultipleHeader from "./header/MultipleHeader.vue";
import { useHeaderSetting } from "/@/hooks/setting/UseHeaderSetting";
import { useMenuSetting } from "/@/hooks/setting/UseMenuSetting";
import { useDesign } from "/@/hooks/web/UseDesign";
import { useLockPage } from "/@/hooks/web/UseLockPage";
import { useAppInject } from "/@/hooks/web/UseAppInject";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    LayoutFeatures: createAsyncComponent(() => import("/@/layouts/default/feature/index.vue")),
    LayoutFooter: createAsyncComponent(() => import("/@/layouts/default/footer/index.vue")),
    LayoutHeader,
    LayoutContent,
    LayoutSideBar,
    LayoutMultipleHeader,
    Layout
  },
  setup() {
    const { prefixCls } = useDesign("default-layout");
    const { getIsMobile } = useAppInject();
    const { getShowFullHeaderRef } = useHeaderSetting();
    const { getShowSidebar, getIsMixSidebar, getShowMenu } = useMenuSetting();
    //创建一个锁定屏幕的监听
    const lockEvents = useLockPage();
    const layoutClass = computed(() => {
      let cls: string[] = ["ant-layout"];
      if (unref(getIsMixSidebar) || unref(getShowMenu)) {
        cls.push("ant-layout-has-sider");
      }
      return cls;
    });

    return {
      getShowFullHeaderRef,
      getShowSidebar,
      prefixCls,
      getIsMobile,
      getIsMixSidebar,
      layoutClass,
      lockEvents
    };
  }
});
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-default-layout';

.@{prefix-cls} {
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: @content-bg;
  flex-direction: column;

  > .ant-layout {
    min-height: 100%;
  }

  &-main {
    width: 100%;
    margin-left: 1px;
  }
  &-siderbar{

  }
}
</style>
