<!--
 @description: 请假申请审批
 @author: mfish
 @date: 2025-10-20
 @version: V2.4.0
-->
<template>
  <Description v-show="demoLeaveApplyData" style="min-height: 350px" @register="registerDesc" />
</template>
<script lang="ts" setup>
  import { ref, watch } from "vue";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { DemoLeaveApplyDesc } from "@/views/demo/demo-leave-apply/demoLeaveApply.data.ts";
  import { getDemoLeaveApplyById } from "@/api/demo/DemoLeaveApply.ts";
  const props = defineProps({
    businessKey: {
      type: String,
      default: ""
    }
  });
  const demoLeaveApplyData = ref();
  const demoLeaveApplyDesc = new DemoLeaveApplyDesc();

  const [registerDesc] = useDescription({
    data: demoLeaveApplyData,
    schema: demoLeaveApplyDesc.viewSchema,
    column: 2
  });
  watch(
    () => props.businessKey,
    async (id) => {
      if (id) {
        demoLeaveApplyData.value = await getDemoLeaveApplyById(id);
      }
    },
    { immediate: true }
  );
</script>
