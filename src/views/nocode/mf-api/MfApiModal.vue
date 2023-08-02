<!--
 @description: 自定义API
 @author: mfish
 @date: 2023-07-28
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
  import { mfApiFormSchema } from "./mfApi.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertMfApi, updateMfApi } from "/@/api/nocode/MfApi";

  export default {
    name: "MfApiModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        name: "model_form_item",
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: mfApiFormSchema,
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
      const getTitle = computed(() => (!unref(isUpdate) ? "新增自定义API" : "编辑自定义API"));

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveMfApi(updateMfApi, values);
        } else {
          saveMfApi(insertMfApi, values);
        }
      }

      function saveMfApi(save, values) {
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
