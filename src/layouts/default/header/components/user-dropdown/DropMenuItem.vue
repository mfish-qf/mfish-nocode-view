<template>
  <MenuItem :key="itemKey">
    <span class="flex items-center">
      <Icon :icon="icon" class="mr-1" />
      <span>{{ text }}</span>
    </span>
  </MenuItem>
</template>
<script lang="ts" setup>
  import { Menu } from "ant-design-vue";
  import { computed, getCurrentInstance } from "vue";
  import { Icon } from "@mfish/core/components/Icon";
  import { propTypes } from "@mfish/core/utils/PropTypes";

  defineOptions({ name: "DropdownMenuItem" });
  defineProps({
    text: propTypes.string,
    icon: propTypes.string
  });
  const MenuItem = Menu.Item;
  const instance = getCurrentInstance();
  const itemKey = computed(() => instance?.vnode?.props?.key);
</script>
