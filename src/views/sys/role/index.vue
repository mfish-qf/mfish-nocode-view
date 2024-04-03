<template>
  <div>
    <BasicTable @register="registerTable" :class="$props.source === 1 ? prefixCls : ''">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="$props.source === 1 ? hasTenant() : hasPermission('sys:role:insert')"
          >新增角色
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                ifShow: $props.source === 1 ? hasTenant() : hasPermission('sys:role:update')
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                ifShow: record.id !== '1' && ($props.source === 1 ? hasTenant() : hasPermission('sys:role:delete'))
              }
            ]"
          />
        </template>
        <template v-if="column.key === 'status'">
          <ASwitch
            checked-children="已启用"
            unCheckedChildren="已停用"
            :checked="record.status === 0"
            :loading="statusLoading"
            @change="handleStatus(record)"
            :disabled="statusDisabled(record)"
          />
        </template>
      </template>
    </BasicTable>
    <RoleModal @register="registerModal" @success="handleSuccess" :source="$props.source" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteRole, getRoleList, setRoleStatus } from "/@/api/sys/Role";
  import { useModal } from "/@/components/general/Modal";
  import RoleModal from "./RoleModal.vue";
  import { columns, searchFormSchema } from "./role.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { ref } from "vue";
  import { deleteTenantRole, getTenantRole } from "/@/api/sys/SsoTenant";
  import { Switch as ASwitch } from "ant-design-vue";
  import { SsoRole } from "/@/api/sys/model/RoleModel";
  import { useDesign } from "/@/hooks/web/UseDesign";
  defineOptions({ name: "RoleManagement" });

  const props = defineProps({
    source: {
      type: Number,
      default: null
    }
  });
  const { hasPermission, hasTenant } = usePermission();
  const [registerModal, { openModal }] = useModal();
  const { prefixCls } = useDesign("role");
  const api = ref();

  if (props.source === 1) {
    api.value = getTenantRole;
  } else {
    api.value = getRoleList;
  }
  const [registerTable, { reload }] = useTable({
    title: "角色列表",
    api: api,
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
    resizeHeightOffset: props.source === 1 ? 18 : 0,
    showIndexColumn: false,
    actionColumn: {
      width: 80,
      title: "操作",
      dataIndex: "action"
    }
  });

  function handleCreate() {
    openModal(true, {
      isUpdate: false
    });
  }

  function handleEdit(record: SsoRole) {
    openModal(true, {
      record,
      isUpdate: true
    });
  }
  const statusLoading = ref(false);
  const statusDisabled = (record) =>
    record.id === "1" || (props.source === 1 ? !hasTenant() : !hasPermission("sys:role:update"));

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
