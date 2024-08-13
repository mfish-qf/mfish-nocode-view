<template>
  <Tooltip placement="top">
    <template #title>
      <span>{{ t("component.table.settingDens") }}</span>
    </template>

    <Dropdown placement="bottom" :trigger="['click']" :get-popup-container="getPopupContainer">
      <ColumnHeightOutlined />
      <template #overlay>
        <AMenu @click="handleTitleClick" selectable v-model:selectedKeys="selectedKeysRef">
          <MenuItem key="default">
            <span>{{ t("component.table.settingDensDefault") }}</span>
          </MenuItem>
          <MenuItem key="middle">
            <span>{{ t("component.table.settingDensMiddle") }}</span>
          </MenuItem>
          <MenuItem key="small">
            <span>{{ t("component.table.settingDensSmall") }}</span>
          </MenuItem>
        </AMenu>
      </template>
    </Dropdown>
  </Tooltip>
</template>
<script lang="ts">
  import type { SizeType } from "../../types/Table";
  import { defineComponent, ref } from "vue";
  import { Tooltip, Dropdown, Menu } from "ant-design-vue";
  import { ColumnHeightOutlined } from "@ant-design/icons-vue";
  import { useI18n } from "@/hooks/web/UseI18n";
  import { useTableContext } from "../../hooks/UseTableContext";
  import { getPopupContainer } from "@/utils";

  export default defineComponent({
    name: "SizeSetting",
    components: {
      ColumnHeightOutlined,
      Tooltip,
      Dropdown,
      AMenu: Menu,
      MenuItem: Menu.Item
    },
    setup() {
      const table = useTableContext();
      const { t } = useI18n();

      const selectedKeysRef = ref<SizeType[]>([table.getSize()]);

      function handleTitleClick({ key }) {
        selectedKeysRef.value = [key];
        table.setProps({
          size: key
        });
      }

      return {
        handleTitleClick,
        selectedKeysRef,
        getPopupContainer,
        t
      };
    }
  });
</script>
