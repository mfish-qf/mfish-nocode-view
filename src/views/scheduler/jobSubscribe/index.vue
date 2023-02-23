<!--
 @description: 任务订阅表
 @author: mfish
 @date: 2023-02-20
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:job:insert')">新增策略
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
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
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
import { getJobSubscribeList } from "/@/api/scheduler/JobSubscribe";
import JobSubscribeModal from "./JobSubscribeModal.vue";
import { columns } from "./jobSubscribe.data";
import { usePermission } from "/@/hooks/web/UsePermission";
import { dateUtil } from "/@/utils/DateUtil";
import { buildUUID } from "/@/utils/Uuid";

export default {
  name: "JobSubscribeManagement",
  components: { BasicTable, JobSubscribeModal, TableAction },
  setup() {
    const { hasPermission } = usePermission();
    const [registerTable, { reload, insertTableDataRecord, deleteTableDataRecord }] = useTable({
      title: "触发策略列表",
      api: getJobSubscribeList,
      rowKey: "id",
      columns,
      bordered: true,
      showIndexColumn: false,
      maxHeight: 500,
      canResize: true,
      pagination: false,
      actionColumn: {
        width: 40,
        title: "",
        dataIndex: "action",
        fixed: undefined
      }
    });

    function handleCreate() {
      const value = {
        id: buildUUID(),
        cron: "",
        startTime: dateUtil().toString(),
        endTime: dateUtil().add(2, "year").toString(),
        status: 0
      };
      insertTableDataRecord(value, 0);
    }

    function handleDelete(record: Recordable) {
      deleteTableDataRecord(record.id);
    }

    function handleSuccess() {
      reload();
    }

    return {
      registerTable,
      handleCreate,
      handleDelete,
      handleSuccess,
      hasPermission
    };
  }
};
</script>
