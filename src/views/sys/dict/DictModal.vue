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
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/Form/index";
import { dictFormSchema } from "./dict.data";
import { BasicModal, useModalInner } from "/@/components/Modal";
import { insertDict, updateDict } from "/@/api/sys/Dict";

export default {
  name: "DictModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
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
      setModalProps({ confirmLoading: false, width: "30%" });
      isUpdate.value = !!data?.isUpdate;
      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record
        }).then();
      }
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增字典" : "编辑字典"));

    async function handleSubmit() {
      try {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveDict(updateDict, values);
        } else {
          saveDict(insertDict, values);
        }
      } finally {
        setModalProps({ confirmLoading: false });
      }
    }

    function saveDict(save, values) {
      save(values).then(() => {
        emit("success");
        closeModal();
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
