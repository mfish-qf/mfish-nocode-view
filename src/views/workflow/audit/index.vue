<!--
 @description: 审核管理
 @author: mfish
 @date: 2025/10/15
-->
<template>
  <PageWrapper>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:audit-outlined',
                onClick: handleAudit.bind(null, record),
                tooltip: '审核'
              },
              {
                icon: 'ant-design:close-circle-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认终止审核，终止后发起人需要重新发起审核，请谨慎操作！',
                  placement: 'left',
                  confirm: handleCancel.bind(null, record)
                },
                ifShow: userIsSuperAdmin,
                tooltip: '终止'
              },
              {
                icon: 'ant-design:apartment-outlined',
                onClick: handlePreviewFlow.bind(null, record),
                tooltip: '查看流程图'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AuditModal @register="registerModal" @success="handleSuccess" />
    <FlowImgPreview ref="flowImgPreviewRef" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { PageWrapper } from "@/components/general/Page";
  import { useModal } from "@mfish/core/components/Modal";
  import { columns, searchFormSchema } from "@/views/workflow/audit/audit.data";
  import { delProcess, getAllTasks } from "@/api/workflow/FlowProcess";
  import AuditModal from "@/views/workflow/com/AuditModal.vue";
  import { MfTask } from "@/api/workflow/model/MfTaskModel";
  import { usePermission } from "@mfish/core/hooks";
  import FlowImgPreview from "@/views/workflow/com/FlowImgPreview.vue";
  import { useTemplateRef } from "vue";

  defineOptions({ name: "AuditManagement" });
  const [registerTable, { reload }] = useTable({
    title: "审批列表",
    api: getAllTasks,
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
    actionColumn: {
      width: 80,
      title: "操作",
      dataIndex: "action"
    }
  });
  const [registerModal, { openModal }] = useModal();
  const { userIsSuperAdmin } = usePermission();
  const flowImgPreviewRef = useTemplateRef<typeof FlowImgPreview>("flowImgPreviewRef");
  function handleSuccess() {
    reload();
  }

  function handleAudit(item: MfTask) {
    openModal(true, item);
  }
  function handleCancel(item: MfTask) {
    delProcess(item.processInstanceId, "终止审核").then(() => {
      handleSuccess();
    });
  }
  function handlePreviewFlow(record: MfTask) {
    flowImgPreviewRef.value?.showPreview(record?.processInstanceId);
  }
</script>
