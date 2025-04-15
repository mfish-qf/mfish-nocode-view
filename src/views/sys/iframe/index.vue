<template>
  <div :class="prefixCls" :style="getWrapStyle">
    <Spin :spinning="loading" size="large" :style="getWrapStyle">
      <iframe :src="frameSrc" :class="`${prefixCls}__main`" ref="frameRef" @load="hideLoading"></iframe>
    </Spin>
  </div>
</template>
<script lang="ts" setup>
  import { computed, CSSProperties, onMounted, onUnmounted, ref, unref } from "vue";
  import { Spin } from "ant-design-vue";
  import { useDesign, useWindowSizeFn } from "@mfish/core/hooks";
  import { propTypes } from "@mfish/core/utils/PropTypes";
  import { useLayoutHeight } from "@/layouts/default/content/UseContentViewHeight";

  defineOptions({ name: "FramePage" });
  defineProps({
    frameSrc: propTypes.string.def("")
  });
  const emit = defineEmits(["message"]);
  const loading = ref(true);
  const topRef = ref(50);
  const heightRef = ref(window.innerHeight);
  const frameRef = ref();
  const { headerHeightRef } = useLayoutHeight();

  const { prefixCls } = useDesign("iframe-page");
  useWindowSizeFn(calcHeight, { wait: 150, immediate: true });

  const getWrapStyle = computed((): CSSProperties => {
    return {
      height: `${unref(heightRef)}px`
    };
  });

  function calcHeight() {
    const iframe = unref(frameRef);
    if (!iframe) {
      return;
    }
    const top = headerHeightRef.value;
    topRef.value = top;
    heightRef.value = window.innerHeight - top;
    const clientHeight = document.documentElement.clientHeight - top;
    iframe.style.height = `${clientHeight}px`;
  }

  function hideLoading() {
    loading.value = false;
    calcHeight();
  }

  const messageHandler = (e: MessageEvent) => {
    emit("message", e.data);
  };

  const postMessage = (message: any, targetOrigin: string, transfer?: any[]) => {
    const iframe = unref(frameRef);
    if (!iframe) return;
    iframe.contentWindow?.postMessage(message, targetOrigin, transfer);
  };

  const reload = () => {
    loading.value = true;
    const iframe = frameRef.value;
    if (!iframe) return;
    iframe.contentWindow?.location.reload();
    loading.value = false;
  };

  onMounted(() => {
    window.addEventListener("message", messageHandler);
  });

  onUnmounted(() => {
    window.removeEventListener("message", messageHandler);
  });

  defineExpose({ postMessage, reload });
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-iframe-page";

  .@{prefix-cls} {
    .ant-spin-nested-loading {
      position: relative;
      height: 100%;

      .ant-spin-container {
        width: 100%;
        height: 100%;
        padding: 10px;
      }
    }

    &__mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &__main {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border: 0;
      background-color: @component-background;
    }
  }
</style>
