<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="onFetchSuccess">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:org:insert')">新增组织 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:org:update'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: 'sys:org:delete',
                ifShow: !record?.tenantId
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <OrgModal @register="registerModal" @success="handleSuccess" :source="$props.source" />
  </div>
</template>
<script lang="ts">
  import { ref } from "vue";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteOrg, getOrgTree } from "/@/api/sys/Org";
  import { useModal } from "/@/components/general/Modal";
  import OrgModal from "./OrgModal.vue";
  import { columns, searchFormSchema } from "./org.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { getTenantOrgTree } from "/@/api/sys/SsoTenant";

  export default {
    name: "OrgManagement",
    components: { BasicTable, OrgModal, TableAction },
    props: {
      source: {
        type: Number,
        default: null
      }
    },
    setup(props) {
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const api = ref();
      if (props.source == 1) {
        api.value = getTenantOrgTree;
      } else {
        api.value = getOrgTree;
      }
      const [registerTable, { reload, expandRows }] = useTable({
        title: "部门列表",
        rowKey: "id",
        api: api,
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

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true
        });
      }

      function handleDelete(record: Recordable) {
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

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        onFetchSuccess,
        hasPermission
      };
    }
  };
</script>
