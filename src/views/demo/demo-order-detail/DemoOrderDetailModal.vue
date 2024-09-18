<!--
 @description: 销售订单明细
 @author: mfish
 @date: 2024-09-02
 @version: V1.3.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from "vue";
  import { BasicForm, useForm } from "@/components/general/Form/index";
  import { demoOrderDetailFormSchema } from "./demoOrderDetail.data";
  import { BasicModal, useModalInner } from "@/components/general/Modal";

  defineOptions({ name: "DemoOrderDetailModal" });
  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 12 },
    schemas: demoOrderDetailFormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    setModalProps({ confirmLoading: false, width: "800px" });
    isUpdate.value = !!data?.isUpdate;
    setFieldsValue({
      ...data.record
    }).then();
  });
  const getTitle = computed(() => (unref(isUpdate) ? "编辑销售订单明细" : "新增销售订单明细"));

  async function handleSubmit() {
    const values = await validate();
    try {
      setModalProps({ confirmLoading: true });
      emit("success", { record: values, isUpdate: isUpdate.value });
      closeModal();
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
