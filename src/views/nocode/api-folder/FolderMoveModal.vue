<!--
 @description: API移动窗口
 @author: mfish
 @date: 2023/12/7
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="移动目录" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicForm, FormSchema, useForm } from "@mfish/core/components/Form";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { PropType } from "vue";

  const props = defineProps({
    api: { type: Function as PropType<() => Promise<any>>, require: true },
    moveHandle: { type: Function as PropType<({ id, folderId }) => Promise<any>>, require: true }
  });
  const emit = defineEmits(["success", "register"]);
  const folderFormSchema: FormSchema[] = [
    { field: "id", label: "id", component: "Input", show: false },
    {
      field: "parentId",
      label: "父目录",
      component: "ApiTreeSelect",
      componentProps: {
        api: props.api,
        icon: "ant-design:folder-outlined",
        fieldNames: {
          label: "name",
          value: "id"
        },
        showSearch: true,
        treeNodeFilterProp: "name",
        getPopupContainer: () => document.body
      }
    }
  ];
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 24 },
    schemas: folderFormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    setModalProps({ confirmLoading: false, width: "600px", destroyOnClose: true });
    setFieldsValue({
      ...data
    }).then();
  });

  async function handleSubmit() {
    if (!props.moveHandle) return;
    const values = await validate();
    setModalProps({ confirmLoading: true });
    props
      .moveHandle({ id: values.id, folderId: values.parentId ?? "" })
      .then((res) => {
        emit("success", res);
        closeModal();
      })
      .finally(() => {
        setModalProps({ confirmLoading: false });
      });
  }
</script>
