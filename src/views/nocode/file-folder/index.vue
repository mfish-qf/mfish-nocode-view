<!--
 @description: 文件目录
 @author: mfish
 @date: 2023-12-11
 @version: V2.0.0
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
            <div class="font-bold m-2 cursor-pointer" @click="setSelect(fileNode.key)">我的文件</div>
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
            <a @click="setSelect(item.key)" class="fw-bold text-decoration-none">{{ item.title }}</a>
          </ABreadcrumbItem>
        </ABreadcrumb>
        <FileFolderList
          :folder-id="curFolderId"
          @folder-click="folderClick"
          @folder-delete="folderDelete"
          @api-create="apiCreate"
        />
      </div>
    </NLayoutContent>
  </NLayout>
</template>
<script lang="ts" setup>
  import { Breadcrumb as ABreadcrumb, Divider as ADivider } from "ant-design-vue";
  import { DragFolderTree } from "@mfish/core/src/components/DragTree";
  import { useDesign } from "@mfish/core";
  import { onMounted, reactive, ref } from "vue";
  import {
    deleteFileFolder,
    dragFileFolder,
    getFileFolderTree,
    insertFileFolder,
    updateFileFolder
  } from "@/api/nocode/FileFolder";
  import { Icon } from "@mfish/core/src/components/Icon";
  import { FileFolderVo } from "@/api/nocode/model/FileFolderModel";
  import FileFolderList from "@/views/nocode/file-folder/FileFolderList.vue";
  import { useMessage } from "@mfish/core/src/hooks/web/UseMessage";
  import { NLayout, NLayoutContent, NLayoutSider } from "naive-ui";
  defineOptions({ name: "FileFolderManagement" });
  const emit = defineEmits(["apiCreate"]);
  const ABreadcrumbItem = ABreadcrumb.Item;
  const { prefixCls } = useDesign("file-folder");
  const genData = ref();
  const folderTreeRef = ref();
  const curFolderId = ref("");
  const { createMessage } = useMessage();
  onMounted(() => {
    getFileFolderTree().then((res) => {
      genData.value = res;
    });
    selectFolder();
  });
  const breadList = ref();
  const fileNode = reactive({
    icon: "ant-design:file-excel-outlined",
    title: "我的文件",
    key: ""
  });

  function dragTree(_, nodes, callback: (res: boolean) => {}) {
    dragFileFolder(nodes)
      .then(() => {
        callback(true);
      })
      .catch(() => {
        callback(false);
      });
  }

  function insertTree(node) {
    insertFileFolder({ ...node, name: node.title }).then();
  }

  function updateTree(node) {
    updateFileFolder({ ...node, name: node.title }).then();
  }

  function deleteTree(node, callback: (res: boolean) => {}) {
    if (node.children?.length > 0) {
      createMessage.error("错误:请先移除子目录");
      return;
    }
    deleteFileFolder(node.id)
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
    list.unshift(fileNode);
    breadList.value = list;
    curFolderId.value = node?.key ?? "";
  }

  function setSelect(key: string) {
    if (key === fileNode.key) {
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

  function folderDelete(folderVo: FileFolderVo, callback: (res: boolean) => void) {
    folderTreeRef.value.deleteFolder(folderVo.id, callback);
  }

  function apiCreate(data) {
    emit("apiCreate", data);
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-file-folder";

  .@{prefix-cls} {
    display: flex;
    height: 100%;

    &-left {
      padding: 6px;
      flex: 1;
    }

    &-right {
      padding: 0 12px 0 18px;

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
