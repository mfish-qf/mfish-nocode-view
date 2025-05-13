<template>
  <Scrollbar ref="scrollbarRef" class="scroll-container" v-bind="$attrs">
    <slot></slot>
  </Scrollbar>
</template>

<script lang="ts" setup>
  import { nextTick, ref, unref } from "vue";
  import { Scrollbar, ScrollbarType } from "../../Scrollbar";
  import { useScrollTo } from "@core/hooks";
  import { Nullable } from "@mfish/types";

  defineOptions({ name: "ScrollContainer" });

  const scrollbarRef = ref<Nullable<ScrollbarType>>(null);

  function getScrollWrap() {
    const scrollbar = unref(scrollbarRef);
    if (!scrollbar) {
      return null;
    }
    return scrollbar.wrap;
  }

  /**
   * Scroll to the specified position
   */
  function scrollTo(to: number, duration = 500) {
    const wrap = unref(getScrollWrap());
    nextTick(() => {
      if (!wrap) {
        return;
      }
      const { start } = useScrollTo({
        el: wrap,
        to,
        duration
      });
      start();
    });
  }

  /**
   * Scroll to the bottom
   */
  function scrollBottom() {
    const wrap = unref(getScrollWrap());
    nextTick(() => {
      if (!wrap) {
        return;
      }
      const scrollHeight = wrap.scrollHeight as number;
      const { start } = useScrollTo({
        el: wrap,
        to: scrollHeight
      });
      start();
    });
  }

  defineExpose({
    scrollTo,
    scrollBottom
  });
</script>
<style lang="less">
  .scroll-container {
    width: 100%;
    height: 100%;

    .scrollbar__wrap {
      width: 100%;
    }

    .scrollbar__view {
      box-sizing: border-box;
    }
  }
</style>
