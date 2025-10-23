<!--
 @description: 审批窗口
 @author: mfish
 @date: 2025/10/11
-->
<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="`${task?.processName}-审批`"
    :show-ok-btn="false"
    cancel-text="关闭"
  >
    <template #appendFooter v-if="task?.status === 'created'">
      <Popconfirm icon="" v-model:open="rejectOpen">
        <template #okButton>
          <AButton type="primary" size="small" @click="handleReject">确认</AButton>
        </template>
        <template #title>
          <div class="mr-2 flex gap-2">
            <span style="color: red">*</span>
            <Textarea
              auto-size="true"
              :status="rejectReason ? '' : 'error'"
              v-model:value="rejectReason"
              placeholder="请输入驳回原因"
            />
          </div>
        </template>
        <AButton color="error" :loading="rejectLoading" @click.stop.prevent>驳回</AButton>
      </Popconfirm>
      <Popconfirm icon="" v-model:open="approveOpen">
        <template #okButton>
          <AButton type="primary" size="small" @click="handleApprove">确认</AButton>
        </template>
        <template #title>
          <div class="mr-2">
            <Textarea auto-size="true" v-model:value="approveReason" placeholder="备注信息，非必填" />
          </div>
        </template>
        <AButton type="primary" :loading="approveLoading" @click.stop.prevent>通过</AButton>
      </Popconfirm>
    </template>
    <TaskStepView class="p-2" direction="horizontal" :process-instance-id="task?.processInstanceId" />
    <component :is="auditComponent?.component" class="pl-4 pr-4" :business-key="task?.businessKey" />
  </BasicModal>
</template>
<script setup lang="ts">
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import TaskStepView from "@/views/workflow/com/TaskStepView.vue";
  import { Popconfirm, Textarea } from "ant-design-vue";
  import { computed, ref } from "vue";
  import { MfTask } from "@/api/workflow/model/MfTaskModel";
  import { approveTask, rejectTask } from "@/api/workflow/FlowProcess";
  import { useWorkflow } from "@/views/workflow/com/UseWorkflow";

  const emit = defineEmits(["register", "success"]);
  const task = ref<MfTask>();
  const rejectLoading = ref(false);
  const rejectOpen = ref<boolean>(false);
  const rejectReason = ref("");
  const approveLoading = ref(false);
  const approveOpen = ref<boolean>(false);
  const approveReason = ref("");
  const { getAuditComponent } = useWorkflow();
  const auditComponent = computed(() => getAuditComponent(task.value?.processDefinitionKey));
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    task.value = data;
    setModalProps({ confirmLoading: false, width: `${auditComponent.value?.width || 800}px` });
  });
  function handleReject() {
    if (!rejectReason.value) {
      return;
    }
    rejectOpen.value = false;
    rejectLoading.value = true;
    rejectTask({ taskId: task.value?.id, message: rejectReason.value })
      .then(() => {
        closeModal();
        emit("success");
      })
      .finally(() => {
        rejectLoading.value = false;
      });
  }
  function handleApprove() {
    approveOpen.value = false;
    approveLoading.value = true;
    approveTask({ taskId: task.value?.id, message: approveReason.value })
      .then(() => {
        closeModal();
        emit("success");
      })
      .finally(() => {
        approveLoading.value = false;
      });
  }
</script>
<style scoped lang="less"></style>
