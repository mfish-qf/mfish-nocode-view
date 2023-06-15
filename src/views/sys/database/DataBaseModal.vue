<!--
 @description:数据源弹窗
 @author: mfish
 @date: 2023/4/12 10:41
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" @ok="handleSubmit">
    <CodeBuild>
      <template #[item]="data" v-for="item in Object.keys($slots)">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </CodeBuild>
  </BasicModal>
</template>

<script lang="ts">
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import CodeBuild from "/@/views/sys/database/index.vue";

  export default {
    name: "DataBaseModal",
    components: { CodeBuild, BasicModal },
    setup() {
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        setModalProps({ confirmLoading: false, width: 1200, height: 600 });
      });
      return {
        registerModal
      };
    }
  };
</script>

<style scoped></style>