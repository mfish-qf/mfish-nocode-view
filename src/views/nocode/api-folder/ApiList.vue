<!--
 @description: API目录列表
 @author: mfish
 @date: 2024/12/2
-->
<template>
  <NLayout has-sider sider-placement="left" :class="prefixCls">
    <NLayoutSider :collapsed-width="0" collapse-mode="transform" :width="300" show-trigger="bar" @contextmenu.stop>
      <div style="display: flex; height: 100%">
        <DragFolderTree
          :class="`${prefixCls}-left h-full`"
          ref="folderTreeRef"
          :tree-data="genData"
          node-title="name"
          @save:drag="dragTree"
          @save:insert="insertTree"
          @save:update="updateTree"
          @save:delete="deleteTree"
          :show-head-title="false"
          @select="selectFolder"
        >
          <template #treeTitle>
            <div class="font-bold m-2 cursor-pointer" @click="setSelect(apiNode.key)">我的API</div>
          </template>
        </DragFolderTree>
        <ADivider type="vertical" class="divider" />
      </div>
    </NLayoutSider>
    <NLayoutContent>
      <div :class="`${prefixCls}-right`">
        <ABreadcrumb separator=">" class="breadcrumb">
          <ABreadcrumbItem v-for="(item, index) in breadList" :key="index">
            <Icon :icon="item.icon" />
            <a v-if="index < breadList.length - 1" @click="setSelect(item.key)">{{ item.title }}</a>
            <span v-else class="fw-bold">{{ item.title }}</span>
          </ABreadcrumbItem>
        </ABreadcrumb>
        <ApiFolderList
          :allow-check="allowCheck"
          :folder-id="curFolderId"
          @folder-click="folderClick"
          @folder-delete="folderDelete"
          @row-select="(e) => emit('rowSelect', e)"
        />
      </div>
    </NLayoutContent>
  </NLayout>
</template>
<script setup lang="ts">
  import { Breadcrumb as ABreadcrumb, Divider as ADivider } from "ant-design-vue";
  import { DragFolderTree } from "@mfish/core/components/DragTree";
  import { useDesign, useMessage } from "@mfish/core/hooks";
  import { onMounted, reactive, ref } from "vue";
  import { Icon } from "@mfish/core/components/Icon";
  import {
    ApiFolderVo,
    deleteApiFolder,
    dragApiFolder,
    getApiFolderTree,
    insertApiFolder,
    updateApiFolder
  } from "@mfish/custom-api";
  import ApiFolderList from "./ApiFolderList.vue";
  import { NLayout, NLayoutContent, NLayoutSider } from "naive-ui";

  defineProps({
    allowCheck: { type: Boolean, default: false }
  });
  const emit = defineEmits(["rowSelect"]);
  const ABreadcrumbItem = ABreadcrumb.Item;
  const { prefixCls } = useDesign("api-list");
  const genData = ref();
  const folderTreeRef = ref();
  const curFolderId = ref("");
  const { createMessage } = useMessage();
  onMounted(() => {
    getApiFolderTree().then((res) => {
      genData.value = res;
    });
    selectFolder();
  });
  const breadList = ref();
  const apiNode = reactive({
    icon: "carbon:api-1",
    title: "我的API",
    key: ""
  });

  function dragTree(_, nodes, callback: (res: boolean) => {}) {
    dragApiFolder(nodes)
      .then(() => {
        callback(true);
      })
      .catch(() => {
        callback(false);
      });
  }

  function insertTree(node) {
    insertApiFolder({ ...node, name: node.title }).then();
  }

  function updateTree(node) {
    updateApiFolder({ ...node, name: node.title }).then();
  }

  function deleteTree(node, callback: (res: boolean) => {}) {
    if (node.children?.length > 0) {
      createMessage.error("错误:请先移除子目录");
      return;
    }
    deleteApiFolder(node.id)
      .then(() => {
        callback(true);
      })
      .catch(() => {
        callback(false);
      });
  }

  function selectFolder(node?: any) {
    const list: any[] = [];
    let newNode = node;
    while (newNode) {
      list.unshift({
        icon: "ant-design:folder-outline",
        title: newNode.title,
        key: newNode.key
      });
      newNode = newNode.parent;
    }
    list.unshift(apiNode);
    breadList.value = list;
    curFolderId.value = node?.key ?? "";
  }

  function setSelect(key: string) {
    if (key === apiNode.key) {
      folderTreeRef.value.clearSelect();
      return;
    }
    folderTreeRef.value.setSelect(key);
  }

  function folderClick(record) {
    // 如果是目录进入目录
    if (record.fType === 0) {
      setSelect(record.id);
    }
  }

  function folderDelete(folderVo: ApiFolderVo, callback: (res: boolean) => void) {
    folderTreeRef.value.deleteFolder(folderVo.id, callback);
  }
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-api-list";

  .@{prefix-cls} {
    height: 100%;

    &-left {
      flex: 1;
      padding: 6px;
    }

    &-right {
      padding: 0 10px 0 10px;

      .breadcrumb {
        margin: 12px 0 0 12px;
      }
    }

    .divider {
      height: calc(100% - 20px);
      top: 10px;
      padding: 0;
      margin: 0;
    }
  }
</style>
<style lang="less">
  @prefix-cls: ~"@{namespace}-api-list";
  .@{prefix-cls} {
    .n-layout-toggle-bar {
      right: -24px;
    }
  }
</style>
