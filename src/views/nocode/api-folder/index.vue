<!--
 @description: API目录
 @author: mfish
 @date: 2023-07-18
 @version: V1.1.0
-->
<template>
  <PageWrapper contentClass="flex" contentFullHeight fixedHeight class="mt-3 ml-3 mr-3">
    <DragFolderTree
      class="mr-3"
      :tree-data="genData"
      node-title="name"
      @save:drag="dragTree"
      @save:insert="insertTree"
      @save:update="updateTree"
      @save:delete="deleteTree"
      @select="selectFolder"
    />
    <ScrollContainer class="bg-white">
      <a-breadcrumb separator=">" class="m-3">
        <a-breadcrumb-item v-for="(item, index) in breadList" :key="index">
          <Icon :icon="item.icon" />
          <a @click="setSelect(item.key)" class="fw-bold text-decoration-none">{{ item.title }}</a>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </ScrollContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { PageWrapper } from "/@/components/general/Page";
  import { Breadcrumb } from "ant-design-vue";
  import { DragFolderTree } from "/@/components/general/DragTree";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import { computed, onMounted, ref } from "vue";
  import {
    deleteApiFolder,
    dragApiFolder,
    getApiFolderList,
    insertApiFolder,
    updateApiFolder
  } from "/@/api/nocode/ApiFolder";
  import { Icon } from "/@/components/general/Icon";
  import { TreeItem } from "/@/components/general/Tree";
  import { ScrollContainer } from "/@/components/general/Container";
  export default {
    name: "ApiFolderManagement",
    components: {
      ScrollContainer,
      Icon,
      PageWrapper,
      DragFolderTree,
      ABreadcrumb: Breadcrumb,
      ABreadcrumbItem: Breadcrumb.Item
    },
    setup() {
      const { prefixCls } = useDesign("no-code-api");
      const genData = ref();

      onMounted(() => {
        getApiFolderList().then((res) => {
          genData.value = res;
        });
      });
      const curNode = ref<TreeItem>();
      const breadList = computed(() => {
        const list: any[] = [];
        list.push({
          icon: "ant-design:folder-outline",
          title: "aaaa",
          key: "aaaa"
        });

        return list;
      });

      function dragTree(_, nodes) {
        dragApiFolder(nodes).then();
      }

      function insertTree(node) {
        insertApiFolder({ ...node, name: node.title }).then();
      }

      function updateTree(node) {
        updateApiFolder({ ...node, name: node.title }).then();
      }

      function deleteTree(node) {
        deleteApiFolder(node.id).then();
      }
      function selectFolder(keys) {
        console.log(keys, "keys");
      }
      return {
        prefixCls,
        genData,
        dragTree,
        insertTree,
        updateTree,
        deleteTree,
        breadList,
        selectFolder
      };
    }
  };
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-no-code-api";
  .@{prefix-cls} {
    display: flex;
    .left {
      width: 300px;
    }
    .right {
      flex: 1;
    }
  }
</style>
