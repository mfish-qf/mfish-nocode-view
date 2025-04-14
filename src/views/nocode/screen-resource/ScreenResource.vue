<!--
 @description: 大屏资源
 @author: mfish
 @date: 2025/3/28
-->
<template>
  <ADropdown
    :trigger="['click']"
    placement="bottom"
    :arrow="{ pointAtCenter: true }"
    :overlay-style="{ width: `${width}px` }"
  >
    <template #overlay>
      <AMenu>
        <AMenu.Item disabled style="padding: 0; cursor: default">
          <iframe ref="frameRef" :src="frameSrc" :height="height" :class="`${prefixCls}_frame`"></iframe>
        </AMenu.Item>
      </AMenu>
    </template>
    <AButton type="primary" v-bind="$attrs" pre-icon="ant-design:shopping-outlined"> 资源中心</AButton>
  </ADropdown>
</template>
<script setup lang="ts">
  import { Dropdown as ADropdown, Menu as AMenu } from "ant-design-vue";
  import { onMounted, onUnmounted, ref, unref, useTemplateRef, watch } from "vue";
  import { useDesign } from "@mfish/core";
  import { useAppStore } from "@mfish/stores/modules";
  const emit = defineEmits(["cloneScreen"]);
  const { prefixCls } = useDesign("screen-resource");
  const frameSrc = "/low-code/mf-screen/resource";
  const frameRef = useTemplateRef("frameRef");
  const width = ref(600);
  const height = ref<number>(400);
  const updateWidth = () => {
    if (window.innerWidth < 450) {
      width.value = 350;
    } else if (window.innerWidth < 768) {
      width.value = 450;
    } else {
      width.value = 800;
    }
    height.value = Math.max(window.innerHeight - 320, 200);
  };
  watch(
    () => useAppStore().getDarkMode,
    (val) => {
      postMessage(val, "/");
    }
  );
  /**
   * 'https://example.com'：只允许 example.com 接收。
   *
   * ' * '：任何页面都能接收（不安全，谨慎使用）。
   *
   * '/'：只允许与当前页面同源的 iframe 接收。
   * @param message
   * @param targetOrigin
   */
  const postMessage = (message: any, targetOrigin: string) => {
    const iframe = unref(frameRef);
    if (!iframe) return;
    iframe.contentWindow?.postMessage(message, targetOrigin);
  };
  const iframeEvent = (event) => {
    if (event.data?.cloneScreen) {
      emit("cloneScreen", event.data.cloneScreen);
    }
  };

  onMounted(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    window.addEventListener("message", iframeEvent);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateWidth);
    window.removeEventListener("message", iframeEvent);
  });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-screen-resource";

  .@{prefix-cls}_frame {
    width: 100%;
    overflow: hidden;
    border: 0;
  }
</style>
