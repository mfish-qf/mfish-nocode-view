<!--
 @description: 返回结果设置
 @author: mfish
 @date: 2025/7/28
-->
<template>
  <div :class="prefixCls">
    <div class="input-item">
      <span class="input-item-label">数据字段</span>
      <AInput
        placeholder="返回结果中数据对应的字段，如果为空，默认会取整个返回结果"
        v-model:value="responseData.data"
      />
    </div>
    <ConfigGroup
      style="padding: 8px"
      title="分页参数映射"
      :allow-check="true"
      :title-check="responseData.page.checked"
      @checked="pageCheckChange"
    >
      <div class="input-item">
        <span class="input-item-label">当前页</span>
        <AInput placeholder="返回结果中当前页对应的字段，默认为空" v-model:value="responseData.page.pageNum" />
      </div>
      <div class="input-item">
        <span class="input-item-label">每页条数</span>
        <AInput placeholder="返回结果中每页条数对应的字段，默认为空" v-model:value="responseData.page.pageSize" />
      </div>
      <div class="input-item">
        <span class="input-item-label">总页数</span>
        <AInput placeholder="返回结果中总页数对应的字段，默认为空" v-model:value="responseData.page.pages" />
      </div>
      <div class="input-item">
        <span class="input-item-label">总条数</span>
        <AInput placeholder="返回结果中总条数对应的字段，默认为空" v-model:value="responseData.page.total" />
      </div>
    </ConfigGroup>
  </div>
</template>
<script setup lang="ts">
  import { useDesign } from "@mfish/core/hooks";
  import { ConfigGroup } from "@mfish/nocode";
  import { reactive, watch } from "vue";
  import { cloneDeep } from "lodash-es";

  const props = defineProps({
    responseMap: {
      type: String
    }
  });
  const emit = defineEmits(["pageCheckChange"]);

  const { prefixCls } = useDesign("response-config");
  const responseData = reactive({
    data: "",
    page: {
      checked: false,
      pageNum: "",
      pageSize: "",
      pages: "",
      total: ""
    }
  });

  watch(
    () => props.responseMap,
    (newVal) => {
      if (newVal) {
        const data = JSON.parse(newVal);
        responseData.data = data.data;
        responseData.page = data.page;
      } else {
        responseData.data = "";
        responseData.page = {
          checked: false,
          pageNum: "",
          pageSize: "",
          pages: "",
          total: ""
        };
      }
    },
    {
      immediate: true
    }
  );
  function pageCheckChange(check: boolean) {
    responseData.page.checked = check;
    emit("pageCheckChange", check);
  }

  function getValue() {
    return cloneDeep(responseData);
  }
  defineExpose({ getValue, pageCheckChange });
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-response-config";

  .@{prefix-cls} {
    display: flex;
    flex-direction: column;
    gap: 4px;
    .input-item {
      display: flex;
      align-items: center;
      &-label {
        width: 100px;
        margin-left: 8px;
        font-weight: 700;
      }
    }
  }
</style>
