<!--
 @description: 代码构建
 @author: mfish
 @date: 2023-04-11
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
import { codeBuildFormSchema } from "./codeBuild.data";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { insertCodeBuild } from "/@/api/sys/CodeBuild";

export default {
  name: "CodeBuildModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, validate }] = useForm({
      labelWidth: 120,
      baseColProps: { span: 24 },
      schemas: codeBuildFormSchema,
      showActionButtonGroup: false,
      autoSubmitOnEnter: true
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async () => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "600px" });
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增代码构建" : "编辑代码构建"));

    async function handleSubmit() {
      let values = await validate();
      if (values.dataBase && values.dataBase.length === 2) {
        values.connectId = values.dataBase[0];
        values.tableName = values.dataBase[1];
      } else {
        throw new Error("请选择数据库和表!");
      }
      setModalProps({ confirmLoading: true });
      insertCodeBuild(values).then(() => {
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
