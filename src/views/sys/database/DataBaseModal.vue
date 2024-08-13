<!--
 @description:数据源弹窗
 @author: mfish
 @date: 2023/4/12 10:41
-->
<template>
  <BasicModal v-bind="$attrs" title="数据源" @register="registerModal" :show-ok-btn="false" cancel-text="关闭">
    <DataBaseManagement :resize-height-offset="52">
      <template #[item]="data" v-for="item in Object.keys($slots)">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </DataBaseManagement>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@/components/general/Modal";
  import { onMounted } from "vue";
  import DataBaseManagement from "@/views/sys/database/DataBaseManagement.vue";
  const [registerModal, { setModalProps }] = useModalInner();
  onMounted(() => {
    setModalProps({ width: "1200px", height: 600, defaultFullscreen: true });
  });
</script>
