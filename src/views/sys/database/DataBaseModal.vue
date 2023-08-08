<!--
 @description:数据源弹窗
 @author: mfish
 @date: 2023/4/12 10:41
-->
<template>
  <BasicModal v-bind="$attrs" title="数据源" @register="registerModal" :showOkBtn="false" cancelText="关闭">
    <DataBaseManagement>
      <template #[item]="data" v-for="item in Object.keys($slots)">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </DataBaseManagement>
  </BasicModal>
</template>
<script lang="ts">
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import DataBaseManagement from "/@/views/sys/database/index.vue";
  import { defineComponent, onMounted } from "vue";

  export default defineComponent({
    name: "DataBaseModal",
    components: { DataBaseManagement, BasicModal },
    setup() {
      const [registerModal, { setModalProps }] = useModalInner();
      onMounted(() => {
        setModalProps({ width: "1200px", height: 600, defaultFullscreen: true });
      });
      return {
        registerModal
      };
    }
  });
</script>
