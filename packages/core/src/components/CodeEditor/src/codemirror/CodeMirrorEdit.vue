<template>
  <div
    class="relative !h-full w-full overflow-hidden"
    :class="{ 'cm-dark': appStore.getDarkMode !== 'light' }"
    style="border-radius: 6px; min-height: 100px"
  >
    <Codemirror v-model="code" :style="{ height: '100%' }" :extensions="extensions" @ready="handleReady" />
  </div>
</template>

<script lang="ts" setup>
  import { ref, shallowRef, watch } from "vue";
  import { Codemirror } from "vue-codemirror";
  import { basicSetup } from "codemirror";
  import { Compartment, EditorState } from "@codemirror/state";
  import { json } from "@codemirror/lang-json";
  import { javascript } from "@codemirror/lang-javascript";
  import { html } from "@codemirror/lang-html";
  import { materialDark } from "cm6-theme-material-dark";
  import type { EditorView } from "@codemirror/view";
  import { useAppStore } from "@mfish/stores/modules";
  import { MODE } from "../Typing";

  const props = defineProps({
    mode: {
      type: String as () => MODE,
      default: MODE.JSON,
      validator(value: MODE) {
        return Object.values(MODE).includes(value);
      }
    },
    value: { type: String, default: "" },
    readonly: { type: Boolean, default: false }
  });

  const emit = defineEmits(["change"]);

  const code = ref(props.value);
  const view = shallowRef<EditorView>();
  const appStore = useAppStore();

  const languageCompartment = new Compartment();
  const themeCompartment = new Compartment();
  const readOnlyCompartment = new Compartment();

  function getLanguage(mode: string) {
    switch (mode) {
      case MODE.JSON: {
        return json();
      }
      case MODE.JS: {
        return javascript();
      }
      case MODE.HTML: {
        return html();
      }
      default: {
        return json();
      }
    }
  }

  const extensions = [
    basicSetup,
    languageCompartment.of(getLanguage(props.mode)),
    themeCompartment.of(appStore.getDarkMode === "light" ? [] : materialDark),
    readOnlyCompartment.of(EditorState.readOnly.of(props.readonly))
  ];

  function handleReady(payload: { view: EditorView }) {
    view.value = payload.view;
  }

  watch(
    () => props.value,
    (newValue) => {
      if (newValue !== code.value) {
        code.value = newValue ?? "";
      }
    }
  );

  watch(
    () => props.mode,
    (newMode) => {
      if (view.value) {
        view.value.dispatch({ effects: languageCompartment.reconfigure(getLanguage(newMode)) });
      }
    }
  );

  watch(
    () => props.readonly,
    (newReadonly) => {
      if (view.value) {
        view.value.dispatch({ effects: readOnlyCompartment.reconfigure(EditorState.readOnly.of(newReadonly)) });
      }
    }
  );

  watch(
    () => appStore.getDarkMode,
    () => {
      if (view.value) {
        view.value.dispatch({
          effects: themeCompartment.reconfigure(appStore.getDarkMode === "light" ? [] : materialDark)
        });
      }
    }
  );

  watch(code, (newVal) => {
    emit("change", newVal);
  });
</script>

<style lang="less" scoped>
  .cm-dark {
    :deep(.cm-editor) {
      background-color: @sider-darken-bg-color !important;
    }

    :deep(.cm-gutters) {
      background-color: @sider-darken-bg-color !important;
    }

    :deep(.cm-activeLine) {
      background-color: rgba(255, 255, 255, 0.06) !important;
    }

    :deep(.cm-activeLineGutter) {
      background-color: rgba(255, 255, 255, 0.06) !important;
    }

    :deep(.cm-selectionBackground) {
      background-color: rgba(255, 255, 255, 0.15) !important;
    }
  }
</style>
