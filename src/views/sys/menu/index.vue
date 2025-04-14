<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'sys:menu:insert'">新增菜单</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: 'sys:menu:query',
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:menu:update'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: `是否确认删除【${record.menuName}】`,
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: 'sys:menu:delete'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <MenuModal @register="registerModal" @success="handleSuccess" />
    <MenuViewModal @register="registerViewModal" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from "@mfish/core/src/components/Table";
  import { deleteMenu, getMenuList } from "@mfish/core/src/api/sys/Menu";
  import MenuModal from "./MenuModal.vue";
  import { columns, searchFormSchema } from "./menu.data";
  import { useModal } from "@mfish/core/src/components/Modal";
  import { Recordable } from "@mfish/types";
  import MenuViewModal from "@/views/sys/menu/MenuViewModal.vue";
  defineOptions({ name: "MenuManagement" });

  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const [registerTable, { reload, setTableData, deleteTableDataRecord }] = useTable({
    title: "菜单列表",
    api: getMenuList,
    rowKey: "id",
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
    canResize: false,
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
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

  function handleQuery(record: Recordable) {
    openViewModal(true, { record });
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
      getMenuList().then((res) => {
        setTableData(res);
      });
    } else {
      reload();
    }
  }
</script>
