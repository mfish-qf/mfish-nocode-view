<!--
 @description: 导入导出Demo
 @author: mfish
 @date: 2024-09-02
 @version: V1.3.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from "vue";
  import { BasicForm, useForm } from "@/components/general/Form/index";
  import { demoImportExportFormSchema } from "./demoImportExport.data";
  import { BasicModal, useModalInner } from "@/components/general/Modal";
  import { insertDemoImportExport, updateDemoImportExport } from "@/api/demo/DemoImportExport";

  defineOptions({ name: "DemoImportExportModal" });
  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 12 },
    schemas: demoImportExportFormSchema,
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
  const getTitle = computed(() => (!unref(isUpdate) ? "新增导入导出Demo" : "编辑导入导出Demo"));

  async function handleSubmit() {
    let values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      saveDemoImportExport(updateDemoImportExport, values);
    } else {
      saveDemoImportExport(insertDemoImportExport, values);
    }
  }

  function saveDemoImportExport(save, values) {
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
