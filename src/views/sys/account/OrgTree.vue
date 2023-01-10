<template>
  <div class="m-4 mr-0 overflow-hidden bg-white">
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
    />
  </div>
</template>
<script lang="ts">
import { onMounted, ref, unref, nextTick } from "vue";
import { BasicTree, TreeActionType, TreeItem } from "/@/components/general/Tree";
import { getOrgTree } from "/@/api/sys/Org";

export default {
  name: "OrgTree",
  components: { BasicTree },
  emits: ["select"],
  setup(_, { emit }) {
    const treeData = ref<TreeItem[]>([]);
    const asyncExpandTreeRef = ref<Nullable<TreeActionType>>(null);

    async function fetch() {
      treeData.value = (await getOrgTree()) as unknown as TreeItem[];
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
    return { treeData, handleSelect, asyncExpandTreeRef };
  }
};
</script>
