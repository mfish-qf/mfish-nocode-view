<!--
 @description: 我的大屏信息
 @author: mfish
 @date: 2024-08-07
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
  import { mfScreenFormSchema } from "./mfScreen.data";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { insertMfScreen, MfScreen, updateMfScreen } from "@mfish/nocode";

  defineOptions({ name: "MfScreenModal" });
  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 12 },
    schemas: mfScreenFormSchema,
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
  const getTitle = computed(() => (unref(isUpdate) ? "编辑我的大屏信息" : "新增我的大屏信息"));

  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      saveMfScreen(updateMfScreen, values);
    } else {
      saveMfScreen(insertMfScreen, values);
    }
  }

  function saveMfScreen(save: (mfScreen: MfScreen) => Promise<MfScreen>, values: MfScreen) {
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
