<!--
 @description:数据库树
 @author: mfish
 @date: 2023/3/31 21:29
-->
<template>
  <div class="mr-0 bg-white">
    <BasicTree
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
      :beforeRightClick="getRightMenuList"
    >
      <template #headerTools>
        <Tooltip title="新增数据库" v-if="hasPermission('sys:database:insert')">
          <Button type="text" size="small" @click="DBCreate">
            <template #icon>
              <Icon icon="ant-design:plus-circle-outlined" />
            </template>
          </Button>
        </Tooltip>
      </template>
    </BasicTree>
    <DbConnectModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { BasicTree, ContextMenuItem, TreeActionType, TreeItem } from "/@/components/general/Tree";
  import { onMounted, ref, unref, computed, createVNode } from "vue";
  import { deleteDbConnect, getDbConnectList, getTableList } from "/@/api/sys/DbConnect";
  import { PageResult } from "/@/api/model/BaseModel";
  import { TableInfo } from "/@/api/sys/model/DbConnectModel";
  import { useAppStore } from "/@/store/modules/App";
  import Icon from "/@/components/general/Icon/src/Icon.vue";
  import { Button, Tooltip, Modal } from "ant-design-vue";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import DbConnectModal from "/@/views/sys/db-connect/DbConnectModal.vue";
  import { useModal } from "/@/components/general/Modal";

  export default {
    name: "DBTree",
    components: { DbConnectModal, Icon, Tooltip, Button, BasicTree, Modal },
    emits: ["select", "search"],
    setup(_, { emit }) {
      const { hasPermission } = usePermission();
      const treeData = ref<TreeItem[]>([]);
      const asyncTreeRef = ref<Nullable<TreeActionType>>(null);
      let selectedKeys = ref<TreeItem[]>([]);
      const [registerModal, { openModal }] = useModal();
      const appStore = useAppStore();
      const color = computed(() => appStore.getProjectConfig.themeColor);

      async function fetch() {
        const dbList = (await getDbConnectList()).list;
        dbList.forEach((db) => {
          db["title"] = db.dbTitle;
          db["key"] = db.id;
          db["icon"] = "simple-icons:" + (db.dbType === 1 ? "postgresql" : db.dbType === 2 ? "oracle" : "mysql");
          db["iconColor"] = color;
        });
        treeData.value = dbList as unknown as TreeItem[];
        if (dbList?.length > 0) {
          let id = treeData.value[0].id;
          selectedKeys.value = [id];
          emit("select", treeData.value[0]);
        }
      }

      const showDeleteConfirm = (node) => {
        Modal.confirm({
          title: "确认删除提醒",
          content: createVNode("div", { style: "color:red;" }, "是否确认删除数据库"),
          onOk() {
            DBDelete(node);
          },
          class: "test"
        });
      };

      function getRightMenuList(node: any): ContextMenuItem[] {
        setSelect(node.key);
        if (!node.dbName) {
          return [];
        }
        const menus: ContextMenuItem[] = [];
        if (hasPermission("sys:database:update")) {
          menus.push({
            label: "修改",
            handler: () => {
              DBEdit(node);
            },
            icon: "ant-design:edit-outlined"
          });
        }
        if (hasPermission("sys:database:delete")) {
          menus.push({
            label: "删除",
            handler: () => {
              showDeleteConfirm(node);
            },
            icon: "ant-design:delete-outlined"
          });
        }
        return menus;
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
      }

      function DBCreate() {
        openModal(true, {
          isUpdate: false
        });
      }

      function DBEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true
        });
      }

      function DBDelete(record: Recordable) {
        deleteDbConnect(record.id).then(() => {
          handleSuccess();
        });
      }

      function handleSuccess() {
        fetch().then();
      }

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
        fetch();
      });
      return {
        hasPermission,
        registerModal,
        DBCreate,
        handleSuccess,
        treeData,
        handleSelect,
        setSelect,
        asyncTreeRef,
        getTables,
        selectedKeys,
        buildTableTree,
        handleSearch,
        getRightMenuList
      };
    }
  };
</script>
