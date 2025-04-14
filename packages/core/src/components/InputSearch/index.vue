<!--
 @description: 搜索输入框
 @author: mfish
 @date: 2025/3/13
-->
<template>
  <AInput v-bind="$attrs" @press-enter="onSearch" @change="valueChange">
    <template #suffix v-if="enterButton">
      <SearchOutlined :class="`${prefixCls}_button`" @click="onSearch" />
    </template>
  </AInput>
</template>
<script setup lang="ts">
  import { SearchOutlined } from "@ant-design/icons-vue";
  import { ref } from "vue";
  import { useDesign } from "../../index";
  import { Input as AInput } from "ant-design-vue";

  defineOptions({ name: "InputSearch" });
  defineProps({
    enterButton: {
      type: Boolean,
      default: true
    }
  });
  const emit = defineEmits(["search"]);
  const searchValue = ref<string>("");
  const { prefixCls } = useDesign("search-input");

  function valueChange(val: any) {
    searchValue.value = val.target.value;
    if (searchValue.value === "") {
      emit("search", "");
    }
  }
  function onSearch() {
    emit("search", searchValue.value);
  }
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-search-input";
  [data-theme="dark"] {
    .@{prefix-cls}_button {
      color: @screen-item-normal-color;
    }
  }
  .@{prefix-cls}_button {
    cursor: pointer;
    color: @screen-item-normal-color-light;
    &:hover {
      color: @main-color;
    }
  }
</style>
