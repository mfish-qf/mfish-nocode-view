<template>
  <span :class="`${prefixCls}__extra-fold`" @click="handleFold">
    <Icon :icon="getIcon" />
  </span>
</template>
<script lang="ts">
  import { computed, defineComponent, unref } from "vue";
  import { Icon } from "@mfish/core/components/Icon";
  import { useDesign, useHeaderSetting, useMenuSetting } from "@mfish/core/hooks";
  import { triggerWindowResize } from "@mfish/core/utils/event";

  export default defineComponent({
    name: "FoldButton",
    components: { Icon },
    setup() {
      const { prefixCls } = useDesign("multiple-tabs-content");
      const { getShowMenu, setMenuSetting } = useMenuSetting();
      const { getShowHeader, setHeaderSetting } = useHeaderSetting();

      const getIsUnFold = computed(() => !unref(getShowMenu) && !unref(getShowHeader));

      const getIcon = computed(() =>
        unref(getIsUnFold) ? "ant-design:fullscreen-exit-outlined" : "ant-design:fullscreen-outlined"
      );

      function handleFold() {
        const isUnFold = unref(getIsUnFold);
        setMenuSetting({
          show: isUnFold,
          hidden: !isUnFold
        });
        setHeaderSetting({ show: isUnFold });
        triggerWindowResize();
      }

      return { prefixCls, getIcon, handleFold };
    }
  });
</script>
