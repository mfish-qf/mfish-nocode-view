<!--
 @description: 任务日志
 @author: mfish
 @date: 2023-02-14
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
          <dict-tag code="sys_job_type" :value="record.jobType" />
        </template>
        <template v-if="column.key === 'status'">
          <dict-tag code="sys_job_status" :value="record.status" />
        </template>
      </template>
    </BasicTable>
    <JobLogModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteJobLog, getJobLogList } from "/@/api/scheduler/JobLog";
  import { columns, searchFormSchema } from "./jobLog.data";
  import { useModal } from "/@/components/general/Modal";
  import JobLogModal from "/@/views/scheduler/job-log/JobLogModal.vue";
  import { buildDictTag } from "/@/utils/DictUtils";
  import { Job } from "/@/api/scheduler/model/JobModel";
  import DictTag from "/@/components/general/DictTag/DictTag.vue";
  import { useDictStore } from "/@/store/modules/Dict";
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
    const store = useDictStore();
    const jobTypesTag = buildDictTag(record.jobType, store.getDict("sys_job_type"));
    const jobStatusTag = buildDictTag(record.status, store.getDict("sys_job_status"));
    openModal(true, { ...record, jobTypesTag, jobStatusTag });
  }

  function handleSuccess() {
    reload();
  }
</script>
