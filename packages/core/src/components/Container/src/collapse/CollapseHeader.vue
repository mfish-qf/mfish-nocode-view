<template>
  <div :class="[`${prefixCls}__header px-2 py-4`, $attrs.class]">
    <BasicTitle :help-message="helpMessage" bold>
      <template v-if="title">
        {{ title }}
      </template>
      <template v-else>
        <slot name="title"></slot>
      </template>
    </BasicTitle>
    <div :class="`${prefixCls}__action`">
      <slot name="action"></slot>
      <BasicArrow v-if="canExpan" up :expand="show" @click="$emit('expand')" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType } from "vue";
  import { BasicArrow, BasicTitle } from "../../../Basic";

  const props = {
    prefixCls: { type: String },
    helpMessage: {
      type: [Array, String] as PropType<string[] | string>,
      default: ""
    },
    title: { type: String },
    show: { type: Boolean },
    canExpan: { type: Boolean }
  };

  export default defineComponent({
    components: { BasicArrow, BasicTitle },
    inheritAttrs: false,
    props,
    emits: ["expand"]
  });
</script>
