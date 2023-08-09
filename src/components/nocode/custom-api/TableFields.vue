<!--
 @description: 主表字段
 @author: mfish
 @date: 2023/8/7
-->
<template>
  <AInputGroup :class="prefixCls" compact>
    <AInput />
    <ADropdown trigger="click">
      <template #overlay>
        <AMenu>
          <div class="check-wrapper">
            <ACheckbox :defaultChecked="allCheck" @change="checkAll">全选</ACheckbox>
          </div>
          <a-divider style="margin: 4px 0" />
          <ScrollContainer class="check-container">
            <template v-for="item in fields" :key="item.name + item.checked">
              <div class="check-wrapper">
                <ACheckbox :checked="item.checked" :id="item.name" @change="checkChange">{{ item.name }}</ACheckbox>
              </div>
            </template>
          </ScrollContainer>
        </AMenu>
      </template>
      <AButton>
        字段
        <Icon icon="ant-design:caret-down-outlined" />
      </AButton>
    </ADropdown>
  </AInputGroup>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import {
    Input,
    Divider as ADivider,
    Checkbox as ACheckbox,
    Dropdown as ADropdown,
    Button as AButton,
    Menu as AMenu
  } from "ant-design-vue";
  import Icon from "/@/components/general/Icon/src/Icon.vue";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import ScrollContainer from "/@/components/general/Container/src/ScrollContainer.vue";
  const AInput = Input;
  const AInputGroup = Input.Group;
  const fields = ref([
    { name: "AAA", checked: true },
    { name: "BBB", checked: true },
    { name: "CCC", checked: true },
    { name: "DDD", checked: true },
    { name: "EEE", checked: true },
    { name: "EEE", checked: true },
    { name: "EEE", checked: true },
    { name: "EEE", checked: true },
    { name: "EEE", checked: true },
    { name: "EEE", checked: true },
    { name: "EEE", checked: true },
    { name: "EEE", checked: true },
    { name: "EEE", checked: true },
    { name: "EEE", checked: true },
    { name: "EEE", checked: true }
  ]);
  const allCheck = ref(true);
  const { prefixCls } = useDesign("table-fields");
  const checkAll = (e) => {
    allCheck.value = e.target.checked;
    fields.value.forEach((item) => (item.checked = allCheck.value));
  };
  const checkChange = (e) => {
    const field = fields.value.find((item) => item.name === e.target.id);
    if (field) {
      field.checked = !field.checked;
    }
  };
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-table-fields";
  .@{prefix-cls}{
    display: flex;
    .ant-btn {
      height: auto !important;
    }
  }
  .check-container{
    height: 300px;
  }
  .check-wrapper{
    padding: 4px 8px
  }
</style>
