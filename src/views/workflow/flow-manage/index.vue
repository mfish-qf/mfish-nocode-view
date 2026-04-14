<!--
 @description: 流程管理
 @author: mfish
 @date: 2026-03-30
 @version: V2.3.1
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <AButton
          type="primary"
          @click="handleCreate"
          v-auth="'workflow:flowManage:insert'"
          pre-icon="ant-design:plus-outlined"
        >
          新增流程
        </AButton>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: 'workflow:flowManage:query',
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'workflow:flowManage:update',
                tooltip: '修改'
              },
              {
                icon: 'ant-design:cloud-upload-outlined',
                auth: 'workflow:flowManage:update',
                color: 'warning',
                tooltip: '发布',
                ifShow: () => record.released !== 1,
                popConfirm: {
                  title: '是否确认发布',
                  placement: 'left',
                  confirm: handlePublish.bind(null, record)
                }
              },
              {
                icon: 'ant-design:rollback-outlined',
                auth: 'workflow:flowManage:update',
                color: 'error',
                tooltip: '撤回发布',
                ifShow: () => record.released === 1,
                popConfirm: {
                  title: '是否确认撤回发布',
                  placement: 'left',
                  confirm: handleUnpublish.bind(null, record)
                }
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: 'workflow:flowManage:delete',
                tooltip: '删除',
                ifShow: () => record.released !== 1
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <FlowConfig @register="registerModal" @success="handleSuccess" />
    <FlowManageViewModal @register="registerViewModal" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from "@mfish/core/components/Table";
  import { useModal } from "@mfish/core/components/Modal";
  import { Button as AButton } from "@mfish/core/components/Button";
  import {
    deleteFlowManage,
    getFlowManageList,
    publishFlowManage,
    unpublishFlowManage
  } from "@/api/workflow/FlowManage";
  import FlowManageViewModal from "./FlowManageViewModal.vue";
  import { columns, searchFormSchema } from "./flowManage.data";
  import { FlowManage } from "@/api/workflow/model/FlowManageModel";
  import { ref } from "vue";
  import FlowConfig from "@/views/workflow/flow-manage/FlowConfig.vue";

  defineOptions({ name: "FlowManageManagement" });
  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const selectedRowKeys = ref<any[]>([]);
  const [registerTable, { reload }] = useTable({
    title: "流程配置管理",
    api: getFlowManageList,
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
   * @param flowManage 流程管理对象
   */
  function handleQuery(flowManage: FlowManage) {
    openViewModal(true, { record: flowManage });
  }

  /**
   * 修改
   * @param flowManage 流程管理对象
   */
  function handleEdit(flowManage: FlowManage) {
    openModal(true, {
      record: flowManage,
      isUpdate: true
    });
  }

  /**
   * 删除
   * @param flowManage 流程管理对象
   */
  function handleDelete(flowManage: FlowManage) {
    if (flowManage.id) {
      deleteFlowManage(flowManage.id).then(() => {
        handleSuccess();
      });
    }
  }

  /**
   * 发布
   * @param flowManage 流程管理对象
   */
  function handlePublish(flowManage: FlowManage) {
    if (flowManage.id) {
      publishFlowManage(flowManage.id).then(() => {
        handleSuccess();
      });
    }
  }

  /**
   * 撤回发布
   * @param flowManage 流程管理对象
   */
  function handleUnpublish(flowManage: FlowManage) {
    if (flowManage.id) {
      unpublishFlowManage(flowManage.id).then(() => {
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
