<!--
 @description: 修改账号
 @author: mfish
 @date: 2025/5/14
-->
<template>
  <BasicModal title="修改账号" @register="registerModal" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>

<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { BasicForm, FormSchema, useForm } from "@mfish/core/components/Form";
  import { changeAccount } from "@mfish/core/api";
  const emit = defineEmits(["success", "register"]);
  const accountSchemas: FormSchema[] = [
    {
      field: "id",
      label: "唯一ID",
      component: "Input",
      show: false
    },
    {
      field: "account",
      component: "Input",
      label: "账号",
      required: true,
    }
  ];

  const [registerForm, { validate, resetFields, setFieldsValue }] = useForm({
    size: "large",
    baseColProps: { span: 24 },
    labelWidth: 100,
    showActionButtonGroup: false,
    schemas: accountSchemas,
    autoSubmitOnEnter: true
  });

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    setFieldsValue(data).then();
  });

  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    const { id, account } = values;
    changeAccount({ id, account })
      .then((res) => {
        if (res) {
          closeModal();
          emit("success", res);
        }
      })
      .finally(() => {
        setModalProps({ confirmLoading: false });
      });
  }
</script>
