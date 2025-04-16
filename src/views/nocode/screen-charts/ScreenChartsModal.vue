<!--
 @description: 组件基础信息
 @author: mfish
 @date: 2024-11-19
 @version: V2.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, ref, unref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { screenChartsFormSchema } from "./screenCharts.data";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { insertScreenCharts, updateScreenCharts } from "@mfish/nocode";

  defineOptions({ name: "ScreenChartsModal" });
  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate, setProps }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 24 },
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    await setProps({
      schemas: screenChartsFormSchema(setFieldsValue)
    });
    setModalProps({ confirmLoading: false, width: "600px" });
    isUpdate.value = !!data?.isUpdate;
    if (unref(isUpdate)) {
      setFieldsValue({
        ...data.record
      }).then();
    }
  });
  const getTitle = computed(() => (unref(isUpdate) ? "编辑组件基础信息" : "新增组件基础信息"));

  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      saveScreenCharts(updateScreenCharts, values);
    } else {
      saveScreenCharts(insertScreenCharts, values);
    }
  }

  function saveScreenCharts(save, values) {
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
