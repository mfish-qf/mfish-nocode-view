<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
import { defineComponent, ref, computed, unref } from "vue";
import { BasicModal, useModalInner } from "/@/components/Modal";
import { BasicForm, useForm } from "/@/components/Form/index";
import { accountFormSchema } from "./account.data";
import { getOrgTree } from "/@/api/sys/Org";
import { insertUser, updateUser } from "/@/api/sys/User";
import { getAllRoleList } from "/@/api/sys/Role";

export default defineComponent({
  name: "AccountModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const rowId = ref("");
    const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 12 },
      schemas: accountFormSchema,
      showActionButtonGroup: false,
      actionColOptions: {
        span: 23
      }
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "40%" });
      isUpdate.value = !!data?.isUpdate;
      if (unref(isUpdate)) {
        rowId.value = data.record.id;
        setFieldsValue({
          ...data.record
        }).then();
        updateSchema([{
          field: "password",
          ifShow: false
        }, {
          field: "account",
          dynamicDisabled: true
        }]).then();
      } else {
        updateSchema([{
          field: "password",
          ifShow: true
        }, {
          field: "account",
          dynamicDisabled: false
        }]).then();
      }
      const treeData = await getOrgTree();
      const roles = await getAllRoleList();
      const options = roles.reduce((prev, next: Recordable) => {
        if (next) {
          prev.push({
            key: next["id"],
            label: next["roleName"],
            value: next["id"]
          });
        }
        return prev;
      }, [] as any);
      updateSchema([
        {
          field: "orgId",
          componentProps: { treeData }
        }, {
          field: "roles",
          componentProps: { options }
        }
      ]).then();
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增账号" : "编辑账号"));

    async function handleSubmit() {
      try {
        const values = await validate();
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveAccount(updateUser, values);
        } else {
          saveAccount(insertUser, values);
        }
      } finally {
        setModalProps({ confirmLoading: false });
      }
    }

    function saveAccount(save, values) {
      save(values).then(() => {
        emit("success", { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        closeModal();
      });
    }

    return { registerModal, registerForm, getTitle, handleSubmit };
  }
});
</script>
