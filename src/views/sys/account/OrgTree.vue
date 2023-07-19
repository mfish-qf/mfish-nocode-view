<template>
  <div class="mr-0 overflow-hidden bg-white" :class="$props.source === 1 ? '' : 'mt-3 ml-3 mb-3'">
    <BasicTree
      title="组织列表"
      toolbar
      search
      ref="asyncExpandTreeRef"
      treeWrapperClassName="h-[calc(100%-35px)] overflow-auto"
      :clickRowToExpand="false"
      :treeData="treeData"
      :fieldNames="{ key: 'id', title: 'orgName' }"
      @select="handleSelect"
    >
      <template #title="item">
        <div v-if="item.tenantId !== null && item.tenantId !== ''" style="display: flex; align-items: center">
          <Icon icon="ion:business" :color="color" />
          <div :style="{ 'margin-left': '6px', color: color }">{{ item.orgName }}</div>
        </div>
        <div v-else>{{ item.orgName }}</div>
      </template>
    </BasicTree>
  </div>
</template>
<script lang="ts">
  import { onMounted, ref, unref, nextTick, computed } from "vue";
  import { BasicTree, TreeActionType, TreeItem } from "/@/components/general/Tree";
  import { getOrgTree } from "/@/api/sys/Org";
  import { getTenantOrgTree } from "/@/api/sys/SsoTenant";
  import { Icon } from "/@/components/general/Icon";
  import { useAppStore } from "/@/store/modules/App";
  export default {
    name: "OrgTree",
    components: { BasicTree, Icon },
    props: {
      source: {
        type: Number,
        default: null
      }
    },
    emits: ["select"],
    setup(props, { emit }) {
      const treeData = ref<TreeItem[]>([]);
      const asyncExpandTreeRef = ref<Nullable<TreeActionType>>(null);
      const appStore = useAppStore();
      const color = computed(() => {
        return appStore.getProjectConfig.themeColor;
      });
      async function fetch() {
        if (props.source === 1) {
          treeData.value = (await getTenantOrgTree()) as unknown as TreeItem[];
        } else {
          treeData.value = (await getOrgTree()) as unknown as TreeItem[];
        }
        nextTick(() => {
          unref(asyncExpandTreeRef)?.expandAll(true);
        });
      }

      function handleSelect(keys) {
        emit("select", keys[0]);
      }

      onMounted(() => {
        fetch();
      });
      return { treeData, handleSelect, asyncExpandTreeRef, color };
    }
  };
</script>
