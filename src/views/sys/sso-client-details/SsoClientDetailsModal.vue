<!--
 @description: 客户端信息
 @author: mfish
 @date: 2023-05-12
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/general/Form";
import { ssoClientDetailsFormSchema } from "./ssoClientDetails.data";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { insertSsoClientDetails, updateSsoClientDetails } from "/@/api/sys/SsoClientDetails";

export default {
  name: "SsoClientDetailsModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      name: "model_form_item",
      labelWidth: 100,
      baseColProps: { span: 24 },
      schemas: ssoClientDetailsFormSchema,
      showActionButtonGroup: false,
      autoSubmitOnEnter: true
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "600px" });
      isUpdate.value = !!data?.isUpdate;
      setFieldsValue({
        ...data.record
      }).then();
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增客户端信息" : "编辑客户端信息"));

    async function handleSubmit() {
      let values = await validate();
      if (values.grantTypeGroup && values.grantTypeGroup.length > 0) {
        values.grantTypes = values.grantTypeGroup.join(",");
      }
      setModalProps({ confirmLoading: true });
      if (unref(isUpdate)) {
        saveSsoClientDetails(updateSsoClientDetails, values);
      } else {
        saveSsoClientDetails(insertSsoClientDetails, values);
      }
    }

    function saveSsoClientDetails(save, values) {
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
