<!--
 @description: 客户端信息查看
 @author: mfish
 @date: 2024-08-30
 @version: V2.0.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="客户端信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { ref } from "vue";
  import { SsoClientDetailsDesc } from "./ssoClientDetails.data";

  defineOptions({ name: "SsoClientDetailsViewModal" });
  const ssoClientDetailsData = ref();
  const ssoClientDetailsDesc = new SsoClientDetailsDesc();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    ssoClientDetailsData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: ssoClientDetailsData,
    schema: ssoClientDetailsDesc.viewSchema,
    column: 2
  });
</script>
