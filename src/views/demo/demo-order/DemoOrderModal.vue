<!--
 @description: 销售订单
 @author: mfish
 @date: 2024-09-13
 @version: V2.1.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
    <ADivider>订单明细</ADivider>
    <DemoOrderDetailManagement ref="detailsRef" :order-id="orderId" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, ref, unref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { demoOrderFormSchema } from "./demoOrder.data";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { insertDemoOrder, updateDemoOrder } from "@/api/demo/DemoOrder";
  import DemoOrderDetailManagement from "@/views/demo/demo-order-detail/index.vue";
  import { Divider as ADivider } from "ant-design-vue";

  defineOptions({ name: "DemoOrderModal" });
  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 12 },
    schemas: demoOrderFormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const orderId = ref("");
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    setModalProps({ confirmLoading: false, width: "800px" });
    isUpdate.value = !!data?.isUpdate;
    orderId.value = data?.record?.id;
    if (unref(isUpdate)) {
      setFieldsValue({
        ...data.record
      }).then();
    }
  });
  const getTitle = computed(() => (unref(isUpdate) ? "编辑销售订单" : "新增销售订单"));
  const detailsRef = ref();

  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    const details = detailsRef.value?.getDataSource();
    if (unref(isUpdate)) {
      saveDemoOrder(updateDemoOrder, { ...values, details });
    } else {
      saveDemoOrder(insertDemoOrder, { ...values, details });
    }
  }

  function saveDemoOrder(save, values) {
    save(values)
      .then((res) => {
        orderId.value = res.id;
        emit("success");
        closeModal();
      })
      .finally(() => {
        setModalProps({ confirmLoading: false });
      });
  }
</script>
