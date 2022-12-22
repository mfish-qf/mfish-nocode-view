<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:account:insert')">新增菜单</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:menu:update'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                auth: 'sys:menu:delete'
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <MenuModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
import { BasicTable, useTable, TableAction } from "/@/components/Table";
import { deleteMenu, getMenuTree } from "/@/api/sys/Menu";
import MenuModal from "./MenuModal.vue";
import { columns, searchFormSchema } from "./menu.data";
import { useModal } from "/@/components/Modal";
import { usePermission } from "/@/hooks/web/UsePermission";

export default {
  name: "MenuManagement",
  components: { BasicTable, MenuModal, TableAction },
  setup() {
    const { hasPermission } = usePermission();
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload, updateTableDataRecord, deleteTableDataRecord }] = useTable({
      title: "菜单列表",
      api: getMenuTree,
      rowKey: "id",
      columns,
      formConfig: {
        labelWidth: 100,
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
        dataIndex: "action",
        fixed: undefined
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
      deleteMenu(record.id).then(() => {
        deleteTableDataRecord(record.id);
      });
    }

    function handleSuccess({ isUpdate, values }) {
      if (isUpdate) {
        updateTableDataRecord(values.id, values);
      } else {
        reload();
      }
    }

    return {
      registerTable,
      registerModal,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess,
      hasPermission
    };
  }
};
</script>
