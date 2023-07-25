<!--
 @description: API目录
 @author: mfish
 @date: 2023-07-18
 @version: V1.1.0
-->
<template>
  <PageWrapper contentClass="flex" contentFullHeight fixedHeight>
    <DragFolderTree
      class="mt-3 mr-0 mb-3 ml-3 w-1/4 xl:w-1/5"
      :tree-data="genData"
      node-title="name"
      @save:drag="dragTree"
      @save:insert="insertTree"
      @save:update="updateTree"
      @save:delete="deleteTree"
    />
    <BasicTable class="w-3/4 xl:w-4/5" @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:api:insert')">新增</a-button>
        <a-button type="error" @click="handleExport" v-if="hasPermission('sys:api:export')">导出</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:api:update',
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
                auth: 'sys:api:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <ApiFolderModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { PageWrapper } from "/@/components/general/Page";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { useModal } from "/@/components/general/Modal";
  import ApiFolderModal from "./ApiFolderModal.vue";
  import { columns, searchFormSchema } from "./apiFolder.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { DragFolderTree } from "/@/components/general/DragTree";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import { onMounted, ref } from "vue";
  import {
    deleteApiFolder,
    dragApiFolder,
    exportApiFolder,
    getApiFolderList,
    insertApiFolder,
    updateApiFolder
  } from "/@/api/nocode/ApiFolder";
  import { ApiFolder } from "/@/api/nocode/model/ApiFolderModel";
  export default {
    name: "ApiFolderManagement",
    components: { PageWrapper, DragFolderTree, BasicTable, ApiFolderModal, TableAction },
    setup() {
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const { prefixCls } = useDesign("no-code-api");
      const [registerTable, { reload, getForm }] = useTable({
        title: "API目录列表",
        api: getApiFolderList,
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
          width: 80,
          title: "操作",
          dataIndex: "action"
        }
      });
      const genData = ref();
      onMounted(() => {
        getApiFolderList().then((res) => {
          genData.value = res;
        });
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
        exportApiFolder({ ...getForm().getFieldsValue(), pageNum: 1, pageSize: 1000 });
      }

      /**
       * 修改
       * @param
       */
      function handleEdit(apiFolder: ApiFolder) {
        openModal(true, {
          record: apiFolder,
          isUpdate: true
        });
      }

      /**
       * 删除
       * @param
       */
      function handleDelete(apiFolder: ApiFolder) {
        if (apiFolder.id) {
          deleteApiFolder(apiFolder.id).then(() => {
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

      function dragTree(_, nodes) {
        dragApiFolder(nodes).then();
      }

      function insertTree(node) {
        insertApiFolder({ ...node, name: node.title }).then();
      }

      function updateTree(node) {
        updateApiFolder({ ...node, name: node.title }).then();
      }

      function deleteTree(node) {
        deleteApiFolder(node.id).then();
      }
      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleExport,
        handleSuccess,
        hasPermission,
        prefixCls,
        genData,
        dragTree,
        insertTree,
        updateTree,
        deleteTree
      };
    }
  };
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-no-code-api";
  .@{prefix-cls} {
    display: flex;
    .left {
      width: 300px;
    }
    .right {
      flex: 1;
    }
  }
</style>
