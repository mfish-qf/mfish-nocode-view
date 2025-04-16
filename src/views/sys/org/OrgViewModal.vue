<!--
 @description: 组织结构表查看
 @author: mfish
 @date: 2024-08-29
 @version: V2.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="组织结构信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { ref } from "vue";
  import { OrgDesc } from "./org.data";

  defineOptions({ name: "OrgViewModal" });
  const props = defineProps({
    source: {
      type: Number,
      default: 0
    }
  });
  const orgData = ref();
  const orgDesc = new OrgDesc(props.source);
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    orgData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: orgData,
    schema: orgDesc.viewSchema,
    column: 2
  });
</script>
