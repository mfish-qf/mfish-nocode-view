<!--
 @description: 菜单查看
 @author: mfish
 @date: 2024/8/29
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="菜单信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script setup lang="ts">
  import { Description, useDescription } from "@mfish/core/src/components/Description";
  import { useModalInner, BasicModal } from "@mfish/core/src/components/Modal";
  import { ref } from "vue";
  import { MenuDesc } from "@/views/sys/menu/menu.data";

  const menuData = ref();
  const menuDesc = new MenuDesc();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    menuData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: menuData,
    schema: menuDesc.viewSchema,
    column: 2
  });
</script>
