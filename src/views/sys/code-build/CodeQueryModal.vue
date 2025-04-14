<!--
 @description:代码查看
 @author: mfish
 @date: 2023/4/13 20:29
-->
<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    title="代码查看"
    :show-ok-btn="false"
    cancel-text="关闭"
    @height-change="heightChange"
  >
    <ATabs>
      <ATabPane v-for="(item, index) in codeList" :key="index">
        <template #tab>
          <span>
            {{ item.name }}
          </span>
        </template>
        <CodeEditor
          :style="{ height: `${editHeight}px` }"
          v-model:value="item.code"
          :mode="MODE.JSON"
          :readonly="true"
        />
      </ATabPane>
    </ATabs>
  </BasicModal>
</template>

<script lang="ts" setup>
  import { toRaw, ref } from "vue";
  import { BasicModal, useModalInner } from "@mfish/core/src/components/Modal";
  import { Tabs as ATabs } from "ant-design-vue";
  import { viewCode } from "@/api/sys/CodeBuild";
  import { CodeVo } from "@/api/sys/model/CodeBuildModel";
  import { CodeEditor, MODE } from "@mfish/core/src/components/CodeEditor";
  defineOptions({ name: "CodeQueryModal" });
  const ATabPane = ATabs.TabPane;
  const codeList = ref<CodeVo[]>([]);
  const editHeight = ref(500);
  const [registerModal, { setModalProps, changeLoading }] = useModalInner(async (data) => {
    codeList.value = [];

    setModalProps({ width: "1200px", height: 600, defaultFullscreen: true });
    changeLoading(true);
    viewCode(toRaw(data))
      .then((res) => {
        codeList.value = res;
      })
      .finally(() => changeLoading(false));
  });

  function heightChange(height) {
    editHeight.value = height - 80;
  }
</script>
