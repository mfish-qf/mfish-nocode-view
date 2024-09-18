<!--
 @description: 文件上传模态框
 @author: mfish
 @date: 2024/9/8
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="凭证上传">
    <ADivider>采用Form组件进行文件上传</ADivider>
    <BasicForm @register="registerForm" />
    <ADivider>采用Description组件进行文件上传</ADivider>
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script setup lang="ts">
  import { BasicModal, useModalInner } from "@/components/general/Modal";
  import { BasicForm, useForm } from "@/components/general/Form";
  import { demoUpDownDesc, demoUpFormSchema } from "@/views/demo/demo-up-down/demoUpDown.data";
  import Description from "@/components/general/Description/src/Description.vue";
  import { useDescription } from "@/components/general/Description";
  import { ref } from "vue";
  import { Divider as ADivider } from "ant-design-vue";

  const emit = defineEmits(["register", "success", "close"]);
  const descriptionData = ref();
  const [registerForm, { resetFields, setFieldsValue }] = useForm({
    name: "model_form_item",
    labelWidth: 220,
    baseColProps: { span: 24 },
    schemas: demoUpFormSchema,
    showActionButtonGroup: false
  });

  const [registerDesc] = useDescription({
    data: descriptionData,
    schema: demoUpDownDesc,
    column: 1
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
