<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { BasicForm, useForm } from "/@/components/general/Form/index";
import { formSchema } from "./org.data";
import { getOrgTree, insertOrg, updateOrg } from "/@/api/sys/Org";
import { SsoOrg } from "/@/api/sys/model/OrgModel";

export default {
  name: "OrgModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);

    const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 12 },
      schemas: formSchema,
      autoSubmitOnEnter: true,
      showActionButtonGroup: false
    });

    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "800px" });
      isUpdate.value = !!data?.isUpdate;
      const treeData = await getOrgTree();
      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record
        }).then();
      }
      updateSchema({
        field: "parentId",
        componentProps: { treeData }
      }).then();
    });

    const getTitle = computed(() => (!unref(isUpdate) ? "新增组织" : "编辑组织"));

    async function handleSubmit() {
      const values = await validate();
      values.clientId = "system";
      setModalProps({ confirmLoading: true });
      if (unref(isUpdate)) {
        saveOrg(updateOrg, values);
      } else {
        saveOrg(insertOrg, values);
      }
      emit("success");
    }

    function saveOrg(save, values) {
      save(values).then(() => {
        emit("success");
        closeModal();
      }).finally(() => {
        setModalProps({ confirmLoading: false });
      });
    }

    return { registerModal, registerForm, getTitle, handleSubmit };
  }
};
</script>
