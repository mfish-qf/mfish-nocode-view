<!--
 @description:数据库树
 @author: mfish
 @date: 2023/3/31 21:29
-->
<template>
  <BasicTree
    title="数据库列表"
    toolbar
    search
    ref="asyncTreeRef"
    treeWrapperClassName="h-[calc(100%-35px)] overflow-auto"
    :clickRowToExpand="false"
    :treeData="treeData"
    :load-data="getTables"
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

    async function fetch() {
      const dbList = (await getDbConnectList()).list;
      dbList.forEach((db) => {
        db["title"] = db.dbName;
        db["key"] = db.id;
        db["icon"] = "simple-icons:" + (db.dbType === 1 ? "postgresql" : db.dbType === 2 ? "oracle" : "mysql");
      });
      treeData.value = dbList as unknown as TreeItem[];
    }

    function handleSelect(keys) {
      console.log(keys[0], "select");
      emit("select", keys[0]);
    }

    function getTables(treeNode) {
      return new Promise<void>(async resolve => {
        if (treeNode.children) {
          resolve();
          return;
        }
        const asyncTreeAction: TreeActionType | null = unref(asyncTreeRef);
        const tables = await getTableList(treeNode.dataRef.id);
        tables.forEach((db) => {
          db["title"] = db.tableName + (db.tableComment ? "[" + db.tableComment + "]" : "");
          db["key"] = db.tableName;
          db["icon"] = "ant-design:table-outlined";
          db["isLeaf"] = true;
        });
        asyncTreeAction?.updateNodeByKey(treeNode.eventKey, { children: tables });
        resolve();
      });
    };


    onMounted(() => {
      fetch();
    });
    return { treeData, handleSelect, asyncTreeRef, getTables };
  }
};
</script>

<style scoped>

</style>