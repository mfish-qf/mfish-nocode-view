<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { BasicForm, useForm } from "/@/components/general/Form/index";
import { accountFormSchema } from "./account.data";
import { getOrgTree } from "/@/api/sys/Org";
import { insertUser, updateUser } from "/@/api/sys/User";
import { getAllRoleList } from "/@/api/sys/Role";

export default {
  name: "AccountModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const rowId = ref("");
    const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
      name: "model_form_item",
      labelWidth: 100,
      baseColProps: { span: 12 },
      schemas: accountFormSchema,
      showActionButtonGroup: false,
      autoSubmitOnEnter: true,
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "800px" });
      isUpdate.value = !!data?.isUpdate;
      const status = {
        field: "status",
        dynamicDisabled: false
      };
      if (unref(isUpdate)) {
        rowId.value = data.record.id;
        setFieldsValue({
          ...data.record
        }).then();
        // 超户不允许修改用户状态
        if (data.record.id === "1") {
          status.dynamicDisabled = true;
        } else {
          status.dynamicDisabled = false;
        }
        updateSchema([{
          field: "password",
          ifShow: false
        }, {
          field: "account",
          dynamicDisabled: true
        }, status]).then();
      } else {
        updateSchema([{
          field: "password",
          ifShow: true
        }, {
          field: "account",
          dynamicDisabled: false
        }, status]).then();
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
          field: "roleIds",
          componentProps: { options }
        }
      ]).then();
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增账号" : "编辑账号"));

    async function handleSubmit() {
      const values = await validate();
      setModalProps({ confirmLoading: true });
      if (unref(isUpdate)) {
        saveAccount(updateUser, values);
      } else {
        saveAccount(insertUser, values);
      }
    }

    function saveAccount(save, values) {
      save(values).then(() => {
        emit("success", { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        closeModal();
      }).finally(() => {
        setModalProps({ confirmLoading: false });
      });
    }

    return { registerModal, registerForm, getTitle, handleSubmit };
  }
};
</script>
