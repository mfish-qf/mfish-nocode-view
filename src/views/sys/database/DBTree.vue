<!--
 @description:数据库树
 @author: mfish
 @date: 2023/3/31 21:29
-->
<template>
  <div class="mr-0 bg-white">
    <BasicTree
      title=""
      toolbar
      search
      ref="asyncTreeRef"
      tree-wrapper-class-name="h-[calc(100%-35px)] overflow-auto"
      :tree-data="treeData"
      :load-data="getTables"
      v-model:selected-keys="selectedKeys"
      @select="handleSelect"
      @update:search-value="handleSearch"
      :before-right-click="getRightMenuList"
    >
      <template #headerTools>
        <ATooltip title="新增数据库" v-if="hasPermission('sys:database:insert')">
          <AButton type="link" size="small" @click="DBCreate">
            <template #icon>
              <Icon icon="ant-design:database-outlined" />
            </template>
          </AButton>
        </ATooltip>
      </template>
    </BasicTree>
    <DbConnectModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTree, ContextMenuItem, TreeActionType, TreeItem } from "@mfish/core/components/Tree";
  import { createVNode, onMounted, ref, unref } from "vue";
  import { deleteDbConnect, getDbConnectList, getTableList, PageResult, TableInfo } from "@mfish/core/api";
  import { Icon } from "@mfish/core/components/Icon";
  import { Button as AButton, Modal, Tooltip as ATooltip } from "ant-design-vue";
  import { usePermission, useRootSetting } from "@mfish/core/hooks";
  import DbConnectModal from "@/views/sys/db-connect/DbConnectModal.vue";
  import { useModal } from "@mfish/core/components/Modal";
  import { Nullable, Recordable } from "@mfish/types";

  const emit = defineEmits(["select", "search"]);
  const { hasPermission } = usePermission();
  const treeData = ref<TreeItem[]>([]);
  const asyncTreeRef = ref<Nullable<TreeActionType>>(null);
  const selectedKeys = ref<any[]>([]);
  const [registerModal, { openModal }] = useModal();
  const color = useRootSetting().getThemeColor;

  async function fetch() {
    const conns = await getDbConnectList();
    if (!conns) return;
    const dbList = conns.list;
    dbList.forEach((db: any) => {
      db.title = db.dbTitle;
      db.key = db.id;
      db.icon = `simple-icons:${db.dbType === 0 ? "mysql" : db.dbType === 1 ? "postgresql" : db.dbType === 2 ? "oracle" : "dotnet"}`;
      db.iconColor = color;
    });
    treeData.value = dbList as unknown as TreeItem[];
    if (dbList?.length > 0) {
      const id = treeData.value[0].id;
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
      if (keys && keys.length === 3) {
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
    await buildTableTree(treeNode.eventKey, treeNode.dbType, treeNode.dbName);
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
  async function buildTableTree(key: string, dbType: number, dbName: string) {
    const tableSchema = dbType === 0 ? dbName : "";
    const result: PageResult<TableInfo> = await getTableList({
      connectId: key,
      tableSchema,
      pageNum: 1,
      pageSize: 10_000
    });
    if (!result) {
      return [];
    }
    const asyncTreeAction: TreeActionType | null = unref(asyncTreeRef);
    result.list.forEach((db: any) => {
      db.title = db.tableName + (db.tableComment ? `[${db.tableComment}]` : "");
      db.key = `${key},${db.tableSchema},${db.tableName}`;
      // 表和视图图标区分
      db.icon = db.tableType === 0 ? "ant-design:table-outlined" : "ant-design:fund-view-outlined";
      db.iconColor = color;
      db.isLeaf = true;
    });
    asyncTreeAction?.updateNodeByKey(key, { children: result.list });
    return result.list;
  }

  onMounted(() => {
    fetch();
  });
  defineExpose({ buildTableTree, setSelect });
</script>
