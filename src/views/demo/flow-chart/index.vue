<template>
  <PageWrapper title="流程图" content="简单流程图示例,具体功能需要自己完善" content-full-height fixed-height>
    <FlowChart :data="demoData" />
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { FlowChart } from "@/components/general/FlowChart";
  import { PageWrapper } from "@/components/general/Page";

  import demoData from "./dataTurbo.json";
</script>
