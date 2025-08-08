<!--
 @description: 自定义API
 @author: mfish
 @date: 2023-09-06
 @version: V2.0.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, ref, unref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { mfApiFormSchema } from "./mfApi.data";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { insertMfApi, MfApi, updateMfApi } from "@mfish/custom-api";

  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 24 },
    schemas: mfApiFormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    setModalProps({ confirmLoading: false, width: "600px" });
    isUpdate.value = !!data?.isUpdate;
    setFieldsValue({
      ...data.record
    }).then();
  });
  const getTitle = computed(() => (unref(isUpdate) ? "编辑自定义API" : "新增自定义API"));

  async function handleSubmit() {
    const values = await validate();
    values.params = values.params.filter((item: any) => !item.isHttpParam);

    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      saveMfApi(updateMfApi, values);
    } else {
      saveMfApi(insertMfApi, values);
    }
  }

  function saveMfApi(save: (mfApi: MfApi) => Promise<MfApi>, values: MfApi) {
    save(values)
      .then((res) => {
        emit("success", res);
        closeModal();
      })
      .finally(() => {
        setModalProps({ confirmLoading: false });
      });
  }
</script>
