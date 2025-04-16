<!--
 @description: 属性分类字典
 @author: mfish
 @date: 2024-03-12
 @version: V2.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'sys:dictCategory:insert'">新增分类</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:sisternode-outlined',
                onClick: handleAddChild.bind(null, record),
                auth: 'sys:dictCategory:insert',
                tooltip: '添加子分类'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:dictCategory:update',
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
                auth: 'sys:dictCategory:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DictCategoryModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { deleteDictCategory, DictCategory, getDictCategoryList } from "@mfish/core/api";
  import { useModal } from "@mfish/core/components/Modal";
  import DictCategoryModal from "./DictCategoryModal.vue";
  import { columns, searchFormSchema } from "./dictCategory.data";

  defineOptions({ name: "DictCategoryManagement" });

  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: "分类树",
    api: getDictCategoryList,
    rowKey: "id",
    columns,
    formConfig: {
      name: "search_form_item",
      labelWidth: 80,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true
    },
    isTreeTable: true,
    striped: false,
    canResize: false,
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

  /**
   * 新建
   */
  function handleCreate() {
    openModal(true, {
      isUpdate: false
    });
  }

  function handleAddChild(dictCategory: DictCategory) {
    openModal(true, {
      parentId: dictCategory.id,
      isUpdate: false
    });
  }

  /**
   * 修改
   * @param dictCategory 属性分类字典对象
   */
  function handleEdit(dictCategory: DictCategory) {
    openModal(true, {
      record: dictCategory,
      isUpdate: true
    });
  }

  /**
   * 删除
   * @param dictCategory 属性分类字典对象
   */
  function handleDelete(dictCategory: DictCategory) {
    if (dictCategory.id) {
      deleteDictCategory(dictCategory.id).then(() => {
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
