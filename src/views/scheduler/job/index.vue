<!--
 @description: 定时调度任务
 @author: mfish
 @date: 2023-02-20
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:job:insert')">新增任务
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:job:update'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                auth: 'sys:job:delete'
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'jobType'">
          <Tag v-for="item in jobTypes" v-show="record.jobType == item.dictValue" :color="item.color">
            {{ item.dictLabel }}
          </Tag>
        </template>
        <template v-if="column.key === 'misfireHandler'">
          <Tag v-for="item in misfireHandlers" v-show="record.misfireHandler == item.dictValue" :color="item.color">
            {{ item.dictLabel }}
          </Tag>
        </template>
        <template v-if="column.key === 'timeZone'">
          <Tag v-for="item in timeZones" v-show="record.timeZone == item.dictValue" :color="item.color">
            {{ item.dictLabel }}
          </Tag>
        </template>
      </template>
    </BasicTable>
    <JobModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
import { ref, onBeforeMount } from "vue";
import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
import { Tag } from "ant-design-vue";
import { deleteJob, getJobList } from "/@/api/scheduler/Job";
import { useModal } from "/@/components/general/Modal";
import JobModal from "./JobModal.vue";
import { columns, searchFormSchema } from "./job.data";
import { usePermission } from "/@/hooks/web/UsePermission";
import { getDictItems } from "/@/api/sys/DictItem";
import { DictItem } from "/@/api/sys/model/DictItemModel";

export default {
  name: "JobManagement",
  components: { BasicTable, JobModal, TableAction, Tag },
  setup() {
    const { hasPermission } = usePermission();
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload }] = useTable({
      title: "定时调度任务列表",
      api: getJobList,
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
    let jobTypes = ref<DictItem[]>([]);
    let misfireHandlers = ref<DictItem[]>([]);
    let timeZones = ref<DictItem[]>([]);
    onBeforeMount(() => {
      getJobTypes();
      getMisfireHandlers();
      getTimeZone();
    });

    function getJobTypes() {
      getDictItems("sys_job_type").then((res) => {
        jobTypes.value = res;
      });
    }

    function getMisfireHandlers() {
      getDictItems("sys_job_misfire").then((res) => {
        misfireHandlers.value = res;
      });
    }

    function getTimeZone() {
      getDictItems("sys_time_zone").then((res) => {
        timeZones.value = res;
      });
    }

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
      deleteJob(record.id).then(() => {
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
      hasPermission,
      jobTypes,
      misfireHandlers,
      timeZones
    };
  }
};
</script>
