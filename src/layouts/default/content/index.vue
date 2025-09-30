<template>
  <div :class="[prefixCls, getLayoutContentMode]" :loading="getOpenPageLoading && getPageLoading">
    <ADropdown
      :open="open"
      :trigger="['click']"
      placement="topLeft"
      :arrow="{ pointAtCenter: true }"
      :overlay-style="{ width: '500px', minWidth: '300px' }"
    >
      <template #overlay>
        <AMenu>
          <AMenu.Item style="padding: 0; cursor: default; background: transparent">
            <MfishChat style="height: 70vh; display: flex" @close="open = false" />
          </AMenu.Item>
        </AMenu>
      </template>
      <AFloatButton type="primary" tooltip="您好，我是您的摸鱼小助手" :style="{ right: '5px' }" @click="open = !open">
        <template #icon>
          <RedditOutlined />
        </template>
      </AFloatButton>
    </ADropdown>
    <PageLayout />
  </div>
</template>
<script lang="ts" setup>
  import PageLayout from "@/layouts/page/index.vue";
  import { useDesign, useRootSetting, useTransitionSetting } from "@mfish/core/hooks";
  import { useContentViewHeight } from "./UseContentViewHeight";
  import { FloatButton as AFloatButton, Menu as AMenu, Dropdown as ADropdown } from "ant-design-vue";
  import { RedditOutlined } from "@ant-design/icons-vue";
  import { ref } from "vue";
  import MfishChat from "@/views/sys/ai/MfishChat.vue";

  defineOptions({ name: "LayoutContent" });
  const { prefixCls } = useDesign("layout-content");
  const { getOpenPageLoading } = useTransitionSetting();
  const { getLayoutContentMode, getPageLoading } = useRootSetting();

  useContentViewHeight();
  const open = ref<boolean>(false);
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-layout-content";

  .@{prefix-cls} {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;

    &.fixed {
      width: 1200px;
      margin: 0 auto;
    }

    &-loading {
      position: absolute;
      top: 200px;
      z-index: @page-loading-z-index;
    }
  }
  .@{prefix-cls}-chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 10px;
    font-weight: 700;
    color: @main-color;
  }
</style>
