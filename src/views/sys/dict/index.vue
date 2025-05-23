<!--
 @description: 字典
 @author     ：mfish
 @date: 2023-01-03
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'sys:dict:insert'">新增</a-button>
        <a-button color="error" @click="handleExport" v-auth="'sys:dict:export'">导出</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:menu-outlined',
                tooltip: '字典项',
                color: 'success',
                onClick: handleItem.bind(null, record)
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:dict:update',
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
                auth: 'sys:dict:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DictModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { deleteDict, exportDict, getDictList } from "@/api/sys/Dict";
  import { useModal } from "@mfish/core/components/Modal";
  import DictModal from "./DictModal.vue";
  import { columns, searchFormSchema } from "./dict.data";
  import { useGo } from "@mfish/core/hooks";
  import { Dict } from "@/api/sys/model/DictModel";

  defineOptions({ name: "DictManagement" });

  const [registerModal, { openModal }] = useModal();
  const go = useGo();
  const [registerTable, { reload, getForm }] = useTable({
    title: "字典列表",
    api: getDictList,
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
      width: 120,
      title: "操作",
      dataIndex: "action"
    }
  });

  function handleCreate() {
    openModal(true, {
      isUpdate: false
    });
  }

  function handleExport() {
    exportDict({ ...getForm().getFieldsValue(), pageNum: 1, pageSize: 1000 });
  }

  function handleEdit(record: Dict) {
    openModal(true, {
      record,
      isUpdate: true
    });
  }

  function handleDelete(record: Dict) {
    if (record.id) {
      deleteDict(record.id).then(() => {
        handleSuccess();
      });
    }
  }

  function handleItem(record: Dict) {
    go(`/system/dict/${record.dictCode}`);
  }

  function handleSuccess() {
    reload();
  }
</script>
