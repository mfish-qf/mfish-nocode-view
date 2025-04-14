<!--
 @description: 用户表查看
 @author: mfish
 @date: 2024-08-29
 @version: V2.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="用户信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/src/components/Modal";
  import { Description, useDescription } from "@mfish/core/src/components/Description";
  import { ref } from "vue";
  import { AccountDesc } from "./account.data";

  defineOptions({ name: "AccountViewModal" });
  const props = defineProps({
    source: {
      type: Number,
      default: 0
    }
  });
  const accountData = ref();
  const accountDesc = new AccountDesc(props.source);
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    accountData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: accountData,
    schema: accountDesc.viewSchema,
    column: 2
  });
</script>
