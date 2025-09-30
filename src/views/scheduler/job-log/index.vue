<!--
 @description: 任务日志
 @author: mfish
 @date: 2023-02-14
 @version: V2.2.0
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
                auth: 'sys:jobLog:query',
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
                auth: 'sys:jobLog:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
        <template v-if="column.key === 'jobType'">
          <DictTag code="sys_job_type" :value="record.jobType" />
        </template>
        <template v-if="column.key === 'status'">
          <DictTag code="sys_job_status" :value="record.status" />
        </template>
      </template>
    </BasicTable>
    <JobLogModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { deleteJobLog, getJobLogList } from "@/api/scheduler/JobLog";
  import { columns, searchFormSchema } from "./jobLog.data";
  import { useModal } from "@mfish/core/components/Modal";
  import JobLogModal from "@/views/scheduler/job-log/JobLogModal.vue";
  import { buildDictTag, DictTag } from "@mfish/core/components/DictTag";
  import { Job } from "@/api/scheduler/model/JobModel";
  import { Recordable } from "@mfish/types";

  defineOptions({ name: "JobLogManagement" });
  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: "任务日志列表",
    api: getJobLogList,
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

  function handleDelete(record: Recordable) {
    deleteJobLog(record.id).then(() => {
      handleSuccess();
    });
  }

  function handleQuery(record: Job) {
    const jobTypesTag = buildDictTag("sys_job_type", record.jobType);
    const jobStatusTag = buildDictTag("sys_job_status", record.status);
    openModal(true, { ...record, jobTypesTag, jobStatusTag });
  }

  function handleSuccess() {
    reload();
  }
</script>
