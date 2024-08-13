<template>
  <Form
    v-bind="getBindValue"
    :class="getFormClass"
    ref="formElRef"
    :model="formModel"
    @keypress.enter="handleEnterPress"
  >
    <Row v-bind="getRow">
      <slot name="formHeader"></slot>
      <template v-for="schema in getSchema" :key="schema.field">
        <FormItem
          :is-advanced="fieldsIsAdvancedMap[schema.field]"
          :table-action="tableAction"
          :form-action-type="formActionType"
          :schema="schema"
          :form-props="getProps"
          :all-default-values="defaultValueRef"
          :form-model="formModel"
          :set-form-model="setFormModel"
        >
          <template #[item]="data" v-for="item in Object.keys($slots)">
            <slot :name="item" v-bind="data || {}"></slot>
          </template>
        </FormItem>
      </template>

      <FormAction v-bind="getFormActionBindProps" @toggle-advanced="handleToggleAdvanced">
        <template #[item]="data" v-for="item in ['resetBefore', 'submitBefore', 'advanceBefore', 'advanceAfter']">
          <slot :name="item" v-bind="data || {}"></slot>
        </template>
      </FormAction>
      <slot name="formFooter"></slot>
    </Row>
  </Form>
</template>
<script lang="ts" setup>
  import { FormActionType, FormProps, FormSchemaInner as FormSchema } from "./types/Form";
  import type { AdvanceState } from "./types/Hooks";
  import type { Ref } from "vue";
  import { reactive, ref, computed, unref, onMounted, watch, nextTick, useAttrs } from "vue";
  import { Form, Row, type FormProps as AntFormProps } from "ant-design-vue";
  import FormItem from "./components/FormItem.vue";
  import FormAction from "./components/FormAction.vue";
  import { dateItemType, isIncludeSimpleComponents } from "./Helper";
  import { dateUtil } from "@/utils/DateUtil";
  import { deepMerge } from "@/utils";
  import { useFormValues } from "./hooks/UseFormValues";
  import useAdvanced from "./hooks/UseAdvanced";
  import { useFormEvents } from "./hooks/UseFormEvents";
  import { createFormContext } from "./hooks/UseFormContext";
  import { useAutoFocus } from "./hooks/UseAutoFocus";
  import { useModalContext } from "@/components/general/Modal";
  import { useDebounceFn } from "@vueuse/core";
  import { basicProps } from "./Props";
  import { useDesign } from "@/hooks/web/UseDesign";
  import { cloneDeep } from "lodash-es";
  import { TableActionType } from "@/components/general/Table";

  defineOptions({ name: "BasicForm" });

  const props = defineProps(basicProps);

  const emit = defineEmits(["advanced-change", "reset", "submit", "register", "field-value-change"]);

  const attrs = useAttrs();

  const formModel = reactive({});
  const modalFn = useModalContext();

  const advanceState = reactive<AdvanceState>({
    isAdvanced: true,
    hideAdvanceBtn: false,
    isLoad: false,
    actionSpan: 6
  });

  const defaultValueRef = ref({});
  const isInitedDefaultRef = ref(false);
  const propsRef = ref<Partial<FormProps>>();
  const schemaRef = ref<FormSchema[] | null>(null);
  const formElRef = ref<FormActionType | null>(null);

  const { prefixCls } = useDesign("basic-form");

  // Get the basic configuration of the form
  const getProps = computed(() => {
    return { ...props, ...unref(propsRef) } as FormProps;
  });

  const getFormClass = computed(() => {
    return [
      prefixCls,
      {
        [`${prefixCls}--compact`]: unref(getProps).compact
      }
    ];
  });

  // Get uniform row style and Row configuration for the entire form
  const getRow = computed(() => {
    const { baseRowStyle = {}, rowProps } = unref(getProps);
    return {
      style: baseRowStyle,
      ...rowProps
    };
  });

  const getBindValue = computed(() => ({ ...attrs, ...props, ...unref(getProps) }) as AntFormProps);

  const getSchema = computed((): FormSchema[] => {
    const schemas: FormSchema[] = cloneDeep(unref(schemaRef) || (unref(getProps).schemas as any));
    for (const schema of schemas) {
      const { defaultValue, component, componentProps = {}, isHandleDateDefaultValue = true } = schema;
      // handle date type
      if (isHandleDateDefaultValue && defaultValue && component && dateItemType.includes(component)) {
        const opt = {
          schema,
          tableAction: props.tableAction ?? ({} as TableActionType),
          formModel,
          formActionType: {} as FormActionType
        };
        const valueFormat = componentProps
          ? typeof componentProps === "function"
            ? componentProps(opt).valueFormat
            : componentProps.valueFormat
          : null;
        if (Array.isArray(defaultValue)) {
          const def: any[] = [];
          defaultValue.forEach((item) => {
            def.push(valueFormat ? dateUtil(item).format(valueFormat) : dateUtil(item));
          });
          schema.defaultValue = def;
        } else {
          schema.defaultValue = valueFormat ? dateUtil(defaultValue).format(valueFormat) : dateUtil(defaultValue);
        }
      }
    }
    return unref(getProps).showAdvancedButton
      ? (schemas.filter((schema) => !isIncludeSimpleComponents(schema.component)) as FormSchema[])
      : (schemas as FormSchema[]);
  });

  const { handleToggleAdvanced, fieldsIsAdvancedMap } = useAdvanced({
    advanceState,
    emit,
    getProps,
    getSchema,
    formModel,
    defaultValueRef
  });

  const { handleFormValues, initDefault } = useFormValues({
    getProps,
    defaultValueRef,
    getSchema,
    formModel
  });

  useAutoFocus({
    getSchema,
    getProps,
    isInitedDefault: isInitedDefaultRef,
    formElRef: formElRef as Ref<FormActionType>
  });

  const {
    handleSubmit,
    setFieldsValue,
    clearValidate,
    validate,
    validateFields,
    getFieldsValue,
    updateSchema,
    resetSchema,
    appendSchemaByField,
    removeSchemaByField,
    resetFields,
    scrollToField,
    resetDefaultField
  } = useFormEvents({
    emit,
    getProps,
    formModel,
    getSchema,
    defaultValueRef,
    formElRef: formElRef as Ref<FormActionType>,
    schemaRef: schemaRef as Ref<FormSchema[]>,
    handleFormValues
  });

  createFormContext({
    resetAction: resetFields,
    submitAction: handleSubmit
  });

  watch(
    () => unref(getProps).model,
    () => {
      const { model } = unref(getProps);
      if (!model) return;
      setFieldsValue(model);
    },
    {
      immediate: true
    }
  );

  watch(
    () => props.schemas,
    (schemas) => {
      resetSchema(schemas ?? []);
    }
  );

  watch(
    () => getSchema.value,
    (schema) => {
      nextTick(() => {
        //  Solve the problem of modal adaptive height calculation when the form is placed in the modal
        modalFn?.redoModalHeight?.();
      });
      if (unref(isInitedDefaultRef)) {
        return;
      }
      if (schema?.length) {
        initDefault();
        isInitedDefaultRef.value = true;
      }
    }
  );

  watch(
    () => formModel,
    useDebounceFn(() => {
      unref(getProps).submitOnChange && handleSubmit();
    }, 300),
    { deep: true }
  );

  async function setProps(formProps: Partial<FormProps>): Promise<void> {
    propsRef.value = deepMerge(unref(propsRef) || {}, formProps);
  }

  function setFormModel(key: string, value: any) {
    formModel[key] = value;
    const { validateTrigger } = unref(getBindValue);
    if (!validateTrigger || validateTrigger === "change") {
      validateFields([key]).catch((_) => {});
    }
    emit("field-value-change", key, value);
  }

  function handleEnterPress(e: KeyboardEvent) {
    const { autoSubmitOnEnter } = unref(getProps);
    if (!autoSubmitOnEnter) return;
    if (e.key === "Enter" && e.target && e.target instanceof HTMLElement) {
      const target: HTMLElement = e.target as HTMLElement;
      if (target && target.tagName && target.tagName.toUpperCase() === "INPUT") {
        handleSubmit();
      }
    }
  }

  const formActionType = {
    getFieldsValue,
    setFieldsValue,
    resetFields,
    updateSchema,
    resetSchema,
    setProps,
    removeSchemaByField,
    appendSchemaByField,
    clearValidate,
    validateFields,
    validate,
    submit: handleSubmit,
    scrollToField,
    resetDefaultField
  };

  const getFormActionBindProps = computed(
    () => ({ ...getProps.value, ...advanceState }) as InstanceType<typeof FormAction>["$props"]
  );

  defineExpose({
    ...formActionType
  });

  onMounted(() => {
    initDefault();
    emit("register", formActionType);
  });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-basic-form";

  .@{prefix-cls} {
    .ant-form-item {
      &-label label::after {
        margin: 0 6px 0 2px;
      }

      &-with-help {
        margin-bottom: 0;
      }

      &:not(.ant-form-item-with-help) {
        margin-bottom: 12px;
      }

      &.suffix-item {
        .ant-form-item-children {
          display: flex;
        }

        .ant-form-item-control {
          margin-top: 4px;
        }

        .suffix {
          display: inline-flex;
          padding-left: 6px;
          margin-top: 1px;
          line-height: 1;
          align-items: center;
        }
      }
    }

    .ant-form-explain {
      font-size: 14px;
    }

    &--compact {
      .ant-form-item {
        margin-bottom: 8px !important;
      }
    }
  }
</style>
