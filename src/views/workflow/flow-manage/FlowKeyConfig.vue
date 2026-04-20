<!--
 @description: 工作流Key配置
 @author: mfish
 @date: 2026/4/8
-->
<template>
  <ASelect v-model:value="selectValue" @change="selectChange" :disabled="disabled">
    <template #dropdownRender="{ menuNode }">
      <VNodes :vnodes="menuNode" />
      <div v-auth="'sys:dict:insert'">
        <ADivider style="margin: 4px 0" />
        <div style="padding: 4px 8px; cursor: pointer" @mousedown="addFlowKey">
          <Icon icon="ant-design:plus-outlined" :color="themeColor" />
          <span :style="`color:${themeColor};margin-left:6px`">添加工作流Key</span>
        </div>
      </div>
    </template>
    <ASelectOption :label="item.dictLabel" :value="item.dictValue" v-for="(item, index) in keys" :key="index">
      <div :class="`${prefixCls}-select-option`">
        <div>
          {{ item.dictValue }}
        </div>
        <div>
          {{ item.dictLabel }}
        </div>
        <div>
          {{ item.remark }}
        </div>
        <div v-if="!disabled">
          <Icon
            icon="ant-design:edit-outlined"
            v-auth="'sys:dict:update'"
            :color="themeColor"
            @click.stop="updateFlowKey(item)"
          />
          <ADivider type="vertical" />
          <Icon
            icon="ant-design:delete-outlined"
            v-auth="'sys:dict:delete'"
            :color="themeColor"
            @click.stop="deleteFlowKey(item)"
          />
        </div>
      </div>
    </ASelectOption>
  </ASelect>
  <DictItemModal @register="registerModal" @success="initFlowKeys" />
</template>
<script setup lang="ts">
  import { Divider as ADivider, Select as ASelect } from "ant-design-vue";
  import { Icon } from "@mfish/core/components/Icon";
  import { useModal } from "@mfish/core/components/Modal";
  import { onMounted, ref, watch } from "vue";
  import { useDesign, useRootSetting } from "@mfish/core/hooks";
  import DictItemModal from "@/views/sys/dict-item/DictItemModal.vue";
  import { deleteDictItem, DictItem, getDictItems } from "@mfish/core/api";

  const props = defineProps({
    value: { type: String },
    disabled: { type: Boolean, default: false }
  });

  const emit = defineEmits(["flowKeyChange"]);
  const ASelectOption = ASelect.Option;
  const themeColor = useRootSetting().getThemeColor;
  const { prefixCls } = useDesign("flow-key-config");
  const [registerModal, { openModal }] = useModal();
  const keys = ref<DictItem[]>([]);
  const selectValue = ref();
  watch(
    () => props.value,
    (val) => {
      selectValue.value = val;
    },
    { immediate: true }
  );
  const VNodes = (_: any, { attrs }: any) => {
    return attrs.vnodes;
  };

  onMounted(() => {
    initFlowKeys();
  });
  function addFlowKey() {
    openModal(true, {
      record: { dictCode: "workflow_process_key" },
      isUpdate: false
    });
  }

  async function initFlowKeys() {
    keys.value = await getDictItems("workflow_process_key");
  }

  function updateFlowKey(item: DictItem) {
    openModal(true, {
      record: item,
      isUpdate: true
    });
  }

  function deleteFlowKey(item: DictItem) {
    deleteDictItem(item?.id).then(() => {
      initFlowKeys();
    });
  }

  function selectChange(_: any, value: any) {
    emit("flowKeyChange", keys?.value[value.key]);
  }
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-flow-key-config";
  .@{prefix-cls}-select-option {
    display: flex;
    align-items: center;
    > div {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 4px 0 4px;
    }
    > div:last-child {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
