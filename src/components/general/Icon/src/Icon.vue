<template>
  <SvgIcon :size="size" :name="getSvgIcon" v-if="isSvgIcon" class="anticon" :class="[$attrs.class]" :spin="spin" />
  <span v-else class="app-iconify anticon" :class="[$attrs.class, spin && 'app-iconify-spin']" :style="getWrapStyle">
    <Icon :icon="getIconRef" />
  </span>
</template>
<script lang="ts" setup>
  import { PropType, computed, CSSProperties } from "vue";
  import SvgIcon from "./SvgIcon.vue";
  import { Icon } from "@iconify/vue";
  import { isString } from "@/utils/Is";
  import { propTypes } from "@/utils/PropTypes";
  import { theme } from "ant-design-vue";

  defineOptions({ name: "Icon" });
  const props = defineProps({
    // icon name
    icon: propTypes.string,
    // icon color
    color: propTypes.string,
    // icon size
    size: {
      type: [String, Number] as PropType<string | number>,
      default: 16
    },
    spin: propTypes.bool.def(false),
    prefix: propTypes.string.def("")
  });
  const SVG_END_WITH_FLAG = "|svg";
  const isSvgIcon = computed(() => props.icon?.endsWith(SVG_END_WITH_FLAG));
  const getSvgIcon = computed(() => props.icon.replace(SVG_END_WITH_FLAG, ""));
  const getIconRef = computed(() => `${props.prefix ? `${props.prefix}:` : ""}${props.icon}`);
  const { defaultSeed } = theme;

  const getWrapStyle = computed((): CSSProperties => {
    const { size, color } = props;
    let fs = size;
    if (isString(size)) {
      fs = Number.parseInt(size, 10);
    }
    return {
      fontSize: `${fs}px`,
      color:
        color === "success"
          ? defaultSeed.colorSuccess
          : color === "warning"
            ? defaultSeed.colorWarning
            : color === "error"
              ? defaultSeed.colorError
              : color,
      display: "inline-flex"
    };
  });
</script>
<style lang="less">
  .app-iconify {
    display: inline-block;

    &-spin {
      svg {
        animation: loadingCircle 1s infinite linear;
      }
    }
  }

  span.iconify {
    display: block;
    min-width: 1em;
    min-height: 1em;
    background-color: #5551;
    border-radius: 100%;
  }
</style>
