<!--
 @description:数据源弹窗
 @author: mfish
 @date: 2023/4/12 10:41
-->
<template>
  <BasicModal v-bind="$attrs" title="数据源" @register="registerModal" :showOkBtn="false" cancelText="关闭">
    <PageWrapper contentFullHeight fixedHeight contentClass="flex">
      <DataBaseManagement>
        <template #[item]="data" v-for="item in Object.keys($slots)">
          <slot :name="item" v-bind="data || {}"></slot>
        </template>
      </DataBaseManagement>
    </PageWrapper>
  </BasicModal>
</template>
<script lang="ts">
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { defineComponent, onMounted } from "vue";
  import DataBaseManagement from "/@/views/sys/database/DataBaseManagement.vue";
  import PageWrapper from "/@/components/general/Page/src/PageWrapper.vue";

  export default defineComponent({
    name: "DataBaseModal",
    components: { PageWrapper, DataBaseManagement, BasicModal },
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
