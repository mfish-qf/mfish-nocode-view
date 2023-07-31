<!--
 @description: API目录
 @author: mfish
 @date: 2023-07-18
 @version: V1.1.0
-->
<template>
  <PageWrapper contentClass="flex" contentFullHeight fixedHeight class="mt-3 ml-3 mr-3">
    <DragFolderTree
      ref="folderTreeRef"
      class="xs:w-1/2 s:w-1/4 xl:w-1/5"
      :tree-data="genData"
      node-title="name"
      @save:drag="dragTree"
      @save:insert="insertTree"
      @save:update="updateTree"
      @save:delete="deleteTree"
      :show-head-title="false"
      @select="selectFolder"
    />
    <div class="bg-white xs:w-1/2 s:w-3/4 xl:w-4/5" :class="prefixCls">
      <a-breadcrumb separator=">" class="m-3">
        <a-breadcrumb-item v-for="(item, index) in breadList" :key="index">
          <Icon :icon="item.icon" />
          <a @click="setSelect(item.key)" class="fw-bold text-decoration-none">{{ item.title }}</a>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <mf-api-management />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { PageWrapper } from "/@/components/general/Page";
  import { Breadcrumb } from "ant-design-vue";
  import { DragFolderTree } from "/@/components/general/DragTree";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import { onMounted, ref } from "vue";
  import {
    deleteApiFolder,
    dragApiFolder,
    getApiFolderTree,
    insertApiFolder,
    updateApiFolder
  } from "/@/api/nocode/ApiFolder";
  import { Icon } from "/@/components/general/Icon";
  import MfApiManagement from "/@/views/nocode/mf-api/index.vue";

  export default {
    name: "ApiFolderManagement",
    components: {
      MfApiManagement,
      Icon,
      PageWrapper,
      DragFolderTree,
      ABreadcrumb: Breadcrumb,
      ABreadcrumbItem: Breadcrumb.Item
    },
    setup() {
      const { prefixCls } = useDesign("api-folder");
      const genData = ref();
      const folderTreeRef = ref();
      onMounted(() => {
        getApiFolderTree().then((res) => {
          genData.value = res;
        });
      });
      const breadList = ref();

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
        deleteApiFolder(node.id)
          .then(() => {
            callback(true);
          })
          .catch(() => {
            callback(false);
          });
      }

      function selectFolder(node) {
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
        breadList.value = list;
      }
      function setSelect(key: string) {
        folderTreeRef.value.setSelect(key);
      }

      return {
        prefixCls,
        genData,
        dragTree,
        insertTree,
        updateTree,
        deleteTree,
        breadList,
        selectFolder,
        setSelect,
        folderTreeRef
      };
    }
  };
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-api-folder";
  [data-theme="dark"] {
    .@{prefix-cls} {
      border-left: 1px solid #303030;
    }
  }

  .@{prefix-cls} {
    border-left: 1px solid #d9d9d9;
  }
</style>
