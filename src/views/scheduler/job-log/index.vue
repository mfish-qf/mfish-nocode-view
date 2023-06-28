<!--
 @description: 任务日志
 @author: mfish
 @date: 2023-02-14
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
          <Tag v-for="item in jobTypes" v-show="record.jobType === item.dictValue" :color="item.color">
            {{ item.dictLabel }}
          </Tag>
        </template>
        <template v-if="column.key === 'status'">
          <Tag v-for="item in jobStatus" v-show="record.status === item.dictValue" :color="item.color">
            {{ item.dictLabel }}
          </Tag>
        </template>
      </template>
    </BasicTable>
    <JobLogModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { ref, onBeforeMount } from "vue";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteJobLog, getJobLogList } from "/@/api/scheduler/JobLog";
  import { columns, searchFormSchema } from "./jobLog.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { getDictItems } from "/@/api/sys/DictItem";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  import { Tag } from "ant-design-vue";
  import { useModal } from "/@/components/general/Modal";
  import JobLogModal from "/@/views/scheduler/job-log/JobLogModal.vue";
  import { buildDictTag } from "/@/utils/DictUtils";
  import { Job } from "/@/api/scheduler/model/JobModel";

  export default {
    name: "JobLogManagement",
    components: { JobLogModal, BasicTable, TableAction, Tag },
    setup() {
      const { hasPermission } = usePermission();
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
      let jobTypes = ref<DictItem[]>([]);
      let jobStatus = ref<DictItem[]>([]);
      onBeforeMount(() => {
        getJobTypes();
        getJobStatus();
      });

      function getJobTypes() {
        getDictItems("sys_job_type").then((res) => {
          jobTypes.value = res;
        });
      }

      function getJobStatus() {
        getDictItems("sys_job_status").then((res) => {
          jobStatus.value = res;
        });
      }

      function handleDelete(record: Recordable) {
        deleteJobLog(record.id).then(() => {
          handleSuccess();
        });
      }

      function handleQuery(record: Job) {
        const jobTypesTag = buildDictTag(record.jobType, jobTypes.value);
        const jobStatusTag = buildDictTag(record.status, jobStatus.value);
        openModal(true, { ...record, jobTypesTag, jobStatusTag });
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
        hasPermission,
        jobTypes,
        jobStatus
      };
    }
  };
</script>
