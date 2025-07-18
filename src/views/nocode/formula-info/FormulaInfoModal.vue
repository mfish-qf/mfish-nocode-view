<!--
 @description: 公式信息
 @author: mfish
 @date: 2025-02-11
 @version: V2.0.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit">
      <template #targetParam="{ model, field }">
        <CodeEditor style="max-height: 200px" v-model:value="model[field]" :mode="MODE.JSON" />
      </template>
      <template #paramDesc="{ model, field }">
        <CodeEditor style="max-height: 200px" v-model:value="model[field]" :mode="MODE.JSON" />
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, ref, unref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { formulaInfoFormSchema } from "./formulaInfo.data";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { insertFormulaInfo, updateFormulaInfo } from "@mfish/custom-api";
  import { CodeEditor, MODE } from "@mfish/core/components/CodeEditor";

  defineOptions({ name: "FormulaInfoModal" });
  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 12 },
    schemas: formulaInfoFormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    setModalProps({ confirmLoading: false, width: "800px" });
    isUpdate.value = !!data?.isUpdate;
    if (unref(isUpdate)) {
      setFieldsValue({
        ...data.record
      }).then();
    }
  });
  const getTitle = computed(() => (unref(isUpdate) ? "编辑公式信息" : "新增公式信息"));

  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      saveFormulaInfo(updateFormulaInfo, values);
    } else {
      saveFormulaInfo(insertFormulaInfo, values);
    }
  }

  function saveFormulaInfo(save, values) {
    save(values)
      .then(() => {
        emit("success");
        closeModal();
      })
      .finally(() => {
        setModalProps({ confirmLoading: false });
      });
  }
</script>
