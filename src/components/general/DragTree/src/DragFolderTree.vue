<!--
 @description: 拖动树
 @author: mfish
 @date: 2023/7/18
-->
<template>
  <div class="overflow-hidden bg-white" style="display: flex; flex-direction: column">
    <TreeHeader
      :title="props.showHeadTitle ? '目录' : ''"
      :search="true"
      :toolbar="true"
      @search="handleSearch"
      :expandAll="expandAll"
      :enterButton="props.enterButton"
    >
      <template #headerTools v-if="allowAdd">
        <Tooltip title="新增目录">
          <Button type="text" size="small" @click="addFolder()">
            <template #icon>
              <Icon icon="ant-design:folder-add-outlined" />
            </template>
          </Button>
        </Tooltip>
      </template>
    </TreeHeader>
    <slot name="treeTitle"></slot>
    <ScrollContainer v-show="gData && gData.length > 0">
      <ADirectoryTree
        class="draggable-tree"
        :draggable="allowDrag && draggable"
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
        <template #icon="{ key }">
          <Icon v-if="expandedKeys.includes(key)" icon="ant-design:folder-open-filled" :color="iconColor(key)" />
          <Icon v-else icon="ant-design:folder-filled" :color="iconColor(key)" />
        </template>
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
                <AMenu.Item key="1" v-if="allowAdd">
                  <template #icon>
                    <Icon icon="ant-design:sisternode-outlined" />
                  </template>
                  新增子目录
                </AMenu.Item>
                <AMenu.Item key="2" v-if="allowEdit">
                  <template #icon>
                    <Icon icon="ant-design:tool-outlined" />
                  </template>
                  重命名
                </AMenu.Item>
                <AMenu.Item key="3" v-if="allowDelete">
                  <template #icon>
                    <Icon icon="ant-design:delete-outlined" />
                  </template>
                  删除
                </AMenu.Item>
              </AMenu>
            </template>
          </ADropdown>
        </template>
      </ADirectoryTree>
    </ScrollContainer>
    <Empty v-show="!gData || gData.length === 0" :image="simpleImage" class="!mt-4" />
  </div>
