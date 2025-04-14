<template>
  <ScrollContainer ref="wrapperRef">
    <div ref="spinRef" :style="spinStyle" v-loading="loading" :loading-tip="loadingTip">
      <slot></slot>
    </div>
  </ScrollContainer>
</template>
<script lang="ts" setup>
  import type { CSSProperties } from "vue";
  import { computed, ref, watchEffect, unref, watch, onMounted, nextTick } from "vue";
  import { useWindowSizeFn } from "@core/hooks/event/UseWindowSizeFn.ts";
  import { ScrollContainer } from "../../../Container";
  import { createModalContext } from "../hooks/UseModalContext";
  import { useMutationObserver } from "@vueuse/core";

  defineOptions({ name: "ModalWrapper", inheritAttrs: false });

  const props = defineProps({
    loading: { type: Boolean },
    useWrapper: { type: Boolean, default: true },
    modalHeaderHeight: { type: Number, default: 52 },
    modalFooterHeight: { type: Number, default: 64 },
    minHeight: { type: Number, default: 200 },
    height: { type: Number },
    footerOffset: { type: Number, default: 0 },
    open: { type: Boolean },
    fullScreen: { type: Boolean },
    loadingTip: { type: String }
  });

  const emit = defineEmits(["heightChange", "extHeight"]);

  const wrapperRef = ref(null);
  const spinRef = ref(null);
  const realHeightRef = ref(0);
  const minRealHeightRef = ref(0);
  let realHeight = 0;

  useWindowSizeFn(setModalHeight.bind(null));

  useMutationObserver(
    spinRef,
    () => {
      setModalHeight();
    },
    {
      attributes: true,
      subtree: true
    }
  );

  createModalContext({
    redoModalHeight: setModalHeight
  });

  const spinStyle = computed((): CSSProperties => {
    return {
      minHeight: `${props.minHeight}px`,
      [props.fullScreen ? "height" : "maxHeight"]: `${unref(realHeightRef)}px`
    };
  });

  watchEffect(() => {
    props.useWrapper && setModalHeight();
  });

  watch(
    () => props.fullScreen,
    (v) => {
      setModalHeight();
      if (v) {
        minRealHeightRef.value = realHeightRef.value;
      } else {
        realHeightRef.value = minRealHeightRef.value;
      }
    }
  );

  onMounted(() => {
    const { modalHeaderHeight, modalFooterHeight } = props;
    emit("extHeight", modalHeaderHeight + modalFooterHeight);
  });

  async function scrollTop() {
    nextTick(() => {
      const wrapperRefDom = unref(wrapperRef);
      if (!wrapperRefDom) return;
      (wrapperRefDom as any)?.scrollTo?.(0);
    }).then();
  }

  async function setModalHeight() {
    // 解决在弹窗关闭的时候监听还存在,导致再次打开弹窗没有高度
    // 加上这个,就必须在使用的时候传递父级的open
    if (!props.open) return;
    const wrapperRefDom = unref(wrapperRef);
    if (!wrapperRefDom) return;

    const bodyDom = (wrapperRefDom as any).$el.parentElement;
    if (!bodyDom) return;
    bodyDom.style.padding = "0";
    await nextTick();

    try {
      const modalDom = bodyDom.parentElement && bodyDom.parentElement.parentElement;
      if (!modalDom) return;
      const maxHeight =
        window.innerHeight - (props.footerOffset! || 0) - props.modalFooterHeight - props.modalHeaderHeight;

      await nextTick();
      const spinEl: any = unref(spinRef);

      if (!spinEl) return;
      await nextTick();
      realHeight = spinEl.scrollHeight;
      if (props.fullScreen) {
        realHeightRef.value = window.innerHeight - props.modalFooterHeight - props.modalHeaderHeight;
      } else {
        realHeightRef.value = props.height || realHeight > maxHeight ? maxHeight : realHeight;
      }
      emit("heightChange", unref(realHeightRef));
    } catch (error) {
      console.log(error);
    }
  }
  defineExpose({ scrollTop, setModalHeight });
</script>
