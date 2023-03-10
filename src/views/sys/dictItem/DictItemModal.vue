<!--
 @description: 字典项
 @author     ：mfish
 @date: 2023-01-03
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/general/Form/index";
import { dictItemFormSchema } from "./dictItem.data";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { insertDictItem, updateDictItem } from "/@/api/sys/DictItem";

export default {
  name: "DictItemModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 24 },
      schemas: dictItemFormSchema,
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
    const getTitle = computed(() => (!unref(isUpdate) ? "新增字典项" : "编辑字典项"));

    async function handleSubmit() {
      let values = await validate();
      setModalProps({ confirmLoading: true });
      if (unref(isUpdate)) {
        saveDictItem(updateDictItem, values);
      } else {
        saveDictItem(insertDictItem, values);
      }
    }

    function saveDictItem(save, values) {
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
