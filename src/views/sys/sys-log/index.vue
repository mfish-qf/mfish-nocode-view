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
          <Tag
            v-for="item in reqSource"
            :key="item.dictCode + item.dictValue"
            v-show="record.reqSource == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
        <template v-if="column.key === 'operType'">
          <Tag
            v-for="item in operType"
            :key="item.dictCode + item.dictValue"
            v-show="record.operType == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
        <template v-if="column.key === 'reqType'">
          <Tag
            v-for="item in reqType"
            :key="item.dictCode + item.dictValue"
            v-show="record.reqType == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
      </template>
    </BasicTable>
    <SysLogModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { onBeforeMount, ref } from "vue";
  import { Tag } from "ant-design-vue";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteSysLog, getSysLogList } from "/@/api/sys/SysLog";
  import { useModal } from "/@/components/general/Modal";
  import SysLogModal from "./SysLogModal.vue";
  import { columns, searchFormSchema } from "./sysLog.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { getDictItems } from "/@/api/sys/DictItem";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  import { SysLog } from "/@/api/sys/model/SysLogModel";
  import { buildDictTag } from "/@/utils/DictUtils";

  export default {
    name: "SysLogManagement",
    components: { BasicTable, SysLogModal, TableAction, Tag },
    setup() {
      const { hasPermission } = usePermission();
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
      const reqSource = ref<DictItem[]>([]);
      const operType = ref<DictItem[]>([]);
      const reqType = ref<DictItem[]>([]);
      onBeforeMount(() => {
        getReqSource();
        getOperType();
        getReqType();
      });

      function getReqSource() {
        getDictItems("sys_req_source").then((res) => {
          reqSource.value = res;
        });
      }

      function getOperType() {
        getDictItems("sys_log_type").then((res) => {
          operType.value = res;
        });
      }

      function getReqType() {
        getDictItems("sys_req_type").then((res) => {
          reqType.value = res;
        });
      }

      function handleQuery(record: SysLog) {
        const reqSourceTag = buildDictTag(record.reqSource, reqSource.value);
        const operTypeTag = buildDictTag(record.operType, operType.value);
        const reqTypeTag = buildDictTag(record.reqType, reqType.value);
        openModal(true, { ...record, reqSourceTag, operTypeTag, reqTypeTag });
      }

      function handleDelete(record: SysLog) {
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
        hasPermission,
        reqSource,
        operType,
        reqType
      };
    }
  };
</script>
