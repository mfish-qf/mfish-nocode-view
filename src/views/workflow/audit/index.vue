<!--
 @description: 审批管理
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
                icon: 'ant-design:close-circle-outlined',
                color: 'error',
                popConfirm: {
                  title: h('div', { style: 'display: flex;flex-direction: column;' }, [
                    h('span', '是否确认终止审批？'),
                    h('span', '终止后发起人需要重新发起审批，请谨慎操作！')
                  ]),
                  description: h(Input, {
                    status: 'warning',
                    placeholder: '请输入终止审批原因',
                    onChange: (e) => reasonChange(e)
                  }),
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
              },
              {
                icon: 'ant-design:fork-outlined',
                onClick: handleQuery.bind(null, record),
                color: 'success',
                tooltip: '查看流程配置'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AuditModal @register="registerModal" @success="handleSuccess" />
    <FlowImgPreview ref="flowImgPreviewRef" />
    <FlowManageViewModal @register="registerViewModal" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { PageWrapper } from "@/components/general/Page";
  import { useModal } from "@mfish/core/components/Modal";
  import { columns, searchFormSchema } from "@/views/workflow/audit/audit.data";
  import { delProcess, getActiveDefinitionKeys, getAllTasks, queryFlowManage } from "@mfish/workflow";
  import AuditModal from "@/views/workflow/com/AuditModal.vue";
  import { MfTask } from "@/api/workflow/model/MfTaskModel";
  import { usePermission } from "@mfish/core/hooks";
  import FlowImgPreview from "@/views/workflow/com/FlowImgPreview.vue";
  import { h, ref, useTemplateRef } from "vue";
  import { Input } from "ant-design-vue";
  import FlowManageViewModal from "@/views/workflow/flow-manage/FlowManageViewModal.vue";

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
      width: 120,
      title: "操作",
      dataIndex: "action"
    }
  });
  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const { userIsSuperAdmin } = usePermission();
  const flowImgPreviewRef = useTemplateRef<typeof FlowImgPreview>("flowImgPreviewRef");
  const cancelReason = ref<string>("");
  function handleSuccess() {
    reload();
  }

  function handleAudit(item: MfTask) {
    openModal(true, item);
  }
  function reasonChange(e: any) {
    cancelReason.value = e.target.value;
  }

  function handleCancel(item: MfTask) {
    if (!cancelReason.value) {
      return;
    }
    delProcess(item.processInstanceId, cancelReason.value).then(() => {
      handleSuccess();
    });
  }
  function handlePreviewFlow(record: MfTask) {
    flowImgPreviewRef.value?.showPreview(record?.processInstanceId);
  }
  /**
   * 查看
   * @param item 任务对象
   */
  async function handleQuery(item: MfTask) {
    const [activeDefinitionKeys, flowManage] = await Promise.all([
      getActiveDefinitionKeys(item.processInstanceId),
      queryFlowManage(item.processInstanceId)
    ]);
    openViewModal(true, { record: { ...flowManage, activeDefinitionKeys } });
  }
</script>
