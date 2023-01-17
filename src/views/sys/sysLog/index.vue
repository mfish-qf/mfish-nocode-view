<!--
 @description: 系统日志
 @author: mfish
 @date: 2023-01-08
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: 'sys:sysLog:update'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                auth: 'sys:sysLog:delete'
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <SysLogModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
import { deleteSysLog, getSysLogList } from "/@/api/sys/SysLog";
import { useModal } from "/@/components/general/Modal";
import SysLogModal from "./SysLogModal.vue";
import { columns, searchFormSchema } from "./sysLog.data";
import { usePermission } from "/@/hooks/web/UsePermission";
import { getDictItems } from "/@/api/sys/DictItem";

export default {
  name: "SysLogManagement",
  components: { BasicTable, SysLogModal, TableAction },
  setup() {
    const { hasPermission } = usePermission();
    const [registerModal, { openModal }] = useModal();
    const operType = getDictItems("");
    const [registerTable, { reload }] = useTable({
      title: "系统日志列表",
      api: getSysLogList,
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
        dataIndex: "action",
        fixed: undefined
      }
    });

    function handleQuery(record: Recordable) {
      openModal(true, {
        record
      });
    }

    function handleDelete(record: Recordable) {
      deleteSysLog(record.id).then(() => {
        handleSuccess();
      });
    }

    function handleSuccess() {
      reload();
    }

    return {
      registerTable,
      registerModal,
      handleQuery,
      handleDelete,
      handleSuccess,
      hasPermission
    };
  }
};
</script>
