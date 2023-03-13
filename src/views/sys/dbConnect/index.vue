<!--
 @description: 数据库连接
 @author: mfish
 @date: 2023-03-13
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:dbConnect:insert')">新增连接</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:dbConnect:update',
                tooltip: '修改',
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                auth: 'sys:dbConnect:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DbConnectModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
import { deleteDbConnect, getDbConnectList } from "/@/api/sys/DbConnect";
import { useModal } from "/@/components/general/Modal";
import DbConnectModal from "./DbConnectModal.vue";
import { columns, searchFormSchema } from "./dbConnect.data";
import { usePermission } from "/@/hooks/web/UsePermission";

export default {
  name: "DbConnectManagement",
  components: { BasicTable, DbConnectModal, TableAction },
  setup() {
    const { hasPermission } = usePermission();
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload }] = useTable({
      title: "数据库连接列表",
      api: getDbConnectList,
      columns,
      formConfig: {
        labelWidth: 100,
        schemas: searchFormSchema
      },
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
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

    function handleEdit(record: Recordable) {
      openModal(true, {
        record,
        isUpdate: true
      });
    }

    function handleDelete(record: Recordable) {
      deleteDbConnect(record.id).then(() => {
        handleSuccess();
      });
    }

    function handleSuccess() {
      reload();
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
