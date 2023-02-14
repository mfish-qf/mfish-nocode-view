<!--
 @description: 任务日志
 @author: mfish
 @date: 2023-02-14
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/general/Form/index";
import { jobLogFormSchema } from "./jobLog.data";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { insertJobLog, updateJobLog } from "/@/api/scheduler/JobLog";

export default {
  name: "JobLogModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 12 },
      schemas: jobLogFormSchema,
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
    const getTitle = computed(() => (!unref(isUpdate) ? "新增任务日志" : "编辑任务日志"));

    async function handleSubmit() {
      let values = await validate();
      setModalProps({ confirmLoading: true });
      if (unref(isUpdate)) {
        saveJobLog(updateJobLog, values);
      } else {
        saveJobLog(insertJobLog, values);
      }
    }

    function saveJobLog(save, values) {
      save(values).then(() => {
        emit("success");
        closeModal();
      }).finally(() => {
        setModalProps({ confirmLoading: false });
      });
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
