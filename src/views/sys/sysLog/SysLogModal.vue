<!--
 @description: 系统日志
 @author: mfish
 @date: 2023-01-08
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="查看系统日志" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/Form/index";
import { sysLogFormSchema } from "./sysLog.data";
import { BasicModal, useModalInner } from "/@/components/Modal";

export default {
  name: "SysLogModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup() {
    const [registerForm, { resetFields, setFieldsValue }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 12 },
      schemas: sysLogFormSchema,
      showActionButtonGroup: false,
      autoSubmitOnEnter: true
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "40%" });
      setFieldsValue({
        ...data.record
      }).then();
    });

    async function handleSubmit() {

    }


    return {
      registerModal,
      registerForm,
      handleSubmit
    };
  }
};
</script>
