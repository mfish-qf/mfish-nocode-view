<!--
 @description: API目录
 @author: mfish
 @date: 2023-07-21
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
  import { apiFolderFormSchema } from "./apiFolder.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertApiFolder, updateApiFolder } from "/@/api/nocode/ApiFolder";

  export default {
    name: "ApiFolderModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        name: "model_form_item",
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: apiFolderFormSchema,
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
      const getTitle = computed(() => (!unref(isUpdate) ? "新增API目录" : "编辑API目录"));

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveApiFolder(updateApiFolder, values);
        } else {
          saveApiFolder(insertApiFolder, values);
        }
      }

      function saveApiFolder(save, values) {
        save(values)
          .then(() => {
            emit("success");
            closeModal();
          })
          .finally(() => {
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
