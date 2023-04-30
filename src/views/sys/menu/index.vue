<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:menu:insert')">新增菜单</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
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
import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
import { deleteMenu, getMenuList } from "/@/api/sys/Menu";
import MenuModal from "./MenuModal.vue";
import { columns, searchFormSchema } from "./menu.data";
import { useModal } from "/@/components/general/Modal";
import { usePermission } from "/@/hooks/web/UsePermission";

export default {
  name: "MenuManagement",
  components: { BasicTable, MenuModal, TableAction },
  setup() {
    const { hasPermission } = usePermission();
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload, setTableData, deleteTableDataRecord }] = useTable({
      title: "菜单列表",
      api: getMenuList,
      rowKey: "id",
      columns,
      formConfig: {
        name: "search_form_item",
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

    function handleSuccess({ isUpdate }) {
      if (isUpdate) {
        getMenuList().then((res)=>{
          setTableData(res)
        })
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
