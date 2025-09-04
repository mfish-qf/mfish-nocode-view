<!--
 @description: 公式信息
 @author: mfish
 @date: 2025-02-11
 @version: V2.1.1
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <AButton type="primary" @click="handleCreate" v-auth="'nocode:formulaInfo:insert'">新增</AButton>
        <AButton color="warning" @click="handleExport" v-auth="'nocode:formulaInfo:export'">导出</AButton>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: 'nocode:formulaInfo:query',
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'nocode:formulaInfo:update',
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
                auth: 'nocode:formulaInfo:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <FormulaInfoModal @register="registerModal" @success="handleSuccess" />
    <FormulaInfoViewModal @register="registerViewModal" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { deleteFormulaInfo, exportFormulaInfo, FormulaInfo, getFormulaInfoList } from "@mfish/custom-api";
  import { useModal } from "@mfish/core/components/Modal";
  import FormulaInfoModal from "./FormulaInfoModal.vue";
  import FormulaInfoViewModal from "./FormulaInfoViewModal.vue";
  import { columns, searchFormSchema } from "./formulaInfo.data";
  import { ref } from "vue";
  import { Button as AButton } from "@mfish/core/components/Button";

  defineOptions({ name: "FormulaInfoManagement" });
  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const selectedRowKeys = ref<any[]>([]);
  const [registerTable, { reload, getForm }] = useTable({
    title: "公式信息列表",
    api: getFormulaInfoList,
    rowKey: "id",
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
    rowSelection: {
      onChange: (rowKeys: any[]) => {
        selectedRowKeys.value = rowKeys;
      }
    },
    actionColumn: {
      width: 120,
      title: "操作",
      dataIndex: "action"
    }
  });

  /**
   * 新建
   */
  function handleCreate() {
    openModal(true, {
      isUpdate: false
    });
  }

  /**
   *  导出自动生成支持导出1000条可自行修改
   */
  function handleExport() {
    exportFormulaInfo({ ...getForm().getFieldsValue(), pageNum: 1, pageSize: 1000 });
  }

  /**
   * 查看
   * @param formulaInfo 公式信息对象
   */
  function handleQuery(formulaInfo: FormulaInfo) {
    openViewModal(true, { record: formulaInfo });
  }

  /**
   * 修改
   * @param formulaInfo 公式信息对象
   */
  function handleEdit(formulaInfo: FormulaInfo) {
    openModal(true, {
      record: formulaInfo,
      isUpdate: true
    });
  }

  /**
   * 删除
   * @param formulaInfo 公式信息对象
   */
  function handleDelete(formulaInfo: FormulaInfo) {
    if (formulaInfo.id) {
      deleteFormulaInfo(formulaInfo.id).then(() => {
        handleSuccess();
      });
    }
  }

  /**
   * 处理完成
   */
  function handleSuccess() {
    reload();
  }
</script>
