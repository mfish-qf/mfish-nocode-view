<!--
 @description:数据库树
 @author: mfish
 @date: 2023/3/31 21:29
-->
<template>
  <BasicTree
    class="m-4 mr-0 overflow-hidden bg-white"
    title="数据库列表"
    toolbar
    search
    ref="asyncTreeRef"
    treeWrapperClassName="h-[calc(100%-35px)] overflow-auto"
    :clickRowToExpand="false"
    :treeData="treeData"
    :load-data="getTables"
    v-model:selectedKeys="selectedKeys"
    @select="handleSelect"
  />
</template>
<script lang="ts">
import { BasicTree, TreeActionType, TreeItem } from "/@/components/general/Tree";
import { onMounted, ref, unref } from "vue";
import { getDbConnectList, getTableList } from "/@/api/sys/DbConnect";

export default {
  name: "DBTree",
  components: { BasicTree },
  emits: ["select"],
  setup(_, { emit }) {
    const treeData = ref<TreeItem[]>([]);
    const asyncTreeRef = ref<Nullable<TreeActionType>>(null);
    let selectedKeys = ref<TreeItem[]>([]);

    async function fetch() {
      const dbList = (await getDbConnectList()).list;
      dbList.forEach((db) => {
        db["title"] = db.dbName;
        db["key"] = db.id;
        db["icon"] = "simple-icons:" + (db.dbType === 1 ? "postgresql" : db.dbType === 2 ? "oracle" : "mysql");
      });
      treeData.value = dbList as unknown as TreeItem[];
    }

    function handleSelect(key) {
      emit("select", key[0]);
    }

    function getTables(treeNode) {
      return new Promise<void>(async resolve => {
        if (treeNode.children) {
          resolve();
          return;
        }
        const asyncTreeAction: TreeActionType | null = unref(asyncTreeRef);
        const tables = await getTableList({ connectId: treeNode.dataRef.id, pageNum: 1, pageSize: 10000 });
        if (tables) {
          tables.list.forEach((db) => {
            db["title"] = db.tableName + (db.tableComment ? "[" + db.tableComment + "]" : "");
            db["key"] = db.tableName;
            db["icon"] = "ant-design:table-outlined";
            db["isLeaf"] = true;
          });
          asyncTreeAction?.updateNodeByKey(treeNode.eventKey, { children: tables.list });
        }
        resolve();
      });
    };

    onMounted(() => {
      fetch().then(() => {
        if (treeData.value?.length > 0) {
          let id = treeData.value[0].id;
          selectedKeys.value = [id];
          emit("select", id);
        }
      });
    });
    return { treeData, handleSelect, asyncTreeRef, getTables, selectedKeys };
  }
};
</script>

<style scoped>

</style>