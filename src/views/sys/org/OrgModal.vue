<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
import { defineComponent, ref, computed, unref } from "vue";
import { BasicModal, useModalInner } from "/@/components/Modal";
import { BasicForm, useForm } from "/@/components/Form/index";
import { formSchema } from "./org.data";
import { getSsoOrgTree, insertSsoOrg, updateSsoOrg } from "/@/api/sys/SsoOrg";

export default defineComponent({
  name: "DeptModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);

    const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 12 },
      schemas: formSchema,
      showActionButtonGroup: false
    });

    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "40%" });
      isUpdate.value = !!data?.isUpdate;

      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record
        }).then();
      }
      const treeData = await getSsoOrgTree();
      updateSchema({
        field: "parentId",
        componentProps: { treeData }
      }).then();
    });

    const getTitle = computed(() => (!unref(isUpdate) ? "新增组织" : "编辑组织"));

    async function handleSubmit() {
      try {
        const values = await validate();
        values.clientId = "system";
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveOrg(updateSsoOrg, values);
        } else {
          saveOrg(insertSsoOrg, values);
        }
        emit("success");
      } finally {
        setModalProps({ confirmLoading: false });
      }
    }

    function saveOrg(save, values) {
      save(values).then(() => {
        emit("success");
      }).finally(() => {
          closeModal();
        }
      );
    }

    return { registerModal, registerForm, getTitle, handleSubmit };
  }
});
</script>
