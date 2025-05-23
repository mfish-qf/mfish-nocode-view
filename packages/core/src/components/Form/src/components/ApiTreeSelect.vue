<template>
  <ATreeSelect v-bind="getAttrs" @change="handleChange">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
    <template #suffixIcon v-if="loading">
      <LoadingOutlined spin />
    </template>
    <template #title="text" v-if="icon !== undefined">
      <Icon :icon="icon" />
      {{ text[getAttrs.fieldNames.label] }}
    </template>
  </ATreeSelect>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, PropType, ref, unref, watch } from "vue";
  import { TreeSelect } from "ant-design-vue";
  import { isArray, isFunction } from "@core/utils/Is";
  import { get } from "lodash-es";
  import { propTypes } from "@core/utils/PropTypes";
  import { LoadingOutlined } from "@ant-design/icons-vue";
  import { Icon } from "@core/components/Icon";
  import { Recordable } from "@mfish/types";

  export default defineComponent({
    name: "ApiTreeSelect",
    components: { Icon, ATreeSelect: TreeSelect, LoadingOutlined },
    props: {
      icon: { type: String },
      api: { type: Function as PropType<(arg?: Recordable) => Promise<Recordable>> },
      params: { type: Object },
      immediate: { type: Boolean, default: true },
      resultField: propTypes.string.def("")
    },
    emits: ["options-change", "change"],
    setup(props, { attrs, emit }) {
      const treeData = ref<Recordable[]>([]);
      const isFirstLoaded = ref<Boolean>(false);
      const loading = ref(false);
      const getAttrs: any = computed(() => {
        return {
          ...(props.api ? { treeData: unref(treeData) } : {}),
          ...attrs
        };
      });

      function handleChange(...args: any) {
        emit("change", ...args);
      }

      watch(
        () => props.params,
        () => {
          !unref(isFirstLoaded) && fetch();
        },
        { deep: true }
      );

      watch(
        () => props.immediate,
        (v) => {
          v && !isFirstLoaded.value && fetch();
        }
      );

      onMounted(() => {
        props.immediate && fetch();
      });

      async function fetch() {
        const { api } = props;
        if (!api || !isFunction(api)) return;
        loading.value = true;
        treeData.value = [];
        let result;
        try {
          result = await api(props.params);
        } catch (error) {
          console.error(error);
        }
        loading.value = false;
        if (!result) return;
        if (!isArray(result)) {
          result = get(result, props.resultField);
        }
        treeData.value = (result as Recordable[]) || [];
        isFirstLoaded.value = true;
        emit("options-change", treeData.value);
      }

      return { getAttrs, loading, handleChange };
    }
  });
</script>
