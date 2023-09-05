<!--
 @description: 文件存储
 @author: mfish
 @date: 2023-03-02
 @version: V1.1.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { ref, computed, unref } from "vue";
  import { BasicForm, useForm } from "/@/components/general/Form/index";
  import { sysFileFormSchema } from "./sysFile.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertSysFile, updateSysFile } from "/@/api/storage/SysFile";

  export default {
    name: "SysFileModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: sysFileFormSchema,
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
      const getTitle = computed(() => (!unref(isUpdate) ? "新增文件存储" : "编辑文件存储"));

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveSysFile(updateSysFile, values);
        } else {
          saveSysFile(insertSysFile, values);
        }
      }

      function saveSysFile(save, values) {
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