<!--
 @description: 系统日志
 @author: mfish
 @date: 2023-01-08
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/Form/index";
import { sysLogFormSchema } from "./sysLog.data";
import { BasicModal, useModalInner } from "/@/components/Modal";
import { insertSysLog, updateSysLog } from "/@/api/sys/SysLog";

export default {
  name: "SysLogModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 12 },
      schemas: sysLogFormSchema,
      showActionButtonGroup: false,
      autoSubmitOnEnter: true
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "40%" });
      isUpdate.value = !!data?.isUpdate;
      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record
        }).then();
      }
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增系统日志" : "编辑系统日志"));

    async function handleSubmit() {
      let values = await validate();
      setModalProps({ confirmLoading: true });
      if (unref(isUpdate)) {
        saveSysLog(updateSysLog, values);
      } else {
        saveSysLog(insertSysLog, values);
      }
    }

    function saveSysLog(save, values) {
      save(values).then(() => {
        emit("success");
        closeModal();
      }).finally(() => {
        setModalProps({ confirmLoading: false });
      });;
    }

    return {
      registerModal,
      registerForm,
      getTitle,
      handleSubmit
    };
  }
};
</script>
