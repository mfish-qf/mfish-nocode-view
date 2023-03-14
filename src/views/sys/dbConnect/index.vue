<!--
 @description: 数据库连接
 @author: mfish
 @date: 2023-03-13
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:dbConnect:insert')">新增连接</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:dbConnect:update',
                tooltip: '修改',
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                auth: 'sys:dbConnect:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'dbType'">
          <Tag v-for="item in dbType" v-show="record.dbType == item.dictValue" :color="item.color">
            {{ item.dictLabel }}
          </Tag>
        </template>
        <template v-if="column.key === 'poolType'">
          <Tag v-for="item in poolType" v-show="record.poolType == item.dictValue" :color="item.color">
            {{ item.dictLabel }}
          </Tag>
        </template>
      </template>
    </BasicTable>
    <DbConnectModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
import { deleteDbConnect, getDbConnectList } from "/@/api/sys/DbConnect";
import { useModal } from "/@/components/general/Modal";
import DbConnectModal from "./DbConnectModal.vue";
import { columns, searchFormSchema } from "./dbConnect.data";
import { usePermission } from "/@/hooks/web/UsePermission";
import { DictItem } from "/@/api/sys/model/DictItemModel";
import { getDictItems } from "/@/api/sys/DictItem";
import { Tag } from "ant-design-vue";

export default {
  name: "DbConnectManagement",
  components: { BasicTable, DbConnectModal, TableAction, Tag },
  setup() {
    const { hasPermission } = usePermission();
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload }] = useTable({
      title: "数据库连接列表",
      api: getDbConnectList,
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
        dataIndex: "action"
      }
    });
    let dbType = ref<DictItem[]>([]);
    let poolType = ref<DictItem[]>([]);
    onMounted(() => {
      getDBType();
      getPoolType();
    });

    function getDBType() {
      getDictItems("sys_db_type").then((res) => {
        dbType.value = res;
      });
    }

    function getPoolType() {
      getDictItems("sys_db_pool").then((res) => {
        poolType.value = res;
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
      deleteDbConnect(record.id).then(() => {
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
      dbType,
      poolType
    };
  }
};
</script>
