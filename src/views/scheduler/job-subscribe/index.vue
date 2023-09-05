<!--
 @description: 任务订阅表
 @author: mfish
 @date: 2023-02-20
 @version: V1.1.0
-->
<template>
  <BasicTable @register="registerTable">
    <template #toolbar>
      <a-button type="primary" @click="handleCreate" v-auth="'sys:job:insert'">新增策略</a-button>
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
                confirm: handleDelete.bind(null, record)
              },
              auth: 'sys:job:delete'
            }
          ]"
        />
      </template>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { watch } from "vue";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { getJobSubscribeById } from "/@/api/scheduler/JobSubscribe";
  import { columns } from "./jobSubscribe.data";
  import { dateUtil, formatToDateTime } from "/@/utils/DateUtil";
  import { buildUUID } from "/@/utils/Uuid";

  export default {
    name: "JobSubscribeManagement",
    components: { BasicTable, TableAction },
    props: {
      jobId: { type: String, default: "" }
    },
    setup(props) {
      const [registerTable, { reload, insertTableDataRecord, deleteTableDataRecord, setTableData, getDataSource }] =
        useTable({
          title: "触发策略列表",
          rowKey: "id",
          columns,
          bordered: true,
          showIndexColumn: false,
          maxHeight: 300,
          pagination: false,
          actionColumn: {
            width: 40,
            title: "",
            dataIndex: "action"
          }
        });
      const getValue = () => {
        return getDataSource();
      };

      watch(
        () => props.jobId,
        (newVal, oldVal) => {
          if (newVal && newVal !== oldVal) {
            getJobSubscribeById(newVal).then((res) => {
              setTableData(res);
            });
          } else {
            setTableData([]);
          }
        }
      );

      function handleCreate() {
        const value = {
          id: buildUUID(),
          cron: "",
          startTime: formatToDateTime(dateUtil()),
          endTime: formatToDateTime(dateUtil().add(2, "year")),
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
        getValue
      };
    }
  };
</script>
