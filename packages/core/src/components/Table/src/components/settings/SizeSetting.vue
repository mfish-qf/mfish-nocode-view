<template>
  <Tooltip placement="top">
    <template #title>
      <span>{{ t("component.table.settingDens") }}</span>
    </template>

    <Dropdown placement="bottom" :trigger="['click']" :get-popup-container="getPopupContainer">
      <ColumnHeightOutlined />
      <template #overlay>
        <Menu @click="handleTitleClick" selectable v-model:selected-keys="selectedKeysRef">
          <Menu.Item key="default">
            <span>{{ t("component.table.settingDensDefault") }}</span>
          </Menu.Item>
          <Menu.Item key="middle">
            <span>{{ t("component.table.settingDensMiddle") }}</span>
          </Menu.Item>
          <Menu.Item key="small">
            <span>{{ t("component.table.settingDensSmall") }}</span>
          </Menu.Item>
        </Menu>
      </template>
    </Dropdown>
  </Tooltip>
</template>
<script lang="ts" setup>
  import type { SizeType } from "../../types/Table";
  import { onMounted, ref } from "vue";
  import { Dropdown, Menu, type MenuProps, Tooltip } from "ant-design-vue";
  import { ColumnHeightOutlined } from "@ant-design/icons-vue";
  import { useI18n } from "@core/hooks";
  import { useTableContext } from "../../hooks/UseTableContext";
  import { getPopupContainer } from "@core/utils";
  import { useTableSettingStore } from "@mfish/stores/modules";

  defineOptions({ name: "SizeSetting" });
  const tableSettingStore = useTableSettingStore();
  const table = useTableContext();
  const { t } = useI18n();
  const selectedKeysRef = ref<SizeType[]>([tableSettingStore.getTableSize]);
  const handleTitleClick: MenuProps["onClick"] = ({ key }) => {
    selectedKeysRef.value = [key as SizeType];
    tableSettingStore.setTableSize(key as SizeType);
    table.setProps({
      size: key as SizeType
    });
  };
  onMounted(() => {
    selectedKeysRef.value = [table.getSize()];
    table.setProps({
      size: selectedKeysRef.value[0]
    });
  });
</script>
