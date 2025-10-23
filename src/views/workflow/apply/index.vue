<!--
 @description: 我的申请
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
                icon: record.status === 'created' ? 'ant-design:audit-outlined' : 'ant-design:file-search-outlined',
                onClick: handleAudit.bind(null, record),
                tooltip: record.status === 'created' ? '审批' : '查看'
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
    <FlowImgPreview ref="flowImgPreviewRef" />
    <AuditModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { PageWrapper } from "@/components/general/Page";
  import { columns, searchFormSchema } from "@/views/workflow/apply/apply.data";
  import { useModal } from "@mfish/core/components/Modal";
  import { getApplyTasks } from "@/api/workflow/FlowProcess";
  import { MfTask } from "@/api/workflow/model/MfTaskModel";
  import { useTemplateRef } from "vue";
  import FlowImgPreview from "@/views/workflow/com/FlowImgPreview.vue";
  import AuditModal from "@/views/workflow/com/AuditModal.vue";

  defineOptions({ name: "AuditManagement" });
  const [registerTable, { reload }] = useTable({
    title: "审批列表",
    api: getApplyTasks,
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
  const flowImgPreviewRef = useTemplateRef<typeof FlowImgPreview>("flowImgPreviewRef");
  function handlePreviewFlow(record: MfTask) {
    flowImgPreviewRef.value?.showPreview(record?.processInstanceId);
  }
  function handleAudit(item: MfTask) {
    openModal(true, item);
  }
  function handleSuccess() {
    reload();
  }
</script>
