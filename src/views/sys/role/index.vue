<template>
  <div>
    <BasicTable @register="registerTable" :class="$props.source === 1 ? prefixCls : ''">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="
            (source === 1 && hasPermission('sys:tenantRole:insert')) ||
            (source !== 1 && hasPermission('sys:role:insert'))
          "
        >
          新增角色
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: ['sys:role:query', 'sys:tenantRole:query'],
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                ifShow:
                  (source === 1 && hasPermission('sys:tenantRole:update')) ||
                  (source !== 1 && hasPermission('sys:role:update'))
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                ifShow:
                  !isSuperRole(record.id) &&
                  !isPersonRole(record.id) &&
                  ((source === 1 && hasPermission('sys:tenantRole:delete')) ||
                    (source !== 1 && hasPermission('sys:role:delete')))
              }
            ]"
          />
        </template>
        <template v-if="column.key === 'status'">
          <ASwitch
            checked-children="已启用"
            un-checked-children="已停用"
            :checked="record.status === 0"
            :loading="statusLoading"
            @change="handleStatus(record)"
            :disabled="statusDisabled(record)"
          />
        </template>
      </template>
    </BasicTable>
    <RoleModal @register="registerModal" @success="handleSuccess" :source="$props.source" />
    <RoleViewModal @register="registerViewModal" :source="$props.source" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { deleteRole, deleteTenantRole, getRoleList, getTenantRole, setRoleStatus, SsoRole } from "@mfish/core/api";
  import { useModal } from "@mfish/core/components/Modal";
  import RoleModal from "./RoleModal.vue";
  import RoleViewModal from "./RoleViewModal.vue";
  import { columns, searchFormSchema } from "./role.data";
  import { useDesign, usePermission } from "@mfish/core/hooks";
  import { ref } from "vue";
  import { Switch as ASwitch } from "ant-design-vue";

  defineOptions({ name: "RoleManagement" });

  const props = defineProps({
    source: {
      type: Number,
      default: null
    }
  });
  const { hasPermission, isSuperRole, isPersonRole } = usePermission();
  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const { prefixCls } = useDesign("role");
  const api = ref();

  api.value = props.source === 1 ? getTenantRole : getRoleList;
  const [registerTable, { reload }] = useTable({
    title: "角色列表",
    api,
    columns,
    formConfig: {
      name: "search_form_item",
      labelWidth: 80,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    resizeHeightOffset: props.source === 1 ? 25 : 0,
    showIndexColumn: false,
    actionColumn: {
      width: 120,
      title: "操作",
      dataIndex: "action"
    }
  });

  function handleCreate() {
    openModal(true, {
      isUpdate: false
    });
  }

  /**
   * 查看
   * @param role 角色表对象
   */
  function handleQuery(role: SsoRole) {
    openViewModal(true, { record: role });
  }

  function handleEdit(record: SsoRole) {
    openModal(true, {
      record,
      isUpdate: true
    });
  }

  const statusLoading = ref(false);
  const statusDisabled = (record) =>
    isSuperRole(record.id) ||
    isPersonRole(record.id) ||
    !(
      (props.source === 1 && hasPermission("sys:tenantRole:update")) ||
      (props.source !== 1 && hasPermission("sys:role:update"))
    );

  function handleStatus(record: SsoRole) {
    statusLoading.value = true;
    const newStatus = record.status === 0 ? 1 : 0;
    setRoleStatus(record.id, newStatus)
      .then(() => {
        record.status = newStatus;
      })
      .finally(() => {
        statusLoading.value = false;
      });
  }

  function handleDelete(record: SsoRole) {
    if (props.source === 1) {
      deleteTenantRole(record.id).then(() => {
        handleSuccess();
      });
      return;
    }
    deleteRole(record.id).then(() => {
      handleSuccess();
    });
  }

  function handleSuccess() {
    reload();
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-role";
  .@{prefix-cls} {
    padding: 0;
  }
</style>
