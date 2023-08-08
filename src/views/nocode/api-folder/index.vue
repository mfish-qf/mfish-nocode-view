<!--
 @description: API目录
 @author: mfish
 @date: 2023-07-18
 @version: V1.1.0
-->
<template>
  <PageWrapper contentFullHeight fixedHeight>
    <div :class="prefixCls" class="p-3">
      <DragFolderTree
        ref="folderTreeRef"
        class="w-1/3 s:w-1/4 xl:w-1/5"
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
      <div class="bg-white w-2/3 s:w-3/4 xl:w-4/5" :class="`${prefixCls}-right`">
        <ABreadcrumb separator=">" class="breadcrumb">
          <ABreadcrumbItem v-for="(item, index) in breadList" :key="index">
            <Icon :icon="item.icon" />
            <a @click="setSelect(item.key)" class="fw-bold text-decoration-none">{{ item.title }}</a>
          </ABreadcrumbItem>
        </ABreadcrumb>
        <ApiFolderList :folderId="curFolderId" @folder-click="folderClick" @folder-delete="folderDelete" />
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { PageWrapper } from "/@/components/general/Page";
  import { Breadcrumb } from "ant-design-vue";
  import { DragFolderTree } from "/@/components/general/DragTree";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import { onMounted, reactive, ref, defineComponent } from "vue";
  import {
    deleteApiFolder,
    dragApiFolder,
    getApiFolderTree,
    insertApiFolder,
    updateApiFolder
  } from "/@/api/nocode/ApiFolder";
  import { Icon } from "/@/components/general/Icon";
  import { FolderVo } from "/@/api/nocode/model/ApiFolderModel";
  import ApiFolderList from "/@/views/nocode/api-folder/ApiFolderList.vue";
  import { useMessage } from "/@/hooks/web/UseMessage";

  export default defineComponent({
    name: "ApiFolderManagement",
    components: {
      ApiFolderList,
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
      const curFolderId = ref("");
      const { createMessage } = useMessage();
      onMounted(() => {
        getApiFolderTree().then((res) => {
          genData.value = res;
        });
        selectFolder(undefined);
      });
      const breadList = ref();
      const apiNode = reactive({
        icon: "ant-design:api-outlined",
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
        list.unshift(apiNode);
        breadList.value = list;
        curFolderId.value = node?.key ? node.key : "";
      }

      function setSelect(key: string) {
        if (key === apiNode.key) {
          folderTreeRef.value.clearSelect();
          return;
        }
        folderTreeRef.value.setSelect(key);
      }

      function folderClick(record) {
        //如果是目录进入目录
        if (record.fType === 0) {
          setSelect(record.id);
        }
        //如果是文件
        //todo 待完善
      }

      function folderDelete(folderVo: FolderVo) {
        folderTreeRef.value.deleteFolder(folderVo.id);
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
        apiNode,
        setSelect,
        folderTreeRef,
        curFolderId,
        folderClick,
        folderDelete
      };
    }
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-api-folder";
  [data-theme="dark"] {
    .@{prefix-cls}-right {
      border-left: 1px solid #303030;
    }
  }

  .@{prefix-cls} {
    display: flex;
    height: 100%;
    &-right {
      border-left: 1px solid #d9d9d9;
      .breadcrumb {
        margin: 12px 0 0 12px;
      }
    }
  }
</style>
