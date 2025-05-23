<template>
  <ASelect
    @dropdown-visible-change="handleFetch"
    v-bind="attrs"
    @change="handleChange"
    :options="getOptions"
    v-model:value="state"
  >
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
    <template #suffixIcon v-if="loading">
      <LoadingOutlined spin />
    </template>
    <template #notFoundContent v-if="loading">
      <span>
        <LoadingOutlined spin class="mr-1" />
        {{ t("component.form.apiSelectNotFound") }}
      </span>
    </template>
  </ASelect>
</template>
<script lang="ts" setup>
  import { computed, PropType, ref, unref, watch, watchEffect } from "vue";
  import { Select as ASelect } from "ant-design-vue";
  import { isFunction } from "@core/utils/Is";
  import { useAttrs, useI18n, useRuleFormItem } from "@core/hooks";
  import { get, omit } from "lodash-es";
  import { LoadingOutlined } from "@ant-design/icons-vue";
  import { propTypes } from "@core/utils/PropTypes";
  import { SelectValue } from "ant-design-vue/es/select";
  import { Recordable } from "@mfish/types";

  type OptionsItem = { label: string; value: string; disabled?: boolean };
  defineOptions({ name: "ApiSelect", inheritAttrs: false });
  const props = defineProps({
    value: { type: [Array, Object, String, Number] as PropType<SelectValue> },
    numberToString: propTypes.bool,
    api: {
      type: Function as PropType<(arg?: Recordable) => Promise<OptionsItem[]>>,
      default: null
    },
    // api params
    params: propTypes.any.def({}),
    // support xxx.xxx.xx
    resultField: propTypes.string.def(""),
    labelField: propTypes.string.def("label"),
    valueField: propTypes.string.def("value"),
    immediate: propTypes.bool.def(true),
    alwaysLoad: propTypes.bool.def(false),
    // 标签条件禁用
    disabledCondition: {
      type: Function as PropType<(val?: Recordable) => Boolean>,
      default: null
    }
  });
  const emit = defineEmits(["options-change", "change", "update:value"]);

  const options = ref<OptionsItem[]>([]);
  const loading = ref(false);
  const isFirstLoad = ref(true);
  const emitData = ref<any[]>([]);
  const attrs = useAttrs();
  const { t } = useI18n();
  // 嵌入表单中，只需使用钩子绑定执行表单验证
  const [state] = useRuleFormItem(props, "value", "change", emitData);
  const getOptions = computed(() => {
    const { labelField, valueField, numberToString } = props;
    return unref(options).reduce((prev, next: Recordable) => {
      if (next) {
        const value = next[valueField];
        const labels = labelField.split(",");
        let labelJoin = "";
        for (const label of labels) {
          labelJoin += `-${next[label]}`;
        }
        if (labelJoin.length > 0) {
          labelJoin = labelJoin.slice(1);
        }
        prev.push({
          ...omit(next, [labelField, valueField]),
          label: labelJoin,
          value: numberToString ? `${value}` : value,
          disabled: next.labelDisabled ?? false
        });
      }
      return prev;
    }, [] as OptionsItem[]);
  });

  watchEffect(() => {
    props.immediate && !props.alwaysLoad && fetch();
  });

  watch(
    () => state.value,
    (v) => {
      emit("update:value", v);
    }
  );

  watch(
    () => props.params,
    () => {
      !unref(isFirstLoad) && fetch();
    },
    { deep: true }
  );

  async function fetch() {
    const api = props.api;
    if (!api || !isFunction(api)) return;
    options.value = [];
    try {
      loading.value = true;
      const res = await api(props.params);
      if (Array.isArray(res)) {
        options.value = res;
      } else if (props.resultField) {
        options.value = get(res, props.resultField) || [];
      }
      if (props.disabledCondition) {
        options.value.forEach((val) => {
          //@ts-ignore 临时属性，实际设置到disable中
          val.labelDisabled = props.disabledCondition(val);
        });
      }
      emitChange();
    } catch (error) {
      console.warn(error);
    } finally {
      loading.value = false;
    }
  }

  async function handleFetch(visible: any) {
    if (visible) {
      if (props.alwaysLoad) {
        await fetch();
      } else if (!props.immediate && unref(isFirstLoad)) {
        await fetch();
        isFirstLoad.value = false;
      }
    }
  }

  function emitChange() {
    emit("options-change", unref(getOptions));
  }

  function handleChange(_: any, ...args: any) {
    emitData.value = args;
  }
</script>
