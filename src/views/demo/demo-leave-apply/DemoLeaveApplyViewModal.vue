<!--
 @description: 请假申请审批Demo查看
 @author: mfish
 @date: 2026-04-20
 @version: V2.3.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="请假申请审批Demo信息">
    <TaskStepView class="p-2" direction="horizontal" :business-key="record?.id" />
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { ref } from "vue";
  import { DemoLeaveApplyDesc } from "./demoLeaveApply.data";
  import TaskStepView from "@/views/workflow/com/TaskStepView.vue";

  defineOptions({ name: "DemoLeaveApplyViewModal" });
  const demoLeaveApplyData = ref();
  const demoLeaveApplyDesc = new DemoLeaveApplyDesc();
  const record = ref({});
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    record.value = data.record;
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    demoLeaveApplyData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: demoLeaveApplyData,
    schema: demoLeaveApplyDesc.viewSchema,
    column: 2
  });
</script>
