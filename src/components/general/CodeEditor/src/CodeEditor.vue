<template>
  <div class="h-full" style="border-radius: 6px">
    <CodeMirrorEditor
      :style="showBorder ? borderStyle : ''"
      :value="getValue"
      @change="handleValueChange"
      :mode="mode"
      :readonly="readonly"
    />
  </div>
</template>
<script lang="ts" setup>
  import { computed, PropType } from "vue";
  import CodeMirrorEditor from "./codemirror/CodeMirrorEdit.vue";
  import { isString } from "@/utils/Is";
  import { MODE } from "./Typing";
  import { theme } from "ant-design-vue";

  const props = defineProps({
    value: { type: [Object, String] as PropType<Record<string, any> | string> },
    mode: {
      type: String as PropType<MODE>,
      default: MODE.JSON,
      validator(value: any) {
        // 这个值必须匹配下列字符串中的一个
        return Object.values(MODE).includes(value);
      }
    },
    readonly: { type: Boolean },
    autoFormat: { type: Boolean, default: true },
    showBorder: { type: Boolean, default: true }
  });

  const emit = defineEmits(["change", "update:value", "format-error"]);
  const { token } = theme.useToken();
  const borderStyle = computed(() => {
    return {
      border: `1px solid ${token.value.colorBorder}`,
      borderRadius: "6px"
    };
  });

  const getValue = computed(() => {
    const { value, mode, autoFormat } = props;
    if (!autoFormat || mode !== MODE.JSON) {
      return value as string;
    }
    let result = value;
    if (isString(value)) {
      try {
        result = JSON.parse(value);
      } catch {
        emit("format-error", value);
        return value as string;
      }
    }
    return JSON.stringify(result, null, 2);
  });

  function handleValueChange(v) {
    emit("update:value", v);
    emit("change", v);
  }
</script>
