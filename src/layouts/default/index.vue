<template>
  <Layout :class="prefixCls" v-bind="lockEvents">
    <LayoutFeatures />
    <LayoutHeader :fixed="true" v-if="getShowFullHeaderRef" />
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

<script lang="ts" setup>
  import { computed, unref } from "vue";
  import { Layout } from "ant-design-vue";
  import { createAsyncComponent } from "@mfish/core/src/utils/factory/CreateAsyncComponent";
  import LayoutHeader from "./header/index.vue";
  import LayoutContent from "./content/index.vue";
  import LayoutSideBar from "./sider/index.vue";
  import LayoutMultipleHeader from "./header/MultipleHeader.vue";
  import { useHeaderSetting } from "@mfish/core/src/hooks/setting/UseHeaderSetting";
  import { useMenuSetting } from "@mfish/core/src/hooks/setting/UseMenuSetting";
  import { useDesign } from "@mfish/core";
  import { useLockPage } from "@/hooks/UseLockPage";
  import { useAppInject } from "@/hooks/UseAppInject";
  defineOptions({ name: "DefaultLayout" });

  const LayoutFeatures = createAsyncComponent(() => import("@/layouts/default/feature/index.vue"));
  const LayoutFooter = createAsyncComponent(() => import("@/layouts/default/footer/index.vue"));
  const { prefixCls } = useDesign("default-layout");
  const { getIsMobile } = useAppInject();
  const { getShowFullHeaderRef } = useHeaderSetting();
  const { getShowSidebar, getIsMixSidebar, getShowMenu } = useMenuSetting();

  // Create a lock screen monitor
  const lockEvents = useLockPage();

  const layoutClass = computed(() => {
    const cls: string[] = ["ant-layout"];
    if (unref(getIsMixSidebar) || unref(getShowMenu)) {
      cls.push("ant-layout-has-sider");
    }
    return cls;
  });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-default-layout";

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

    &-siderbar {
    }
  }
</style>
