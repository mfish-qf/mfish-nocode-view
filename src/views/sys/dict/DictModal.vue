<!--
 @description: 字典
 @author     ：mfish
 @date: 2023-01-03
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, ref, unref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { dictFormSchema } from "./dict.data";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { insertDict, updateDict } from "@/api/sys/Dict";

  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 100,
    baseColProps: { span: 24 },
    schemas: dictFormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    setModalProps({ confirmLoading: false, width: "600px" });
    isUpdate.value = !!data?.isUpdate;
    if (unref(isUpdate)) {
      setFieldsValue({
        ...data.record
      }).then();
    }
  });
  const getTitle = computed(() => (unref(isUpdate) ? "编辑字典" : "新增字典"));

  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      saveDict(updateDict, values);
    } else {
      saveDict(insertDict, values);
    }
  }

  function saveDict(save, values) {
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
