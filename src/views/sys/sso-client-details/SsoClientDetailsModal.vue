<!--
 @description: 客户端信息
 @author: mfish
 @date: 2023-05-12
 @version: V2.2.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, ref, unref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { ssoClientDetailsFormSchema } from "./ssoClientDetails.data";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { insertSsoClientDetails, updateSsoClientDetails } from "@/api/sys/SsoClientDetails";

  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 24 },
    schemas: ssoClientDetailsFormSchema,
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
  const getTitle = computed(() => (unref(isUpdate) ? "编辑客户端信息" : "新增客户端信息"));

  async function handleSubmit() {
    const values = await validate();
    if (values.grantTypeGroup && values.grantTypeGroup.length > 0) {
      values.grantTypes = values.grantTypeGroup.join(",");
    }
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      saveSsoClientDetails(updateSsoClientDetails, values);
    } else {
      saveSsoClientDetails(insertSsoClientDetails, values);
    }
  }

  function saveSsoClientDetails(save, values) {
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
