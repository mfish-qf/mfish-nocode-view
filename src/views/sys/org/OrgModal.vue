<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit">
      <template #parentId>
        <TreeSelect
          v-model:value="curOrg"
          show-search
          allow-clear
          tree-node-filter-prop="orgName"
          :tree-data="treeData"
          :field-names="fieldNames"
          :disabled="parentIdDisabled"
          @change="orgChange"
          @search="handleSearch"
        />
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, ref, toRaw, unref } from "vue";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { formSchema } from "./org.data";
  import {
    getAllRoleList,
    getOrg,
    getTenantOrgTree,
    insertOrg,
    insertTenantOrg,
    SsoOrg,
    SsoRole,
    updateOrg,
    updateTenantOrg
  } from "@mfish/core/api";
  import { useMessage } from "@mfish/core/hooks";
  import { isNullOrUnDef } from "@mfish/core/utils/Is";
  import { TreeSelect } from "ant-design-vue";
  import { Recordable } from "@mfish/types";

  const props = defineProps({
    source: {
      type: Number,
      default: null
    }
  });
  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const { createMessage } = useMessage();
  const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
    labelWidth: 100,
    baseColProps: { span: 12 },
    schemas: formSchema,
    autoSubmitOnEnter: true,
    showActionButtonGroup: false
  });
  const fieldNames = {
    label: "orgName",
    key: "id",
    value: "id"
  };
  const curOrg = ref("");
  const parentIdDisabled = ref(false);
  const treeData = ref<SsoOrg[]>([]);
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    curOrg.value = "";
    updateSchema({
      field: "roleIds",
      componentProps: { options: [] }
    }).then();
    tenantDisabled(false, props.source);
    setModalProps({ confirmLoading: false, width: "800px" });
    isUpdate.value = !!data?.isUpdate;
    if (props.source === 1) {
      treeData.value = await getTenantOrgTree();
    } else {
      const orgData = await getOrg({
        orgName: data.record?.orgName ?? undefined,
        addFlag: 1,
        pageNum: 1,
        pageSize: 100
      });
      treeData.value = orgData.list;
    }
    if (unref(isUpdate)) {
      curOrg.value = data.record.parentId;
      setFieldsValue({
        ...data.record
      }).then();
      // 如果是租户父组织，不允许在此界面修改名称、编码等属性
      if (data.record.tenantId) {
        tenantDisabled(true, props.source);
      }
      let roleIds = toRaw(data.record.roleIds);
      if (!roleIds) {
        roleIds = [];
      }
      let roles: SsoRole[];
      if (isNullOrUnDef(data.record.tenantId) || data.record.tenantId === "") {
        // 租户子组织获取系统默认角色
        roles = await getAllRoleList({ orgIds: data.record.id });
      } else {
        // 租户父组织获取系统默认角色
        roles = await getAllRoleList({ tenantId: "1" });
      }
      setRoles(roles, roleIds);
      return;
    }
    const roles = await getAllRoleList({ tenantId: "1" });
    setRoles(roles, []);
  });

  function setRoles(roles, roleIds) {
    const options = roles.reduce((prev, next: Recordable) => {
      if (next) {
        let disable = false;
        if (next.id === "1") {
          disable = true;
        }
        prev.push({
          key: next.id,
          label: next.roleName,
          value: next.id,
          disabled: disable
        });
      }
      return prev;
    }, [] as any);
    updateSchema({
      field: "roleIds",
      componentProps: { options, optionFilterProp: "label" }
    }).then();
    // 过滤掉不存在的角色
    const roleValues = roleIds.filter((roleId) => roles.some((role) => role.id === roleId));
    setFieldsValue({ roleIds: roleValues }).then();
  }

  function tenantDisabled(disabled, source) {
    parentIdDisabled.value = disabled;
    updateSchema([
      {
        field: "orgName",
        dynamicDisabled: disabled
      },
      {
        field: "orgFixCode",
        dynamicDisabled: disabled
      },
      {
        field: "roleIds",
        dynamicDisabled: source === 1 && disabled
      },
      {
        field: "status",
        dynamicDisabled: source === 1 && disabled
      }
    ]).then();
  }

  async function handleSearch(value) {
    if (props.source === 1) return;
    const orgData = await getOrg({
      orgName: value,
      addFlag: 1,
      pageNum: 1,
      pageSize: 100
    });
    treeData.value = orgData.list;
  }

  async function orgChange(orgId, _, extra) {
    setFieldsValue({ parentId: orgId }).then();
    const id = extra.triggerNode?.props?.id;
    const roles = await (id ? getAllRoleList({ orgIds: id }) : getAllRoleList({ tenantId: "1" }));
    setRoles(roles, []);
  }

  const getTitle = computed(() => (unref(isUpdate) ? "编辑组织" : "新增组织"));

  async function handleSubmit() {
    const values = await validate();
    if (
      (values.tenantId === null || values.tenantId === undefined || values.tenantId === "") &&
      (values.parentId === null || values.parentId === undefined || values.parentId === "")
    ) {
      createMessage.error("错误:请选择父组织");
      return;
    }
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      if (!values.roleIds) {
        values.roleIds = [];
      }
      if (props.source === 1) {
        saveOrg(updateTenantOrg, values);
      } else {
        saveOrg(updateOrg, values);
      }
    } else {
      if (props.source === 1) {
        saveOrg(insertTenantOrg, values);
      } else {
        saveOrg(insertOrg, values);
      }
    }
    emit("success");
  }

  function saveOrg(save, values) {
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
