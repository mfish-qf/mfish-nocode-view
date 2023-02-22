<!--
 @description: 定时调度任务
 @author: mfish
 @date: 2023-02-20
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit">
      <template #params="{ model, field }">
        <CodeEditor style="border: 1px solid #d9d9d9;" v-model:value="model[field]" mode="application/json" />
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/general/Form/index";
import { jobFormSchema } from "./job.data";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { insertJob, updateJob } from "/@/api/scheduler/Job";
import { CodeEditor } from "/@/components/general/CodeEditor";

export default {
  name: "JobModal",
  components: { BasicModal, BasicForm, CodeEditor },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 12 },
      schemas: jobFormSchema,
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
    const getTitle = computed(() => (!unref(isUpdate) ? "新增定时调度任务" : "编辑定时调度任务"));

    async function handleSubmit() {
      let values = await validate();
      setModalProps({ confirmLoading: true });
      if (unref(isUpdate)) {
        saveJob(updateJob, values);
      } else {
        saveJob(insertJob, values);
      }
    }

    function saveJob(save, values) {
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
