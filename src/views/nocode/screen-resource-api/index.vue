<!--
 @description: 大屏资源API
 @author: mfish
 @date: 2025-03-21
 @version: V2.1.1
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <AButton type="primary" @click="handleCreate" v-auth="'nocode:screenResourceApi:insert'">新增</AButton>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: 'nocode:screenResourceApi:query',
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'nocode:screenResourceApi:update',
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
                auth: 'nocode:screenResourceApi:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <ScreenResourceApiModal @register="registerModal" @success="handleSuccess" />
    <ScreenResourceApiViewModal @register="registerViewModal" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { deleteScreenResourceApi, getScreenResourceApiList, ScreenResourceApi } from "@mfish/nocode";
  import { useModal } from "@mfish/core/components/Modal";
  import ScreenResourceApiModal from "./ScreenResourceApiModal.vue";
  import ScreenResourceApiViewModal from "./ScreenResourceApiViewModal.vue";
  import { columns, searchFormSchema } from "./screenResourceApi.data";
  import { ref } from "vue";
  import { Button as AButton } from "@mfish/core/components/Button";

  defineOptions({ name: "ScreenResourceApiManagement" });
  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const selectedRowKeys = ref<any[]>([]);
  const [registerTable, { reload }] = useTable({
    title: "大屏资源API列表",
    api: getScreenResourceApiList,
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
   * 查看
   * @param screenResourceApi 大屏资源API对象
   */
  function handleQuery(screenResourceApi: ScreenResourceApi) {
    openViewModal(true, { record: screenResourceApi });
  }

  /**
   * 修改
   * @param screenResourceApi 大屏资源API对象
   */
  function handleEdit(screenResourceApi: ScreenResourceApi) {
    openModal(true, {
      record: screenResourceApi,
      isUpdate: true
    });
  }

  /**
   * 删除
   * @param screenResourceApi 大屏资源API对象
   */
  function handleDelete(screenResourceApi: ScreenResourceApi) {
    if (screenResourceApi.id) {
      deleteScreenResourceApi(screenResourceApi.id).then(() => {
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
