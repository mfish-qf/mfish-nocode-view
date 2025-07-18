<!--
 @description: 大屏目录
 @author: mfish
 @date: 2024-01-08
 @version: V2.0.1
-->
<template>
  <PageWrapper content-full-height fixed-height class="mt-3 ml-3 mr-3">
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
              <div class="font-bold m-2 cursor-pointer" @click="setSelect(screenNode.key)">我的大屏</div>
            </template>
          </DragFolderTree>
          <ADivider type="vertical" class="divider" />
        </div>
      </NLayoutSider>
      <NLayoutContent>
        <ScrollContainer :class="`${prefixCls}-right`" :hidden-x="true">
          <ABreadcrumb separator=">" class="breadcrumb">
            <ABreadcrumbItem v-for="(item, index) in breadList" :key="index">
              <Icon :icon="item.icon" />
              <a @click="setSelect(item.key)" class="fw-bold text-decoration-none">{{ item.title }}</a>
            </ABreadcrumbItem>
          </ABreadcrumb>
          <ScreenFolderList
            :folder-id="curFolderId"
            @folder-click="folderClick"
            @folder-delete="folderDelete"
            @folder-rename="folderRename"
          />
        </ScrollContainer>
      </NLayoutContent>
    </NLayout>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { Breadcrumb as ABreadcrumb, Divider as ADivider } from "ant-design-vue";
  import { DragFolderTree } from "@mfish/core/components/DragTree";
  import { useDesign, useMessage } from "@mfish/core/hooks";
  import { onMounted, reactive, ref } from "vue";
  import {
    deleteScreenFolder,
    dragScreenFolder,
    getScreenFolderTree,
    insertScreenFolder,
    ScreenFolderVo,
    updateScreenFolder
  } from "@mfish/nocode";
  import { Icon } from "@mfish/core/components/Icon";
  import { PageWrapper } from "@/components/general/Page";
  import ScreenFolderList from "@/views/nocode/screen-folder/ScreenFolderList.vue";
  import { ScrollContainer } from "@mfish/core/components/Container";
  import { NLayout, NLayoutContent, NLayoutSider } from "naive-ui";

  defineOptions({ name: "ScreenFolderManagement" });

  const ABreadcrumbItem = ABreadcrumb.Item;

  const { prefixCls } = useDesign("screen-folder");
  const genData = ref();
  const folderTreeRef = ref();
  const curFolderId = ref("");
  const { createMessage } = useMessage();
  onMounted(() => {
    getScreenFolderTree().then((res) => {
      genData.value = res;
    });
    selectFolder();
  });
  const breadList = ref();
  const screenNode = reactive({
    icon: "ant-design:fund-projection-screen-outlined",
    title: "我的大屏",
    key: ""
  });

  function dragTree(_, nodes, callback: (res: boolean) => void) {
    dragScreenFolder(nodes)
      .then(() => {
        callback(true);
      })
      .catch(() => {
        callback(false);
      });
  }

  function insertTree(node) {
    insertScreenFolder({ ...node, name: node.title }).then();
  }

  function updateTree(node) {
    updateScreenFolder({ ...node, name: node.title }).then();
  }

  function deleteTree(node, callback: (res: boolean) => {}) {
    if (node.children?.length > 0) {
      createMessage.error("错误:请先移除子目录");
      return;
    }
    deleteScreenFolder(node.id)
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
    list.unshift(screenNode);
    breadList.value = list;
    curFolderId.value = node?.key ?? "";
  }

  function setSelect(key: string) {
    if (key === screenNode.key) {
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

  function folderDelete(folderVo: ScreenFolderVo, callback: (res: boolean) => void) {
    folderTreeRef.value.deleteFolder(folderVo.id, callback);
  }

  function folderRename(value: { id: string; name: string }) {
    folderTreeRef.value.setNodeName(value.id, value.name);
  }
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-screen-folder";
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
  }
</style>
<style lang="less">
  @prefix-cls: ~"@{namespace}-screen-folder";
  .@{prefix-cls} {
    .n-layout-toggle-bar {
      right: -24px;
    }

    .divider {
      height: calc(100% - 20px);
      top: 10px;
      padding: 0;
      margin: 0;
    }
  }
</style>
