<!--
 @description: 上传图片样例
 @author: mfish
 @date: 2024/9/13
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="凭证上传">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script setup lang="ts">
  import { BasicModal, useModalInner } from "@mfish/core/src/components/Modal";
  import { BasicForm, useForm } from "@mfish/core/src/components/Form";
  import { demoUpPicFormSchema } from "@/views/demo/demo-up-down/demoUpDown.data";
  import { ref } from "vue";

  const emit = defineEmits(["register", "success", "close"]);
  const descriptionData = ref();
  const [registerForm, { resetFields, setFieldsValue }] = useForm({
    name: "model_form_item",
    labelWidth: 220,
    baseColProps: { span: 24 },
    schemas: demoUpPicFormSchema,
    showActionButtonGroup: false
  });

  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    resetFields().then();
    setModalProps({
      confirmLoading: false,
      width: "600px",
      showOkBtn: false,
      cancelText: "关闭",
      afterClose: () => {
        emit("close");
      }
    });
    setFieldsValue({
      ...data.record
    }).then();
    descriptionData.value = { ...data.record };
  });
</script>
<style scoped lang="less"></style>
