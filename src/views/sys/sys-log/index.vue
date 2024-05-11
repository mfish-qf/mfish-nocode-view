<!--
 @description: 系统日志
 @author: mfish
 @date: 2023-01-08
 @version: V1.2.0
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
                auth: 'sys:log:query',
                tooltip: '日志详情'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: 'sys:log:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
        <template v-if="column.key === 'reqSource'">
          <dict-tag code="sys_req_source" :value="record.reqSource" />
        </template>
        <template v-if="column.key === 'operType'">
          <dict-tag code="sys_log_type" :value="record.operType" />
        </template>
        <template v-if="column.key === 'reqType'">
          <dict-tag code="sys_req_type" :value="record.reqType" />
        </template>
      </template>
    </BasicTable>
    <SysLogModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteSysLog, getSysLogList } from "/@/api/sys/SysLog";
  import { useModal } from "/@/components/general/Modal";
  import SysLogModal from "./SysLogModal.vue";
  import { columns, searchFormSchema } from "./sysLog.data";
  import { SysLog } from "/@/api/sys/model/SysLogModel";
  import { buildDictTag } from "/@/utils/DictUtils";
  import DictTag from "/@/components/general/DictTag/DictTag.vue";
  defineOptions({ name: "SysLogManagement" });

  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: "系统日志列表",
    api: getSysLogList,
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
    showIndexColumn: false,
    actionColumn: {
      width: 80,
      title: "操作",
      dataIndex: "action"
    }
  });

  function handleQuery(record: SysLog) {
    const reqSourceTag = buildDictTag("sys_req_source", record.reqSource);
    const operTypeTag = buildDictTag("sys_log_type", record.operType);
    const reqTypeTag = buildDictTag("sys_req_type", record.reqType);
    openModal(true, { ...record, reqSourceTag, operTypeTag, reqTypeTag });
  }

  function handleDelete(record: SysLog) {
    if (record.id) {
      deleteSysLog(record.id).then(() => {
        handleSuccess();
      });
    }
  }

  function handleSuccess() {
    reload();
  }
</script>
