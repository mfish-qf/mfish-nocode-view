<template>
  <BasicModal v-bind="$attrs" @register="registerModal" show-footer :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit">
      <template #menus="{ model, field }">
        <BasicTree
          v-model:value="model[field]"
          :tree-data="treeData"
          search
          :field-names="{ title: 'menuName', key: 'id' }"
          :click-row-to-expand="true"
          checkable
          toolbar
          title="菜单分配"
        />
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, ref, unref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { formSchema } from "./role.data";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { BasicTree, TreeItem } from "@mfish/core/components/Tree";
  import {
    getMenuTree,
    getRoleMenus,
    getTenantMenuTree,
    getTenantRoleMenus,
    insertRole,
    insertTenantRole,
    updateRole,
    updateTenantRole
  } from "@mfish/core/api";
  import { usePermission } from "@mfish/core/hooks";

  const props = defineProps({
    source: {
      type: Number,
      default: null
    }
  });
  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const treeData = ref<TreeItem[]>([]);
  const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
    labelWidth: 100,
    baseColProps: { span: 12 },
    schemas: formSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const { isSuperRole, isPersonRole } = usePermission();
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    setModalProps({ confirmLoading: false, width: "800px" });
    // 需要在setFieldsValue之前先填充treeData，否则Tree组件可能会报key not exist警告
    if (unref(treeData).length === 0) {
      treeData.value =
        props.source === 1
          ? ((await getTenantMenuTree()) as any as TreeItem[])
          : ((await getMenuTree()) as any as TreeItem[]);
    }
    isUpdate.value = !!data?.isUpdate;
    const getMenus = props.source === 1 ? getTenantRoleMenus : getRoleMenus;
    if (unref(isUpdate)) {
      getMenus(data.record.id).then((res) => {
        data.record.menus = res;
        setFieldsValue({
          ...data.record
        }).then();
      });
      // 超户和个人角色不允许修改roleName,roleCode
      if (isSuperRole(data.record.id) || isPersonRole(data.record.id)) {
        disableInput(true);
        return;
      }
    }
    disableInput(false);

    function disableInput(disable) {
      updateSchema([
        {
          field: "roleName",
          dynamicDisabled: disable
        },
        {
          field: "roleCode",
          dynamicDisabled: disable
        },
        {
          field: "status",
          dynamicDisabled: disable
        }
      ]).then();
    }
  });
  const getTitle = computed(() => (unref(isUpdate) ? "编辑角色" : "新增角色"));

  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      if (props.source === 1) {
        saveRole(updateTenantRole, values);
      } else {
        saveRole(updateRole, values);
      }
    } else {
      if (props.source === 1) {
        saveRole(insertTenantRole, values);
      } else {
        saveRole(insertRole, values);
      }
    }
  }

  function saveRole(save, values) {
    save(values)
      .then(() => {
        emit("success");
        closeModal();
      })
      .finally(() => {
        setModalProps({ confirmLoading: false });
      });
  }
</script>
