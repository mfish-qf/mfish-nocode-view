<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="onFetchSuccess">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增菜单</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <MenuDrawer @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
import { defineComponent, nextTick } from "vue";
import { BasicTable, useTable, TableAction } from "/@/components/Table";
import { deleteMenu, getMenuTree } from "/@/api/sys/Menu";
import MenuDrawer from "./MenuDrawer.vue";
import { columns, searchFormSchema } from "./menu.data";
import { useModal } from "/@/components/Modal";

export default defineComponent({
  name: "MenuManagement",
  components: { BasicTable, MenuDrawer, TableAction },
  setup() {
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload, expandAll }] = useTable({
      title: "菜单列表",
      api: getMenuTree,
      columns,
      formConfig: {
        labelWidth: 100,
        schemas: searchFormSchema
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
        handleSuccess();
      });
    }

    function handleSuccess() {
      reload();
    }

    function onFetchSuccess() {
      nextTick(expandAll);
    }

    return {
      registerTable,
      registerModal,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess,
      onFetchSuccess
    };
  }
});
</script>
