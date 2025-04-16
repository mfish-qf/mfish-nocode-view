<template>
  <div class="relative !h-full w-full overflow-hidden" ref="el" style="border-radius: 6px"></div>
</template>

<script lang="ts" setup>
  import { nextTick, onMounted, onUnmounted, PropType, ref, unref, watch, watchEffect } from "vue";
  import { useDebounceFn } from "@vueuse/core";
  import { useAppStore } from "@mfish/stores/modules";
  import { useWindowSizeFn } from "@core/hooks";
  import CodeMirror from "codemirror";
  import { MODE } from "../Typing";
  // css
  import "./codemirror.css";
  import "codemirror/theme/idea.css";
  import "codemirror/theme/material-darker.css";
  // modes
  import "codemirror/mode/javascript/javascript";
  import "codemirror/mode/css/css";
  import "codemirror/mode/htmlmixed/htmlmixed";
  import { Nullable } from "@mfish/types";

  const props = defineProps({
    mode: {
      type: String as PropType<MODE>,
      default: MODE.JSON,
      validator(value: any) {
        // 这个值必须匹配下列字符串中的一个
        return Object.values(MODE).includes(value);
      }
    },
    value: { type: String, default: "" },
    readonly: { type: Boolean, default: false }
  });

  const emit = defineEmits(["change"]);

  const el = ref();
  let editor: Nullable<CodeMirror.Editor>;

  const debounceRefresh = useDebounceFn(refresh, 100);
  const appStore = useAppStore();

  watch(
    () => props.value,
    async (value) => {
      await nextTick();
      const oldValue = editor?.getValue();
      if (value !== oldValue) {
        editor?.setValue(value || "");
      }
    },
    { flush: "post" }
  );

  watchEffect(() => {
    editor?.setOption("mode", props.mode);
  });

  watch(
    () => appStore.getDarkMode,
    async () => {
      setTheme();
    },
    {
      immediate: true
    }
  );

  function setTheme() {
    unref(editor)?.setOption("theme", appStore.getDarkMode === "light" ? "idea" : "material-darker");
  }

  function refresh() {
    editor?.refresh();
  }

  async function init() {
    const addonOptions = {
      autoCloseBrackets: true,
      autoCloseTags: true,
      foldGutter: true,
      gutters: ["CodeMirror-linenumbers"]
    };

    editor = CodeMirror(el.value!, {
      value: "",
      mode: props.mode,
      readOnly: props.readonly,
      tabSize: 2,
      theme: "material-palenight",
      lineWrapping: true,
      lineNumbers: true,
      ...addonOptions
    });
    editor?.setValue(props.value);
    setTheme();
    editor?.on("change", () => {
      emit("change", editor?.getValue());
    });
  }

  onMounted(async () => {
    await nextTick();
    init().then();
    useWindowSizeFn(debounceRefresh);
  });

  onUnmounted(() => {
    editor = null;
  });
</script>
