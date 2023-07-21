<!--
 @description: 拖动树
 @author: mfish
 @date: 2023/7/18
-->
<template>
  <div>
    <TreeHeader title="目录" :search="true" :toolbar="true" @search="handleSearch" :expandAll="expandAll">
      <template #headerTools>
        <Tooltip title="新增目录">
          <Button type="text" size="small" @click="addFolder()">
            <template #icon>
              <Icon icon="ion:add-outline" />
            </template>
          </Button>
        </Tooltip>
      </template>
    </TreeHeader>
    <ADirectoryTree
      class="draggable-tree"
      draggable
      block-node
      :tree-data="gData"
      @drop="onDrop"
      :expanded-keys="expandedKeys"
      :selected-keys="selectedKeys"
      @expand="onExpand"
      @select="onSelect"
      :auto-expand-parent="autoExpandParent"
      @right-click="onRightClick"
    >
      <template #title="{ title, data }">
        <ADropdown :trigger="['contextmenu']">
          <template v-if="data.isNew">
            <span
              ><AInput
                ref="folderInputRef"
                size="small"
                v-model:value="inputValue"
                style="width: calc(100% - 24px); margin-top: 1px"
                @blur="saveFolder(data)"
                @keydown.enter="saveFolder(data)"
            /></span>
          </template>
          <template v-else>
            <span v-if="searchValue !== '' && title.indexOf(searchValue) > -1">
              {{ title.substring(0, title.indexOf(searchValue)) }}
              <span style="font-weight: bold">{{ searchValue }}</span>
              {{ title.substring(title.indexOf(searchValue) + searchValue.length) }}
            </span>
            <span v-else>{{ title }}</span>
          </template>
          <template #overlay>
            <AMenu @click="({ key: menuKey }) => onContextMenuClick(menuKey, data.key)">
              <AMenuItem key="1">新增子目录</AMenuItem>
              <AMenuItem key="2">修改</AMenuItem>
              <AMenuItem key="3">删除</AMenuItem>
            </AMenu>
          </template>
        </ADropdown>
      </template>
    </ADirectoryTree>
  </div>
