<!--
 @description: 定时调度任务
 @author: mfish
 @date: 2023-02-20
 @version: V2.0.1
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'sys:job:insert'">新增任务</a-button>
      </template>
      <template #expandedRowRender="{ record }">
        <JobSubscribeList :subscribes="record.subscribes" />
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:job:update',
                tooltip: '修改'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: 'sys:job:delete',
                tooltip: '删除'
              },
              {
                icon: 'ant-design:caret-right-outlined',
                auth: 'sys:job:execute',
                popConfirm: {
                  title: '是否确认执行',
                  placement: 'left',
                  confirm: handleExecute.bind(null, record)
                },
                color: 'warning',
                tooltip: '立即执行'
              }
            ]"
          />
        </template>
        <template v-if="column.key === 'jobType'">
          <DictTag code="sys_job_type" :value="record.jobType" />
        </template>
        <template v-if="column.key === 'misfireHandler'">
          <DictTag code="sys_job_misfire" :value="record.misfireHandler" />
        </template>
        <template v-if="column.key === 'timeZone'">
          <DictTag code="sys_time_zone" :value="record.timeZone" />
        </template>
      </template>
    </BasicTable>
    <JobModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { deleteJob, executeJob, getJobList } from "@/api/scheduler/Job";
  import { useModal } from "@mfish/core/components/Modal";
  import JobModal from "./JobModal.vue";
  import { columns, searchFormSchema } from "./job.data";
  import { Job } from "@/api/scheduler/model/JobModel";
  import JobSubscribeList from "@/views/scheduler/job/JobSubscribeList.vue";
  import { DictTag } from "@mfish/core/components/DictTag";

  defineOptions({ name: "JobManagement" });
  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: "定时调度任务列表",
    api: getJobList,
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
    expandRowByClick: true,
    actionColumn: {
      width: 100,
      title: "操作",
      dataIndex: "action"
    }
  });

  function handleCreate() {
    openModal(true, {
      isUpdate: false
    });
  }

  function handleExecute(record: Job) {
    executeJob(record).then();
  }

  function handleEdit(record: Job) {
    openModal(true, {
      record,
      isUpdate: true
    });
  }

  function handleDelete(record: Job) {
    if (record.id) {
      deleteJob(record.id).then(() => {
        handleSuccess();
      });
    }
  }

  function handleSuccess() {
    reload();
  }
</script>
