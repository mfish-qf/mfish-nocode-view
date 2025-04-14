<!--
 @description: 数据源
 @author: mfish
 @date: 2023/12/11
-->
<template>
  <BasicModal v-bind="$attrs" title="数据来源" @register="registerModal" :show-ok-btn="false" cancel-text="关闭">
    <ATabs :class="prefixCls" v-model:active-key="activeKey">
      <ATabPane key="1">
        <template #tab>
          <div :class="`${prefixCls}-tab`"><DatabaseOutlined />数据库</div>
        </template>
        <DataBaseManagement :resize-height-offset="52">
          <template #[item]="data" v-for="item in Object.keys($slots)">
            <slot :name="item" v-bind="data || {}"></slot>
          </template>
        </DataBaseManagement>
      </ATabPane>
      <ATabPane key="2">
        <template #tab>
          <div :class="`${prefixCls}-tab`"><FileExcelOutlined />文件</div>
        </template>
        <FileFolderManagement @api-create="apiCreate" />
      </ATabPane>
    </ATabs>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { DatabaseOutlined, FileExcelOutlined } from "@ant-design/icons-vue";
  import { onMounted, ref } from "vue";
  import { Tabs as ATabs, TabPane as ATabPane } from "ant-design-vue";
  import { BasicModal, useModalInner } from "@mfish/core/src/components/Modal";
  import DataBaseManagement from "@/views/sys/database/DataBaseManagement.vue";
  import { useDesign } from "@mfish/core";
  import FileFolderManagement from "@/views/nocode/file-folder/index.vue";
  const emit = defineEmits(["register", "apiCreate"]);
  const activeKey = ref("1");
  const [registerModal, { setModalProps }] = useModalInner();

  const { prefixCls } = useDesign("api-data-source");
  onMounted(() => {
    setModalProps({
      width: "1200px",
      height: 600,
      defaultFullscreen: true
    });
  });
  function apiCreate(data) {
    emit("apiCreate", data);
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-api-data-source";
  .@{prefix-cls}-tab {
    display: flex;
    align-items: center;
    border-radius: 6px;
  }
  .@{prefix-cls} {
    height: 100%;
    .ant-tabs-content {
      height: 100%;
      top: -10px;
    }
  }
</style>
