<template>
  <span :class="getTagClass" v-if="getShowTag">{{ getContent }}</span>
</template>
<script lang="ts" setup>
  import type { Menu } from "@mfish/core/router";
  import { computed, PropType } from "vue";
  import { useDesign } from "@mfish/core/hooks";
  import { propTypes } from "@mfish/core/utils/PropTypes";

  defineOptions({ name: "SimpleMenuTag" });

  const props = defineProps({
    item: {
      type: Object as PropType<Menu>,
      default: () => ({})
    },
    dot: propTypes.bool,
    collapseParent: propTypes.bool
  });

  const { prefixCls } = useDesign("simple-menu");

  const getShowTag = computed(() => {
    const { item } = props;

    if (!item) return false;

    const { tag } = item;
    if (!tag) return false;

    const { dot, content } = tag;
    return !(!dot && !content);
  });

  const getContent = computed(() => {
    if (!getShowTag.value) return "";
    const { item, collapseParent } = props;
    const { tag } = item;
    const { dot, content } = tag!;
    return dot || collapseParent ? "" : content;
  });

  const getTagClass = computed(() => {
    const { item, collapseParent } = props;
    const { tag = {} } = item || {};
    const { dot, type = "error" } = tag;
    const tagCls = `${prefixCls}-tag`;
    return [
      tagCls,

      [`${tagCls}--${type}`],
      {
        [`${tagCls}--collapse`]: collapseParent,
        [`${tagCls}--dot`]: dot || props.dot
      }
    ];
  });
</script>
