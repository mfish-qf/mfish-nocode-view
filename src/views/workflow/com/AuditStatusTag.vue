<!--
 @description: 审批状态标签
 @author: mfish
 @date: 2025/10/15
-->
<template>
  <Popover :overlay-style="{ minWidth: '280px' }">
    <template #content>
      <TaskStepView :key="taskStepKey" direction="vertical" :status="status" :process-instance-id="processInstanceId" />
    </template>
    <DictTag code="workflow_task_status" :value="status" />
  </Popover>
</template>
<script setup lang="ts">
  import { DictTag } from "@mfish/core/components/DictTag";
  import TaskStepView from "@/views/workflow/com/TaskStepView.vue";
  import { Popover } from "ant-design-vue";
  import { ref } from "vue";
  defineProps({
    processInstanceId: {
      type: String
    },
    status: {
      type: String
    }
  });
  const taskStepKey = ref(0);
  const refresh = () => {
    taskStepKey.value++;
  };
  defineExpose({
    refresh
  });
</script>
<style scoped lang="less"></style>
