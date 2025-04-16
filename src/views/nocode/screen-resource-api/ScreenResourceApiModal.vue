<!--
 @description: 大屏资源API
 @author: mfish
 @date: 2025-03-21
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
  import { screenResourceApiFormSchema } from "./screenResourceApi.data";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { insertScreenResourceApi, updateScreenResourceApi } from "@mfish/nocode";

  defineOptions({ name: "ScreenResourceApiModal" });
  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 12 },
    schemas: screenResourceApiFormSchema,
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
  const getTitle = computed(() => (unref(isUpdate) ? "编辑大屏资源API" : "新增大屏资源API"));

  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      saveScreenResourceApi(updateScreenResourceApi, values);
    } else {
      saveScreenResourceApi(insertScreenResourceApi, values);
    }
  }

  function saveScreenResourceApi(save, values) {
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
