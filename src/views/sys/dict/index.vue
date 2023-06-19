<!--
 @description: 字典
 @author     ：mfish
 @date: 2023-01-03
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:dict:insert')">新增 </a-button>
        <a-button type="error" @click="handleExport" v-if="hasPermission('sys:dict:export')">导出 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:menu-outlined',
                tooltip: '字典项',
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
<script lang="ts">
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteDict, exportDict, getDictList } from "/@/api/sys/Dict";
  import { useModal } from "/@/components/general/Modal";
  import DictModal from "./DictModal.vue";
  import { columns, searchFormSchema } from "./dict.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { useGo } from "/@/hooks/web/UsePage";
  import { Dict } from "/@/api/sys/model/DictModel";

  export default {
    name: "DictManagement",
    components: { BasicTable, DictModal, TableAction },
    setup() {
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const go = useGo();
      const [registerTable, { reload, getForm }] = useTable({
        title: "字典列表",
        api: getDictList,
        columns,
        formConfig: {
          name: "search_form_item",
          labelWidth: 100,
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
        deleteDict(record.id).then(() => {
          handleSuccess();
        });
      }

      function handleItem(record: Dict) {
        go("/system/dict/" + record.dictCode);
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleExport,
        handleEdit,
        handleItem,
        handleDelete,
        handleSuccess,
        hasPermission
      };
    }
  };
</script>
