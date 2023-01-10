<template>
  <span :class="`${prefixCls}__extra-fold`" @click="handleFold">
    <Icon :icon="getIcon" />
  </span>
</template>
<script lang="ts">
import { defineComponent, unref, computed } from "vue";
import { Icon } from "/@/components/general/Icon";
import { useDesign } from "/@/hooks/web/UseDesign";
import { useHeaderSetting } from "/@/hooks/setting/UseHeaderSetting";
import { useMenuSetting } from "/@/hooks/setting/UseMenuSetting";
import { triggerWindowResize } from "/@/utils/event";

export default defineComponent({
  name: "FoldButton",
  components: { Icon },
  setup() {
    const { prefixCls } = useDesign("multiple-tabs-content");
    const { getShowMenu, setMenuSetting } = useMenuSetting();
    const { getShowHeader, setHeaderSetting } = useHeaderSetting();

    const getIsUnFold = computed(() => !unref(getShowMenu) && !unref(getShowHeader));

    const getIcon = computed(() =>
      unref(getIsUnFold) ? "codicon:screen-normal" : "codicon:screen-full"
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
