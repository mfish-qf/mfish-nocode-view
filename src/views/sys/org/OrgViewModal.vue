<!--
 @description: 组织结构表查看
 @author: mfish
 @date: 2024-08-29
 @version: V1.3.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="组织结构信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@/components/general/Modal";
  import { Description, useDescription } from "@/components/general/Description";
  import { ref } from "vue";
  import { OrgDesc } from "./org.data";

  defineOptions({ name: "OrgViewModal" });
  const orgData = ref();
  const orgDesc = new OrgDesc();
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
