<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="onFetchSuccess" :class="$props.source === 1 ? prefixCls : ''">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="
            (source === 1 && hasPermission('sys:tenantOrg:insert')) || (source !== 1 && hasPermission('sys:org:insert'))
          "
        >
          新增组织
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: ['sys:org:query', 'sys:tenantOrg:update'],
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                ifShow:
                  (source === 1 && hasPermission('sys:tenantOrg:update')) ||
                  (source !== 1 && hasPermission('sys:org:update'))
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                //最顶层租户组织不允许删除
                ifShow:
                  !record?.tenantId &&
                  ((source === 1 && hasPermission('sys:tenantOrg:delete')) ||
                    (source !== 1 && hasPermission('sys:org:delete')))
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <OrgModal @register="registerModal" @success="handleSuccess" :source="$props.source" />
    <OrgViewModal @register="registerViewModal" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  import { BasicTable, useTable, TableAction } from "@/components/general/Table";
  import { deleteOrg, getOrgTree } from "@/api/sys/Org";
  import { useModal } from "@/components/general/Modal";
  import OrgModal from "./OrgModal.vue";
  import OrgViewModal from "./OrgViewModal.vue";
  import { columns, searchFormSchema } from "./org.data";
  import { usePermission } from "@/hooks/web/UsePermission";
  import { deleteTenantOrg, getTenantOrgTree } from "@/api/sys/SsoTenant";
  import { useDesign } from "@/hooks/web/UseDesign";
  import { Recordable } from "@mfish/types";
  defineOptions({ name: "OrgManagement" });

  const props = defineProps({
    source: {
      type: Number,
      default: null
    }
  });
  const { hasPermission } = usePermission();
  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const { prefixCls } = useDesign("org");
  const api = ref();
  api.value = props.source === 1 ? getTenantOrgTree : getOrgTree;
  const [registerTable, { reload, expandRows }] = useTable({
    title: "组织列表",
    rowKey: "id",
    api,
    columns,
    formConfig: {
      name: "search_form_item",
      labelWidth: 80,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true
    },
    isTreeTable: true,
    pagination: false,
    striped: false,
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    canResize: false,
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

  function handleQuery(org: Recordable) {
    openViewModal(true, { record: org });
  }

  function handleEdit(record: Recordable) {
    openModal(true, {
      record,
      isUpdate: true
    });
  }

  function handleDelete(record: Recordable) {
    if (props.source === 1) {
      deleteTenantOrg(record.id).then(() => {
        handleSuccess();
      });
      return;
    }
    deleteOrg(record.id).then(() => {
      handleSuccess();
    });
  }

  function handleSuccess() {
    reload();
  }

  function onFetchSuccess(record) {
    if (record?.items?.length > 0) {
      expandRows([record.items[0].id]);
    }
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-org";
  .@{prefix-cls} {
    padding: 0;
  }
</style>
