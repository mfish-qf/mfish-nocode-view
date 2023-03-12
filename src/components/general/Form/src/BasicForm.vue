<template>
  <Form v-bind="getBindValue" :class="getFormClass" ref="formElRef" :model="formModel" @keypress.enter="handleEnterPress">
    <Row v-bind="getRow">
      <slot name="formHeader"></slot>
      <template v-for="schema in getSchema" :key="schema.field">
        <FormItem :isAdvanced="fieldsIsAdvancedMap[schema.field]"
                  :tableAction="tableAction" :formActionType="formActionType"
                  :schema="schema" :formProps="getProps" :allDefaultValues="defaultValueRef"
                  :formModel="formModel" :setFormModel="setFormModel">
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
<script lang="ts">
import type { FormActionType, FormProps, FormSchema } from "./types/Form";
import type { AdvanceState } from "./types/Hooks";
import type { Ref } from "vue";
import { reactive, ref, computed, unref, onMounted, watch, nextTick } from "vue";
import { Form, Row } from "ant-design-vue";
import FormItem from "./components/FormItem.vue";
import FormAction from "./components/FormAction.vue";
import { dateItemType } from "./Helper";
import { dateUtil } from "/@/utils/DateUtil";
import { deepMerge } from "/@/utils";
import { useFormValues } from "./hooks/UseFormValues";
import useAdvanced from "./hooks/UseAdvanced";
import { useFormEvents } from "./hooks/UseFormEvents";
import { createFormContext } from "./hooks/UseFormContext";
import { useAutoFocus } from "./hooks/UseAutoFocus";
import { useModalContext } from "/@/components/general/Modal";
import { useDebounceFn } from "@vueuse/core";
import { basicProps } from "./Props";
import { useDesign } from "/@/hooks/web/UseDesign";
import { cloneDeep } from "lodash-es";

export default {
  name: "BasicForm",
  components: { FormItem, Form, Row, FormAction },
  props: basicProps,
  emits: ["advanced-change", "reset", "submit", "register", "field-value-change"],
  setup(props, { emit, attrs }) {
    const formModel = reactive<Recordable>({});
    const modalFn = useModalContext();
    const advanceState = reactive<AdvanceState>({
      isAdvanced: true,
      hideAdvanceBtn: false,
      isLoad: false,
      actionSpan: 6
    });
    const defaultValueRef = ref<Recordable>({});
    const isInitedDefaultRef = ref(false);
    const propsRef = ref<Partial<FormProps>>();
    const schemaRef = ref<Nullable<FormSchema[]>>(null);
    const formElRef = ref<Nullable<FormActionType>>(null);
    const { prefixCls } = useDesign("basic-form");
    //获取表单的基本配置
    const getProps = computed((): FormProps => {
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
    // 为整个表单获取统一的行样式和行配置
    const getRow = computed((): Recordable => {
      const { baseRowStyle = {}, rowProps } = unref(getProps);
      return {
        style: baseRowStyle,
        ...rowProps
      };
    });

    const getBindValue = computed(
      () => ({ ...attrs, ...props, ...unref(getProps) } as Recordable)
    );

    const getSchema = computed((): FormSchema[] => {
      const schemas: FormSchema[] = unref(schemaRef) || (unref(getProps).schemas as any);
      for (const schema of schemas) {
        const { defaultValue, component, isHandleDateDefaultValue = true } = schema;
        // 句柄日期类型
        if (isHandleDateDefaultValue && defaultValue && component !== undefined && dateItemType.includes(component)) {
          if (!Array.isArray(defaultValue)) {
            schema.defaultValue = dateUtil(defaultValue);
          } else {
            const def: any[] = [];
            defaultValue.forEach((item) => {
              def.push(dateUtil(item));
            });
            schema.defaultValue = def;
          }
        }
      }
      if (unref(getProps).showAdvancedButton) {
        return cloneDeep(
          schemas.filter((schema) => schema.component !== "Divider") as FormSchema[]
        );
      } else {
        return cloneDeep(schemas as FormSchema[]);
      }
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
      scrollToField
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
      () => unref(getProps).schemas,
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
        validateFields([key]).catch((_) => {
        });
      }
      emit("field-value-change", key, value);
    }

    function handleEnterPress(e: KeyboardEvent) {
      const { autoSubmitOnEnter } = unref(getProps);
      if (!autoSubmitOnEnter) return;
      if (e.key === "Enter" && e.target && e.target instanceof HTMLElement) {
        const target: HTMLElement = e.target as HTMLElement;
        if (target && target.tagName && target.tagName.toUpperCase() == "INPUT") {
          handleSubmit();
        }
      }
    }

    const formActionType: Partial<FormActionType> = {
      getFieldsValue,
      setFieldsValue,
      resetFields,
      updateSchema,
      resetSchema,
      setProps,
      removeSchemaByField: removeSchemaByField,
      appendSchemaByField,
      clearValidate,
      validateFields,
      validate,
      submit: handleSubmit,
      scrollToField: scrollToField
    };

    onMounted(() => {
      initDefault();
      emit("register", formActionType);
    });

    return {
      getBindValue,
      handleToggleAdvanced,
      handleEnterPress,
      formModel,
      defaultValueRef,
      advanceState,
      getRow,
      getProps,
      formElRef,
      getSchema,
      formActionType: formActionType as any,
      setFormModel,
      getFormClass,
      getFormActionBindProps: computed(
        (): Recordable => ({ ...getProps.value, ...advanceState })
      ),
      fieldsIsAdvancedMap,
      ...formActionType
    };
  }
};
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-basic-form';

.@{prefix-cls} {
  .ant-form-item {
    &-label label::after {
      margin: 0 6px 0 2px;
    }

    &-with-help {
      margin-bottom: 0;
    }

    &:not(.ant-form-item-with-help) {
      margin-bottom: 20px;
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
