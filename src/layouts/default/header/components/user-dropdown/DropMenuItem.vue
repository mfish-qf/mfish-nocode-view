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
  import { Icon } from "/@/components/general/Icon";
  import { propTypes } from "/@/utils/PropTypes";
  const MenuItem = Menu.Item;
  defineOptions({ name: "DropdownMenuItem" });

  defineProps({
    text: propTypes.string,
    icon: propTypes.string
  });

  const instance = getCurrentInstance();
  const itemKey = computed(() => instance?.vnode?.props?.key);
</script>
