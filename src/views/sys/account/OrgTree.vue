<template>
  <div class="mr-0 overflow-hidden bg-white" :class="$props.source === 1 ? '' : 'mt-4 ml-4 mb-4'">
    <BasicTree
      title="组织列表"
      toolbar
      search
      ref="asyncExpandTreeRef"
      tree-wrapper-class-name="h-[calc(100%-35px)] overflow-auto"
      :click-row-to-expand="false"
      :tree-data="treeData"
      :pagination="pagination"
      :field-names="{ key: 'id' }"
      @select="handleSelect"
      @before-search="handleBeforeSearch"
      @page-change="handlePageChange"
    >
      <template #title="item">
        <div v-if="item.tenantId !== null && item.tenantId !== ''" style="display: flex; align-items: center">
          <Icon icon="ion:business" :color="color" />
          <div :style="{ 'margin-left': '6px', color }">{{ item.orgName }}</div>
        </div>
        <div v-else>{{ item.orgName }}</div>
      </template>
    </BasicTree>
  </div>
</template>
<script lang="ts" setup>
  import { nextTick, onMounted, reactive, ref, unref } from "vue";
  import { BasicTree, TreeActionType, TreeItem } from "@mfish/core/components/Tree";
  import { getOrg, getTenantOrgTree } from "@mfish/core/api";
  import { Icon } from "@mfish/core/components/Icon";
  import { useRootSetting } from "@mfish/core/hooks";
  import { Nullable } from "@mfish/types";

  defineOptions({ name: "OrgTree" });

  const props = defineProps({
    source: {
      type: Number,
      default: null
    }
  });
  const emit = defineEmits(["select"]);
  const treeData = ref<TreeItem[]>([]);
  const asyncExpandTreeRef = ref<Nullable<TreeActionType>>(null);
  const color = useRootSetting().getThemeColor;
  const pagination = reactive({
    total: 0,
    current: 1,
    pageSize: 50
  });

  async function fetch(orgName?: string) {
    if (props.source === 1) {
      treeData.value = (await getTenantOrgTree()) as unknown as TreeItem[];
    } else {
      const org = await getOrg({
        orgName: orgName ?? undefined,
        pageNum: pagination.current,
        pageSize: pagination.pageSize
      });
      treeData.value = org.list as unknown as TreeItem[];
      pagination.total = org.total;
      pagination.current = org.pageNum;
    }
    nextTick(() => {
      unref(asyncExpandTreeRef)?.expandAll(true);
    }).then();
  }

  function handleBeforeSearch(searchValue, callback) {
    pagination.current = 1;
    fetch(searchValue).then(() => {
      callback();
    });
  }

  function handlePageChange(page: number, searchValue) {
    pagination.current = page;
    fetch(searchValue);
  }

  function handleSelect(keys: any[], e: any) {
    emit("select", keys[0], e.node.orgName);
  }

  onMounted(() => {
    fetch();
  });
</script>
