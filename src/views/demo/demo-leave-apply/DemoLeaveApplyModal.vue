<!--
 @description: 请假申请审批Demo
 @author: mfish
 @date: 2026-04-20
 @version: V2.3.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { demoLeaveApplyFormSchema } from "./demoLeaveApply.data";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { insertDemoLeaveApply, updateDemoLeaveApply } from "@/api/demo/DemoLeaveApply";

  defineOptions({ name: "DemoLeaveApplyModal" });
  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 12 },
    schemas: demoLeaveApplyFormSchema,
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
  const getTitle = computed(() => (unref(isUpdate) ? "编辑请假申请审批Demo" : "新增请假申请审批Demo"));

  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      saveDemoLeaveApply(updateDemoLeaveApply, values);
    } else {
      saveDemoLeaveApply(insertDemoLeaveApply, values);
    }
  }

  function saveDemoLeaveApply(save, values) {
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
