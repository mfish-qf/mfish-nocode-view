<!--
 @description:数据库树
 @author: mfish
 @date: 2023/3/31 21:29
-->
<template>
  <BasicTree
    class="mr-0 overflow-hidden bg-white"
    title="数据库列表"
    toolbar
    search
    ref="asyncTreeRef"
    treeWrapperClassName="h-[calc(100%-35px)] overflow-auto"
    :treeData="treeData"
    :load-data="getTables"
    v-model:selectedKeys="selectedKeys"
    @select="handleSelect"
    @update:searchValue="handleSearch"
  />
</template>
<script lang="ts">
import { BasicTree, TreeActionType, TreeItem } from "/@/components/general/Tree";
import { onMounted, ref, unref, computed } from "vue";
import { getDbConnectList, getTableList } from "/@/api/sys/DbConnect";
import { PageResult } from "/@/api/model/BaseModel";
import { TableInfo } from "/@/api/sys/model/DbConnectModel";
import { useAppStore } from "/@/store/modules/App";

export default {
  name: "DBTree",
  components: { BasicTree },
  emits: ["select", "search"],
  setup(_, { emit }) {
    const treeData = ref<TreeItem[]>([]);
    const asyncTreeRef = ref<Nullable<TreeActionType>>(null);
    let selectedKeys = ref<TreeItem[]>([]);
    const appStore = useAppStore();
    const color = computed(() => appStore.getProjectConfig.themeColor);

    async function fetch() {
      const dbList = (await getDbConnectList()).list;
      dbList.forEach((db) => {
        db["title"] = db.dbName;
        db["key"] = db.id;
        db["icon"] = "simple-icons:" + (db.dbType === 1 ? "postgresql" : db.dbType === 2 ? "oracle" : "mysql");
        db["iconColor"] = color;
      });
      treeData.value = dbList as unknown as TreeItem[];
    }

    function handleSelect(_, e) {
      emit("select", e.node.dataRef, e.node?.parent?.node);
    }

    function setSelect(key) {
      if (key) {
        selectedKeys.value = [key];
        const keys = key.split(",");
        if (keys && keys.length === 2) {
          asyncTreeRef.value?.setExpandedKeys([keys[0]]);
          emit("select", asyncTreeRef.value?.getSelectedNode(key), asyncTreeRef.value?.getSelectedNode(keys[0]));
          return;
        }
        emit("select", asyncTreeRef.value?.getSelectedNode(key));
      }
    }

    function handleSearch(search, value) {
      emit("search", search, value);
    }

    async function getTables(treeNode) {
      if (treeNode.children) {
        return;
      }
      await buildTableTree(treeNode.eventKey);
    };

    /**
     * 构建数据库下面的表列表
     * @param key
     */
    async function buildTableTree(key: string) {
      const result: PageResult<TableInfo> = await getTableList({
        connectId: key,
        pageNum: 1,
        pageSize: 10000
      });
      if (!result) {
        return [];
      }
      const asyncTreeAction: TreeActionType | null = unref(asyncTreeRef);
      result.list.forEach((db) => {
        db["title"] = db.tableName + (db.tableComment ? "[" + db.tableComment + "]" : "");
        db["key"] = key + "," + db.tableName;
        db["icon"] = "ant-design:table-outlined";
        db["iconColor"] = color;
        db["isLeaf"] = true;
      });
      asyncTreeAction?.updateNodeByKey(key, { children: result.list });
      return result.list;
    }

    onMounted(() => {
      fetch().then(() => {
        if (treeData.value?.length > 0) {
          let id = treeData.value[0].id;
          selectedKeys.value = [id];
          emit("select", treeData.value[0]);
        }
      });
    });
    return { treeData, handleSelect, setSelect, asyncTreeRef, getTables, selectedKeys, buildTableTree, handleSearch };
  }
};
</script>

<style scoped>

</style>