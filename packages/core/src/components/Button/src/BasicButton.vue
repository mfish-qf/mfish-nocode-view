<template>
  <Button v-bind="getBindValue" :class="getButtonClass" @click="onClick">
    <template #icon>
      <slot name="icon"></slot>
    </template>
    <template #default="data">
      <Icon :icon="preIcon" v-if="preIcon" :size="iconSize" :color="iconColor" />
      <slot v-bind="data || {}"></slot>
      <Icon :icon="postIcon" v-if="postIcon" :size="iconSize" :color="iconColor" />
    </template>
  </Button>
</template>

<script lang="ts" setup>
  import { ComponentOptionsMixin, computed, unref } from "vue";
  import { Icon } from "../../Icon";
  import { buttonProps } from "./props";
  import { Button } from "ant-design-vue";
  import { useAttrs } from "@core/hooks";

  defineOptions({
    name: "AButton",
    extends: Button as ComponentOptionsMixin,
    inheritAttrs: false
  });
  const props = defineProps(buttonProps);
  // get component class
  const attrs = useAttrs({ excludeDefaultKeys: false });
  const getButtonClass = computed(() => {
    const { color, disabled } = props;
    return [
      {
        [`ant-btn-${color}`]: !!color,
        [`is-disabled`]: disabled
      }
    ];
  });

  // get inherit binding value
  const getBindValue = computed(() => ({ ...unref(attrs), ...props }));
</script>