</template>
<script lang="ts" setup>
  import { PropType, ref, watch, nextTick, unref } from "vue";
  import {
    Button,
    DirectoryTree as ADirectoryTree,
    Tooltip,
    Input as AInput,
    Dropdown as ADropdown,
    Menu as AMenu,
    MenuItem as AMenuItem
  } from "ant-design-vue";
  import type { AntTreeNodeDropEvent, TreeProps } from "ant-design-vue/es/tree";
  import { TreeDataItem } from "ant-design-vue/es/tree/Tree";
  import TreeHeader from "/@/components/general/Tree/src/components/TreeHeader.vue";
  import Icon from "/@/components/general/Icon/src/Icon.vue";
  import { buildUUID } from "/@/utils/Uuid";
  import { findNode } from "/@/utils/helper/TreeHelper";

  const props = defineProps({
    treeData: {
      type: Array as PropType<TreeDataItem[]>
    },
    nodeKey: { type: String, default: "id" },
    nodeTitle: { type: String, default: "id" }
  });
  const gData = ref<any[]>([]);
  const dataList: TreeProps["treeData"] = [];
  const folderInputRef = ref<Nullable<HTMLElement>>(null);
  const newFolder = "新目录";
  const newNode = () => {
    const key = buildUUID();
    return {
      key,
      title: newFolder,
      isNew: true,
      isLeaf: false,
      [props.nodeKey]: key,
      [props.nodeTitle]: newFolder
    };
  };
  const inputValue = ref<string>("");
  watch(
    () => props.treeData,
    (value: []) => {
      if (value) {
        initData(value);
        gData.value = value;
      } else {
        gData.value = [];
      }
    }
  );

  const initData = (nodes: any[]) => {
    for (const node of nodes) {
      if (node.children && node.children.length > 0) {
        initData(node.children);
      }
      dataList.push({ key: node[props.nodeKey], title: node[props.nodeTitle] });
      node["key"] = node[props.nodeKey];
      node["title"] = node[props.nodeTitle];
      node["isLeaf"] = false;
    }
  };

  const expandedKeys = ref<string[]>([]);
  const selectedKeys = ref<string[]>([]);
  const searchValue = ref<string>("");
  const autoExpandParent = ref<boolean>(true);
  const expandAll = (val: boolean) => {
    expandedKeys.value = val ? (dataList.map((item) => item.key) as string[]) : [];
  };
  const onExpand = (keys: string[]) => {
    expandedKeys.value = keys;
    autoExpandParent.value = false;
  };
  const onSelect = (keys: string[]) => {
    selectedKeys.value = keys;
  };
  watch(searchValue, (value) => {
    if (value) {
      expandedKeys.value = dataList
        .map((item) => {
          if (item.title.indexOf(value) > -1) {
            return getParentKey(item.key, gData.value);
          }
          return null;
        })
        .filter((item, i, self) => item && self.indexOf(item) === i) as string[];
    } else {
      expandedKeys.value = [];
    }
    autoExpandParent.value = true;
  });
  function handleSearch(value: string) {
    searchValue.value = value;
  }

  const onRightClick = (event) => {
    selectedKeys.value = [event.node.key];
  };
  const onDrop = (info: AntTreeNodeDropEvent) => {
    console.log(info, "onDrop");
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos?.split("-") || [];
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    const loop = (data: TreeProps["treeData"], key: string | number, callback: any) => {
      data?.forEach((item, index) => {
        if (item.key === key) {
          return callback(item, index, data);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = gData.value ? [...gData.value] : [];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index: number, arr: TreeProps["treeData"]) => {
      arr?.splice(index, 1);
      dragObj = item;
    });
    let dropObj;
    if (info.dropToGap) {
      let ar: TreeProps["treeData"] = [];
      let i = 0;
      loop(data, dropKey, (item, index: number, arr: TreeProps["treeData"]) => {
        ar = arr;
        i = index;
        dropObj = item;
      });
      dragObj.parentId = dropObj.parentId;
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    } else {
      // Drop on the content
      loop(data, dropKey, (item) => {
        dropObj = item;
        item.children = item.children || [];
        /// where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
        dragObj.parentId = dropObj.id;
      });
    }
    console.log(dropObj, "dropObj");
    gData.value = data;
  };

  const getParentKey = (key: string | number, tree: TreeProps["treeData"]): string | number | undefined => {
    if (!tree) {
      return undefined;
    }
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.children) {
        if (node.children.some((item) => item.key === key)) {
          parentKey = node.key;
        } else if (getParentKey(key, node.children)) {
          parentKey = getParentKey(key, node.children);
        }
      }
    }
    return parentKey;
  };
  const addFolder = () => {
    addChildFolder(undefined);
  };

  const addChildFolder = (treeKey) => {
    let node;
    //treeKey为空添加到最顶级目录，不为空添加子目录
    if (!treeKey) {
      node = gData.value;
    } else {
      const parent = findNode(gData.value, (node) => node.key === treeKey);
      if (!parent) return;
      if (!parent.children) {
        parent.children = [];
      }
      node = parent.children;
    }
    inputValue.value = newFolder;
    const child = newNode();
    if (node) {
      node.push(child);
    }
    expandedKeys.value = [treeKey];
    autoExpandParent.value = true;
    selectedKeys.value = [child.key];
    nextTick(() => {
      unref(folderInputRef)?.focus();
    });
  };

  const saveFolder = (data) => {
    debugger;
    data.title = unref(inputValue);
    data.isNew = false;
    dataList.push({ key: data.id, title: data.title });
    //回车不离开input设置展开会强制离开input
    expandedKeys.value = [data.id];
    autoExpandParent.value = true;
  };

  const onContextMenuClick = (menuKey: string, treeKey: string) => {
    switch (menuKey) {
      case "1":
        addChildFolder(treeKey);
        break;
    }
  };
</script>
<style scoped lang="less"></style>
