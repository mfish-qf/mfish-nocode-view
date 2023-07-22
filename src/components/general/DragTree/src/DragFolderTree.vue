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
          <template v-if="data.isEdit">
            <span
              ><AInput
                ref="folderInputRef"
                size="small"
                v-model:value="inputValue"
                style="width: calc(100% - 24px); margin-top: 1px"
                @keydown.enter="saveFolder(data.key)"
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
              <AMenuItem key="2">重命名</AMenuItem>
              <AMenuItem key="3">删除</AMenuItem>
            </AMenu>
          </template>
        </ADropdown>
      </template>
    </ADirectoryTree>
  </div>
</template>
<script lang="ts" setup>
  import { PropType, ref, watch, unref } from "vue";
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
  import { useEventListener, useFocus } from "@vueuse/core";

  const props = defineProps({
    treeData: {
      type: Array as PropType<TreeDataItem[]>
    },
    //节点key
    nodeKey: { type: String, default: "id" },
    //节点标题
    nodeTitle: { type: String, default: "id" },
    //顶部节点父节点key
    topNodeParentKey: { type: String, default: "" }
  });
  const gData = ref<any[]>([]);
  const dataList: TreeProps["treeData"] = [];
  const folderInputRef = ref<Nullable<HTMLElement>>(null);
  const newFolder = "新目录";
  const newNode = () => {
    const key = buildUUID();
    return {
      id: key,
      parentId: props.topNodeParentKey,
      key,
      title: newFolder,
      isEdit: true,
      isLeaf: false
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
    addChildFolder(props.topNodeParentKey);
  };

  let inputBlur;
  const { focused } = useFocus(folderInputRef, { initialValue: true });
  const addChildFolder = (treeKey) => {
    let node;
    const child = newNode();
    //treeKey等于顶级节点父节点ID，直接添加在最顶层
    if (treeKey === props.topNodeParentKey) {
      node = gData.value;
    } else {
      const parent = findNode(gData.value, (node) => node.key === treeKey);
      if (!parent) return;
      if (!parent.children) {
        parent.children = [];
      }
      child.parentId = parent.id;
      node = parent.children;
    }
    inputValue.value = newFolder;
    if (node) {
      node.push(child);
    }
    if (treeKey) {
      expandedKeys.value = [treeKey];
      autoExpandParent.value = true;
    }
    selectedKeys.value = [child.key];
    focused.value = true;
    //此处延迟注册事件防止第一次加入新增时候触发blur事件,时间太短不生效(暂时不知道原因)
    setTimeout(() => {
      inputBlur = useEventListener(folderInputRef, "blur", () => {
        saveFolder(child.key);
      });
    }, 300);
  };

  const saveFolder = (key) => {
    //注销事件监听
    inputBlur();
    const node = findNode(gData.value, (node) => node.key === key);
    if (!node) return;
    node.title = unref(inputValue);
    node.isEdit = false;
    dataList.push({ key: node.key, title: node.title });
  };

  const editFolder = (treeKey) => {
    const node = findNode(gData.value, (node) => node.key === treeKey);
    inputValue.value = node.title;
    node.isEdit = true;
    inputBlur = useEventListener(folderInputRef, "blur", () => {
      saveFolder(node.key);
    });
  };

  const deleteFolder = (treeKey) => {
    const loop = (treeKey, nodes) => {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].key === treeKey) {
          nodes.splice(i, 1);
          return;
        }
        if (nodes[i].children) {
          loop(treeKey, nodes[i].children);
        }
      }
    };
    loop(treeKey, gData.value);
  };
  const onContextMenuClick = (menuKey: string, treeKey: string) => {
    switch (menuKey) {
      case "1":
        addChildFolder(treeKey);
        break;
      case "2":
        editFolder(treeKey);
        break;
      case "3":
        deleteFolder(treeKey);
        break;
    }
  };
</script>
<style scoped lang="less"></style>
