<template>
  <Transfer
    :data-source="getDataSource"
    :filter-option="filterOption"
    :render="(item) => item.title"
    :show-select-all="showSelectAll"
    :selected-keys="selectedKeys"
    :target-keys="getTargetKeys"
    :show-search="showSearch"
    @change="handleChange"
  />
</template>

<script lang="ts" setup>
  import { computed, watch, ref, unref, watchEffect, PropType } from "vue";
  import { Transfer } from "ant-design-vue";
  import { isFunction } from "@/utils/Is";
  import { get, omit } from "lodash-es";
  import { propTypes } from "@/utils/PropTypes";
  import { TransferDirection, TransferItem } from "ant-design-vue/lib/transfer";
  import { Recordable, Fn } from "@mfish/types";

  const props = defineProps({
    value: { type: Array as PropType<Array<string>> },
    api: {
      type: Function as PropType<(arg?: Recordable) => Promise<TransferItem[]>>,
      default: null
    },
    params: { type: Object },
    dataSource: { type: Array as PropType<Array<TransferItem>> },
    immediate: propTypes.bool.def(true),
    alwaysLoad: propTypes.bool.def(false),
    afterFetch: { type: Function as PropType<Fn> },
    resultField: propTypes.string.def(""),
    labelField: propTypes.string.def("title"),
    valueField: propTypes.string.def("key"),
    showSearch: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    filterOption: {
      type: Function as PropType<(inputValue: string, item: TransferItem) => boolean>
    },
    selectedKeys: { type: Array as PropType<Array<string>> },
    showSelectAll: { type: Boolean, default: false },
    targetKeys: { type: Array as PropType<Array<string>> }
  });
  const emit = defineEmits(["options-change", "change"]);
  const _dataSource = ref<TransferItem[]>([]);
  const _targetKeys = ref<string[]>([]);

  const getDataSource = computed(() => {
    const { labelField, valueField } = props;

    return unref(_dataSource).reduce((prev, next: Recordable) => {
      if (next) {
        prev.push({
          ...omit(next, [labelField, valueField]),
          title: next[labelField],
          key: next[valueField]
        });
      }
      return prev;
    }, [] as TransferItem[]);
  });
  const getTargetKeys = computed<string[]>(() => {
    if (unref(_targetKeys).length > 0) {
      return unref(_targetKeys);
    }
    if (Array.isArray(props.value)) {
      return props.value;
    }
    return [];
  });

  function handleChange(keys: string[], direction: TransferDirection, moveKeys: string[]) {
    _targetKeys.value = keys;
    console.log(direction);
    console.log(moveKeys);
    emit("change", keys);
  }

  watchEffect(() => {
    props.immediate && !props.alwaysLoad && fetch();
  });

  watch(
    () => props.params,
    () => {
      fetch();
    },
    { deep: true }
  );

  async function fetch() {
    const api = props.api;
    if (!api || !isFunction(api)) {
      if (Array.isArray(props.dataSource)) {
        _dataSource.value = props.dataSource;
      }
      return;
    }
    _dataSource.value = [];
    try {
      const res = await api(props.params);
      if (Array.isArray(res)) {
        _dataSource.value = res;
        emitChange();
        return;
      }
      if (props.resultField) {
        _dataSource.value = get(res, props.resultField) || [];
      }
      emitChange();
    } catch (error) {
      console.warn(error);
    }
  }

  function emitChange() {
    emit("options-change", unref(getDataSource));
  }
</script>
