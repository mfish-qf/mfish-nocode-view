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
      :expand-all="expandAll"
      :enter-button="props.enterButton"
    >
      <template #headerTools v-if="allowAdd">
        <Tooltip title="新增目录">
          <AButton type="link" size="small" @click.prevent.stop="addFolder()">
            <template #icon>
              <Icon icon="ant-design:folder-add-outlined" />
            </template>
          </AButton>
        </Tooltip>
      </template>
    </TreeHeader>
    <slot name="treeTitle"></slot>
    <ScrollContainer v-show="gData && gData.length > 0">
      <ADirectoryTree
        :key="dftKey"
        :draggable="allowDrag && draggable"
        block-node
        show-icon
        :tree-data="gData"
        @drop="onDrop"
        :expanded-keys="expandedKeys"
        :selected-keys="selectedKeys"
        @expand="onExpand"
        @select="onSelect"
        :auto-expand-parent="autoExpandParent"
        @right-click="onRightClick"
      >
        <template v-if="twoToneIcon" #icon="{ key }">
          <FolderOpenTwoTone
            :style="{ marginTop: '5px' }"
            v-if="expandedKeys.includes(key)"
            :two-tone-color="iconColor(key)"
          />
          <FolderTwoTone :style="{ marginTop: '5px' }" v-else :two-tone-color="iconColor(key)" />
        </template>
        <template v-else #icon="{ key }">
          <Icon v-if="expandedKeys.includes(key)" icon="ant-design:folder-open-filled" :color="iconColor(key)" />
          <Icon v-else icon="ant-design:folder-filled" :color="iconColor(key)" />
        </template>
        <template #title="{ title, data }">
          <ADropdown :trigger="['contextmenu']" placement="bottom" :arrow="{ pointAtCenter: true }">
            <template v-if="data.isEdit">
              <span>
                <AInput
                  ref="folderInputRef"
                  size="small"
                  v-model:value="inputValue"
                  style="width: calc(100% - 24px); margin-top: 1px"
                  @keydown.enter="saveFolder(data.key)"
                />
              </span>
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
              <AMenu @click="({ key: menuKey }) => onContextMenuClick(menuKey as string, data.key)">
                <AMenuItem key="1" v-if="allowAdd">
                  <template #icon>
                    <Icon icon="ant-design:sisternode-outlined" />
                  </template>
                  新增子目录
                </AMenuItem>
                <AMenuItem key="2" v-if="allowEdit">
                  <template #icon>
                    <Icon icon="ant-design:tool-outlined" />
                  </template>
                  重命名
                </AMenuItem>
                <AMenuItem key="3" v-if="allowDelete">
                  <template #icon>
                    <Icon icon="ant-design:delete-outlined" />
                  </template>
                  删除
                </AMenuItem>
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
  import { nextTick, PropType, reactive, ref, unref, watch } from "vue";
  import {
    Button as AButton,
    Dropdown as ADropdown,
    Empty,
    Input as AInput,
    Menu as AMenu,
    Tooltip,
    Tree
  } from "ant-design-vue";
  import type { AntTreeNodeDropEvent, TreeProps } from "ant-design-vue/es/tree";
  import { TreeDataItem } from "ant-design-vue/es/tree/Tree";
  import TreeHeader from "../../Tree/src/components/TreeHeader.vue";
  import { Icon } from "../../Icon";
  import { buildUUID } from "../../../utils/Uuid";
  import { findNode, findNodeAll } from "../../../utils/helper/TreeHelper";
  import { useDebounceFn, useEventListener, useFocus } from "@vueuse/core";
  import { ScrollContainer } from "../../Container";
  import "../../Tree/style";
  import { cloneDeep } from "lodash-es";
  import { useRootSetting } from "@core/hooks";
  import { useAppStore } from "@mfish/stores/modules";
  import { FolderOpenTwoTone, FolderTwoTone } from "@ant-design/icons-vue";
  import { Nullable } from "@mfish/types";

  const props = defineProps({
    treeData: {
      type: Array as PropType<TreeDataItem[]>
    },
    twoToneIcon: { type: Boolean, default: true },
    isDirectoryTree: { type: Boolean, default: false },
    // 节点key
    nodeKey: { type: String, default: "id" },
    // 节点标题
    nodeTitle: { type: String, default: "id" },
    // 顶部节点父节点key
    topNodeParentKey: { type: String, default: "" },
    showHeadTitle: { type: Boolean, default: true },
    allowDrag: { type: Boolean, default: true },
    allowAdd: { type: Boolean, default: true },
    allowEdit: { type: Boolean, default: true },
    allowDelete: { type: Boolean, default: true },
    enterButton: { type: Boolean, default: true }
  });
  const emit = defineEmits(["select", "expand", "save:insert", "save:update", "save:delete", "save:drag"]);
  const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
  const AMenuItem = AMenu.Item;
  const dftKey = ref<number>(1);
  const ADirectoryTree = props.isDirectoryTree ? Tree.DirectoryTree : Tree;
  const iconColor = (key: string) =>
    props.isDirectoryTree
      ? selectedKeys.value.includes(key)
        ? "white"
        : useAppStore().getThemeColor
      : useRootSetting().getThemeColor.value;
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
    children?: NodeType[];
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
    (value) => {
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
      dataList.push({ key: node[props.nodeKey], title: node[props.nodeTitle], isLeaf });
      node.key = node[props.nodeKey];
      node.title = node[props.nodeTitle];
      node.isLeaf = isLeaf;
    }
  };

  const expandedKeys = ref<string[]>([]);
  const selectedKeys = ref<string[]>([]);
  const searchValue = ref<string>("");
  const autoExpandParent = ref<boolean>(true);
  const expandAll = (val: boolean) => {
    expandedKeys.value = val ? (dataList.filter((item) => !item.isLeaf).map((item) => item.key) as string[]) : [];
  };
  const onExpand = (keys: any[]) => {
    expandedKeys.value = keys;
    autoExpandParent.value = false;
    emit("expand", keys);
  };
  const onSelect = (keys: any[], e: any) => {
    // 不允许不选中节点
    if (keys?.length === 0) return;
    selectedKeys.value = keys;
    selectEmit(undefined, e);
  };
  watch(searchValue, (value) => {
    expandedKeys.value = value
      ? (dataList
          .map((item) => {
            if (item.title.includes(value)) {
              return getParentKey(item.key, gData.value);
            }
            return null;
          })
          .filter((item, i, self) => item && self.indexOf(item) === i) as string[])
      : [];
    emit("expand", expandedKeys.value);
    autoExpandParent.value = true;
  });

  function handleSearch(value: string) {
    searchValue.value = value;
  }

  const onRightClick = (event: any) => {
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

  const selectEmit = async (node?: any, e?: any) => {
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
      const pNode = findNode(gData.value, (item) => item.id === node.parentId);
      if (!pNode) return;
      expandedKeys.value = [...expandedKeys.value, pNode.id];
      emit("expand", expandedKeys.value);
      autoExpandParent.value = true;
    }
  }

  /**
   * 外部设置节点名称
   * @param key
   * @param name
   */
  function setNodeName(key: string, name: string) {
    const node = findNode(gData.value, (item) => item.id === key);
    node.title = name;
    dftKey.value++;
  }

  function clearSelect() {
    selectedKeys.value = [];
    emit("select");
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
    const pIconChange = (oldPId: string, data: NodeType[]): boolean => {
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
    // 调整顺序或拖出父节点
    if (info.dropToGap) {
      let ar: TreeProps["treeData"] = [];
      let i = 0;
      loop(data, dropKey, (item: any, index: number, arr: TreeProps["treeData"]) => {
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
      // 拖为子节点
      oldPId = dragObj.parentId;
      loop(data, dropKey, (item: any) => {
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
      // 拖动成功更新节点位置
      if (res) {
        if (expandChange && dropObj) {
          expandedKeys.value?.push(dropObj.key);
        }
        if (pIconChange(oldPId, data) || expandChange) {
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
    for (const node of tree) {
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
  const inputBlur = reactive({
    key: "",
    inputBlur: () => {}
  });
  const addChildFolder = (treeKey: string) => {
    // 判断是否存在未保存记录
    if (inputBlur.key) {
      saveFolder(inputBlur.key);
    }
    let node: any;
    const child = newNode();
    // treeKey等于顶级节点父节点ID，直接添加在最顶层
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
      const listNode = dataList.find((item) => item.key === parent.id);
      if (listNode) {
        listNode.isLeaf = false;
      }
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
    // 此处延迟注册事件防止第一次加入新增时候触发blur事件,时间太短不生效(暂时不知道原因)
    setTimeout(() => {
      inputBlur.key = child.key;
      inputBlur.inputBlur = useEventListener(folderInputRef, "blur", () => {
        saveFolder(child.key);
      });
    }, 300);
  };

  const saveFolder = (key: string) => {
    try {
      const node = findNode(gData.value, (node) => node.key === key);
      if (!node) return;
      node.isEdit = false;
      node.title = unref(inputValue);
      const data = dataList.find((data) => data.key === key);
      const newNode = { ...node };
      if (data) {
        emit("save:update", newNode);
        data.title = node.title;
      } else {
        emit("save:insert", newNode);
        dataList.push({ key: newNode.key, title: newNode.title, isLeaf: true });
      }
      // 这里改变Key值，触发节点刷新。否则title修改后，界面上还显示原来的值
      dftKey.value++;
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

  const editFolder = (treeKey: string) => {
    draggable.value = false;
    const node = findNode(gData.value, (node) => node.key === treeKey);
    inputValue.value = node.title;
    node.isEdit = true;
    inputBlur.key = node.key;
    inputBlur.inputBlur = useEventListener(folderInputRef, "blur", () => {
      saveFolder(node.key);
    });
  };

  const deleteFolder = (treeKey: string, callback: (res: boolean) => void) => {
    const loop = (treeKey: string, nodes: any[], pNode?: any) => {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].key === treeKey) {
          emit("save:delete", nodes[i], (res: any) => {
            callback(res);
            if (res) {
              nodes.splice(i, 1);
              pNodeIconChange(pNode);
            }
          });
          return;
        }
        if (nodes[i].children) {
          loop(treeKey, nodes[i].children, nodes[i]);
        }
      }
    };
    loop(treeKey, gData.value);
  };
  const pNodeIconChange = (pNode: any) => {
    if (pNode) {
      pNode.isLeaf = !(pNode.children && pNode.children.length > 0);
      if (pNode.isLeaf) {
        nextTick(() => {
          expandedKeys.value = expandedKeys.value.filter((item) => item !== pNode.id);
          emit("expand", expandedKeys.value);
        });
      }
    }
  };

  const onContextMenuClick = useDebounceFn((menuKey: string, treeKey: string) => {
    switch (menuKey) {
      case "1": {
        addChildFolder(treeKey);
        break;
      }
      case "2": {
        editFolder(treeKey);
        break;
      }
      case "3": {
        deleteFolder(treeKey, (res) => {
          console.log(res);
        });
        break;
      }
    }
  }, 200);

  defineExpose({ setSelect, clearSelect, deleteFolder, setNodeName });
</script>
