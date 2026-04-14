<!--
 @description: 流程管理查看
 @author: mfish
 @date: 2026-03-30
 @version: V2.3.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="流程管理信息">
    <Description @register="registerDesc" />
    <FlowPreview style="height: 500px" :nodes="nodes" :edges="edges" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { ref } from "vue";
  import { FlowManageDesc } from "./flowManage.data";
  import { FlowPreview } from "@mfish/workflow";

  defineOptions({ name: "FlowManageViewModal" });
  const flowManageData = ref();
  const flowManageDesc = new FlowManageDesc();
  const nodes = ref([]);
  const edges = ref([]);
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "1200px",
      cancelText: "关闭",
      showOkBtn: false
    });
    flowManageData.value = data.record;
    if (data.record?.flowConfig) {
      const flowConfig = JSON.parse(data.record.flowConfig);
      nodes.value = flowConfig.nodes;
      edges.value = flowConfig.edges;
      // 设置节点激活状态
      if (data.record.activeDefinitionKeys?.length > 0) {
        const activeDefinitionKeys = new Set(data.record.activeDefinitionKeys);
        nodes.value.forEach((node: any) => {
          node.data.active = activeDefinitionKeys.has(node.id);
        });
      }
    }
  });
  const [registerDesc] = useDescription({
    data: flowManageData,
    schema: flowManageDesc.viewSchema,
    column: 2
  });
</script>
