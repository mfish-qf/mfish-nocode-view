<!--
 @description: 请假申请审批Demo
 @author: mfish
 @date: 2026-04-20
 @version: V2.3.1
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <AButton type="primary" @click="handleCreate">新增</AButton>
        <AButton color="warning" @click="handleExport">导出</AButton>
        <AButton color="error" @click="handleBatchDelete">批量删除</AButton>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                tooltip: '修改'
              },
              ...(record.auditState === -1
                ? [
                    {
                      icon: 'ant-design:upload-outlined',
                      onClick: handleSubmitApproval.bind(null, record),
                      tooltip: '提交审批'
                    }
                  ]
                : record.auditState === 0
                  ? [
                      {
                        icon: 'ant-design:rollback-outlined',
                        onClick: handleRecallApproval.bind(null, record),
                        color: 'warning',
                        tooltip: '撤回审批'
                      }
                    ]
                  : []),
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                tooltip: '删除'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DemoLeaveApplyModal @register="registerModal" @success="handleSuccess" />
    <DemoLeaveApplyViewModal @register="registerViewModal" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from "@mfish/core/components/Table";
  import { useModal } from "@mfish/core/components/Modal";
  import { Button as AButton } from "@mfish/core/components/Button";
  import {
    deleteBatchDemoLeaveApply,
    deleteDemoLeaveApply,
    exportDemoLeaveApply,
    getDemoLeaveApplyList,
    submitDemoLeaveApply,
    revokeDemoLeaveApply
  } from "@/api/demo/DemoLeaveApply";
  import DemoLeaveApplyModal from "./DemoLeaveApplyModal.vue";
  import DemoLeaveApplyViewModal from "./DemoLeaveApplyViewModal.vue";
  import { columns, searchFormSchema } from "./demoLeaveApply.data";
  import { DemoLeaveApply } from "@/api/demo/model/DemoLeaveApplyModel";
  import { ref } from "vue";
  import { useMessage } from "@mfish/core/hooks";
  defineOptions({ name: "DemoLeaveApplyManagement" });
  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const selectedRowKeys = ref<any[]>([]);
  const [registerTable, { reload, getForm }] = useTable({
    title: "请假申请审批Demo列表",
    api: getDemoLeaveApplyList,
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
      width: 180,
      title: "操作",
      dataIndex: "action"
    }
  });
  const { createMessage } = useMessage();
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
    exportDemoLeaveApply({ ...getForm().getFieldsValue(), pageNum: 1, pageSize: 1000 });
  }

  /**
   * 查看
   * @param demoLeaveApply 请假申请审批Demo对象
   */
  function handleQuery(demoLeaveApply: DemoLeaveApply) {
    openViewModal(true, { record: demoLeaveApply });
  }

  /**
   * 修改
   * @param demoLeaveApply 请假申请审批Demo对象
   */
  function handleEdit(demoLeaveApply: DemoLeaveApply) {
    openModal(true, {
      record: demoLeaveApply,
      isUpdate: true
    });
  }

  /**
   * 删除
   * @param demoLeaveApply 请假申请审批Demo对象
   */
  function handleDelete(demoLeaveApply: DemoLeaveApply) {
    if (demoLeaveApply.id) {
      deleteDemoLeaveApply(demoLeaveApply.id).then(() => {
        handleSuccess();
      });
    }
  }

  /**
   * 批量删除
   */
  function handleBatchDelete() {
    if (selectedRowKeys.value.length > 0) {
      deleteBatchDemoLeaveApply(selectedRowKeys.value.join(",")).then(() => {
        handleSuccess();
      });
    } else {
      createMessage.warning("请勾选要删除的数据");
    }
  }

  /**
   * 提交审批
   * @param demoLeaveApply 请假申请审批Demo对象
   */
  function handleSubmitApproval(demoLeaveApply: DemoLeaveApply) {
    if (demoLeaveApply.id) {
      submitDemoLeaveApply(demoLeaveApply.id).then(() => {
        handleSuccess();
      });
    }
  }

  /**
   * 撤回审批
   * @param demoLeaveApply 请假申请审批Demo对象
   */
  function handleRecallApproval(demoLeaveApply: DemoLeaveApply) {
    if (demoLeaveApply.id) {
      revokeDemoLeaveApply(demoLeaveApply.id).then(() => {
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