</template>
<script lang="ts" setup>
  import { PropType, ref, watch, unref, reactive } from "vue";
  import { Empty, Button, Tree, Tooltip, Input as AInput, Dropdown as ADropdown, Menu as AMenu } from "ant-design-vue";
  import type { AntTreeNodeDropEvent, TreeProps } from "ant-design-vue/es/tree";
  import { TreeDataItem } from "ant-design-vue/es/tree/Tree";
  import TreeHeader from "/@/components/general/Tree/src/components/TreeHeader.vue";
  import Icon from "/@/components/general/Icon/src/Icon.vue";
  import { buildUUID } from "/@/utils/Uuid";
  import { findNode, findNodeAll } from "/@/utils/helper/TreeHelper";
  import { useDebounceFn, useEventListener, useFocus } from "@vueuse/core";
  import { ScrollContainer } from "/@/components/general/Container";
  import "/@/components/general/Tree/style";
  import { cloneDeep } from "lodash-es";
  import { useAppStore } from "/@/store/modules/App";
  const ADirectoryTree = Tree.DirectoryTree;
  const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
  const iconColor = (key: string) => (selectedKeys.value.includes(key) ? "white" : useAppStore().getThemeColor);

  const props = defineProps({
    treeData: {
      type: Array as PropType<TreeDataItem[]>
    },
    //节点key
    nodeKey: { type: String, default: "id" },
    //节点标题
    nodeTitle: { type: String, default: "id" },
    //顶部节点父节点key
    topNodeParentKey: { type: String, default: "" },
    showHeadTitle: { type: Boolean, default: true },
    allowDrag: { type: Boolean, default: true },
    allowAdd: { type: Boolean, default: true },
    allowEdit: { type: Boolean, default: true },
    allowDelete: { type: Boolean, default: true },
    enterButton: { type: Boolean, default: false }
  });
  const emit = defineEmits(["select", "expand", "save:insert", "save:update", "save:delete", "save:drag"]);
  const draggable = ref<boolean>(true);
  const gData = ref<any[]>([]);
  const dataList: TreeProps["treeData"] = [];
  const folderInputRef = ref<Nullable<HTMLInputElement>>(null);
  const newFolder = "新目录";
  interface NodeType {
    id: string;
    parentId: string;
    key: string;
    title: string;
    isEdit: boolean;
    isLeaf: boolean;
    parent?: NodeType;
  }
  const newNode = (): NodeType => {
    const key = buildUUID();
    return {
      id: key,
      parentId: props.topNodeParentKey,
      key,
      title: newFolder,
      isEdit: true,
      isLeaf: true
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
      let isLeaf = true;
      if (node.children && node.children.length > 0) {
        isLeaf = false;
        initData(node.children);
      }
      dataList.push({ key: node[props.nodeKey], title: node[props.nodeTitle] });
      node["key"] = node[props.nodeKey];
      node["title"] = node[props.nodeTitle];
      node["isLeaf"] = isLeaf;
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
    emit("expand", keys);
  };
  const onSelect = (keys: string[], e) => {
    selectedKeys.value = keys;
    selectEmit(undefined, e);
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
    emit("expand", expandedKeys.value);
    autoExpandParent.value = true;
  });
  function handleSearch(value: string) {
    searchValue.value = value;
  }

  const onRightClick = (event) => {
    selectedKeys.value = [event.node.key];
    selectEmit(undefined, event);
  };

  const buildFullNode = (node: NodeType, data: NodeType[]) => {
    if (!node.parentId) return;
    const pNode = findNode(data, (item) => item.id === node.parentId);
    if (!pNode) return;
    node.parent = pNode;
    buildFullNode(pNode, data);
  };

  const selectEmit = (node?, e?) => {
    if (!node) {
      node = { ...e.node.dataRef };
    }
    buildFullNode(node, cloneDeep(gData.value));
    emit("select", node);
  };

  function setSelect(key: string) {
    if (key) {
      const node = findNode(gData.value, (item) => item.id === key);
      if (!node) return;
      selectedKeys.value = [key];
      selectEmit({ ...node });
    }
  }
  function clearSelect() {
    selectedKeys.value = [];
    emit("select", undefined);
  }

  /**
   * 拖动处理逻辑
   * @param info 拖动事件
   */
  const onDrop = (info: AntTreeNodeDropEvent) => {
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos?.split("-") || [];
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    const data: NodeType[] = gData.value ? cloneDeep(gData.value) : [];
    let dragObj: NodeType | undefined;
    let dropObj: NodeType | undefined;
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
    /**
     * 获取拖动后需要改变的数据列表
     * @param pId 父ID
     * @param data 数据
     */
    const getChangeData = (pId: string, data: NodeType[]) => {
      return findNodeAll(data, (node) => node.parentId === pId);
    };
    /**
     * 原父节点样式变化
     * @param oldPId 父ID
     * @param data 数据集
     */
    const parentIconChange = (oldPId: string, data: NodeType[]): boolean => {
      const pNode = findNode(data, (node) => node.key === oldPId);
      if (pNode) {
        pNode.isLeaf = !(pNode.children && pNode.children.length > 0);
        if (pNode.isLeaf) {
          expandedKeys.value = expandedKeys.value.filter((item) => item !== oldPId);
          return true;
        }
      }
      return false;
    };
    loop(data, dragKey, (item: NodeType, index: number, arr: TreeProps["treeData"]) => {
      arr?.splice(index, 1);
      dragObj = item;
    });
    if (!dragObj) return;
    let oldPId: string;
    let expandChange = false;
    //调整顺序或拖出父节点
    if (info.dropToGap) {
      let ar: TreeProps["treeData"] = [];
      let i = 0;
      loop(data, dropKey, (item, index: number, arr: TreeProps["treeData"]) => {
        ar = arr;
        i = index;
        dropObj = item;
      });
      if (!dropObj) return;
      oldPId = dragObj.parentId;
      dragObj.parentId = dropObj.parentId;
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    } else {
      //拖为子节点
      oldPId = dragObj.parentId;
      loop(data, dropKey, (item) => {
        dropObj = item;
        if (!dragObj || !dropObj) return;
        item.children = item.children || [];
        item.children.unshift(dragObj);
        dragObj.parentId = dropObj.id;
        dropObj.isLeaf = false;
      });
      expandChange = !!dropObj;
    }
    emit("save:drag", dragObj, getChangeData(dragObj.parentId, data), (res: boolean) => {
      //拖动成功更新节点位置
      if (res) {
        if (expandChange && dropObj) {
          expandedKeys.value?.push(dropObj.key);
        }
        if (parentIconChange(oldPId, data) || expandChange) {
          emit("expand", expandedKeys.value);
        }
        gData.value = data;
        if (dragObj) {
          setSelect(dragObj.key);
        }
      }
    });
  };

  const getParentKey = (key: string | number, tree: TreeProps["treeData"]): string | number | undefined => {
    if (!tree) {
      return undefined;
    }
    let parentKey: string | number | undefined;
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

  const addFolder = useDebounceFn(() => {
    addChildFolder(props.topNodeParentKey);
  }, 200);

  const { focused } = useFocus(folderInputRef, { initialValue: true });
  const inputBlur = reactive({ key: "", inputBlur: () => {} });
  const addChildFolder = (treeKey) => {
    //判断是否存在未保存记录
    if (inputBlur.key) {
      saveFolder(inputBlur.key);
    }
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
      parent.isLeaf = false;
      node = parent.children;
    }
    inputValue.value = newFolder;
    if (node) {
      node.push(child);
    }
    if (treeKey) {
      expandedKeys.value = [treeKey];
      emit("expand", expandedKeys.value);
      autoExpandParent.value = true;
    }
    setSelect(child.key);
    focused.value = true;
    draggable.value = false;
    //此处延迟注册事件防止第一次加入新增时候触发blur事件,时间太短不生效(暂时不知道原因)
    setTimeout(() => {
      inputBlur.key = child.key;
      inputBlur.inputBlur = useEventListener(folderInputRef, "blur", () => {
        saveFolder(child.key);
      });
    }, 300);
  };

  const saveFolder = (key) => {
    try {
      const node = findNode(gData.value, (node) => node.key === key);
      if (!node) return;
      node.title = unref(inputValue);
      node.isEdit = false;
      const data = dataList.find((data) => data.key === key);
      const newNode = { ...node };
      if (data) {
        emit("save:update", newNode);
        data.title = node.title;
      } else {
        emit("save:insert", newNode);
        dataList.push({ key: newNode.key, title: newNode.title });
      }
      selectEmit(newNode);
    } finally {
      draggable.value = true;
      if (inputBlur.key) {
        inputBlur.inputBlur();
        inputBlur.key = "";
        inputBlur.inputBlur = () => {};
      }
    }
  };

  const editFolder = (treeKey) => {
    draggable.value = false;
    const node = findNode(gData.value, (node) => node.key === treeKey);
    inputValue.value = node.title;
    node.isEdit = true;
    inputBlur.key = node.key;
    inputBlur.inputBlur = useEventListener(folderInputRef, "blur", () => {
      saveFolder(node.key);
    });
  };

  const deleteFolder = (treeKey) => {
    const loop = (treeKey, nodes) => {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].key === treeKey) {
          emit("save:delete", nodes[i], (res) => {
            if (res) {
              nodes.splice(i, 1);
            }
          });
          return;
        }
        if (nodes[i].children) {
          loop(treeKey, nodes[i].children);
        }
      }
    };
    loop(treeKey, gData.value);
  };
  const onContextMenuClick = useDebounceFn((menuKey: string, treeKey: string) => {
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
  }, 200);
  defineExpose({ setSelect, clearSelect });
</script>
<style lang="less">
  .ant-tree {
    .ant-tree-treenode {
      .ant-tree-treenode-selected {
        &::before {
          background: #0a53be !important;
        }
      }
    }
  }
</style>
