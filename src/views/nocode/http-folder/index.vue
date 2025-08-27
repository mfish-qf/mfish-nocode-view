<!--
 @description: Http接口目录
 @author: mfish
 @date: 2025-07-21
 @version: V2.1.0
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
            <div class="font-bold m-2 cursor-pointer" @click="setSelect(httpNode.key)">我的HTTP请求</div>
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
        <HttpFolderList
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
  import { DragFolderTree } from "@mfish/core/components/DragTree";
  import { useDesign, useMessage } from "@mfish/core/hooks";
  import { onMounted, reactive, ref } from "vue";
  import {
    deleteHttpFolder,
    dragHttpFolder,
    getHttpFolderTree,
    insertHttpFolder,
    updateHttpFolder
  } from "@/api/nocode/HttpFolder";
  import { Icon } from "@mfish/core/components/Icon";
  import { HttpFolderVo } from "@/api/nocode/model/HttpFolderModel";
  import HttpFolderList from "@/views/nocode/http-folder/HttpFolderList.vue";
  import { NLayout, NLayoutContent, NLayoutSider } from "naive-ui";

  defineOptions({ name: "HttpFolderManagement" });
  const emit = defineEmits(["apiCreate"]);
  const ABreadcrumbItem = ABreadcrumb.Item;
  const { prefixCls } = useDesign("http-folder");
  const genData = ref();
  const folderTreeRef = ref();
  const curFolderId = ref("");
  const { createMessage } = useMessage();
  onMounted(() => {
    getHttpFolderTree().then((res) => {
      genData.value = res;
    });
    selectFolder();
  });
  const breadList = ref();
  const httpNode = reactive({
    icon: "carbon:http",
    title: "我的HTTP请求",
    key: ""
  });

  function dragTree(_, nodes, callback: (res: boolean) => {}) {
    dragHttpFolder(nodes)
      .then(() => {
        callback(true);
      })
      .catch(() => {
        callback(false);
      });
  }

  function insertTree(node) {
    insertHttpFolder({ ...node, name: node.title }).then();
  }

  function updateTree(node) {
    updateHttpFolder({ ...node, name: node.title }).then();
  }

  function deleteTree(node, callback: (res: boolean) => {}) {
    if (node.children?.length > 0) {
      createMessage.error("错误:请先移除子目录");
      return;
    }
    deleteHttpFolder(node.id)
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
    list.unshift(httpNode);
    breadList.value = list;
    curFolderId.value = node?.key ?? "";
  }

  function setSelect(key: string) {
    if (key === httpNode.key) {
      folderTreeRef.value.clearSelect();
      return;
    }
    folderTreeRef.value.setSelect(key);
  }

  function folderClick(record: any) {
    // 如果是目录进入目录
    if (record.fType === 0) {
      setSelect(record.id);
    }
  }

  function folderDelete(folderVo: HttpFolderVo, callback: (res: boolean) => void) {
    folderTreeRef.value.deleteFolder(folderVo.id, callback);
  }

  function apiCreate(data) {
    emit("apiCreate", data);
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-http-folder";

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
