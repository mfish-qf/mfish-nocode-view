<!--
 @description: 拖动栏
 @author: mfish
 @date: 2023/8/17
-->
<template>
  <div :class="`${prefixCls}-header-bar`">
    <slot name="headerBar" v-bind="{ headerCallBack }"></slot>
  </div>
  <div :class="prefixCls" @dragover="allowDrop" @drop="drop">
    <div class="frame">
      <draggable
        class="block"
        v-if="dragItems.length > 0"
        touchStartThreshold="50"
        :list="dragItems"
        animation="300"
        :force-fallback="true"
        @start="onStart"
        @end="onEnd"
        @update="onUpdate"
        item-key="id"
      >
        <template #item="{ index, element }">
          <div @mouseover="tagMouseOver(index)" @mouseleave="tagMouseLeave" style="position: relative">
            <div @drop="handleDropItem($event, index)">
              <slot v-bind="{ index, element } || {}" name="tag" v-if="element.slot"></slot>
              <ATag v-else class="pointer" :color="blockColor" @click="editBlock(index, element)">
                <template #icon> <slot v-bind="{ index, element } || {}" name="tagIcon"></slot> </template>
                {{ element.name }}
              </ATag>
            </div>
            <AButton
              v-if="!drag && curTagOver === index && !element.hideClose"
              class="close"
              shape="circle"
              @click="closeBlock(index)"
            >
              <template #icon><CloseOutlined :style="{ fontSize: '10px', color: blockColor }" /></template>
            </AButton>
          </div>
        </template>
      </draggable>
      <ADropdown>
        <template #overlay>
          <AMenu v-if="!drag && menus.length > 0">
            <AMenuItem v-for="(item, index) in menus" :key="index" @click="childMenuClick($event, item.value)">
              <div :class="`${prefixCls}-menus`" draggable="true" @dragstart="menuDrag($event, item.value)">
                <PlusOutlined />
                <div style="margin-left: 7px">
                  {{ item.name }}
                  <IconFont :icon="item.icon" :color="item.color" />
                </div>
              </div>
            </AMenuItem>
          </AMenu>
        </template>
        <ATag class="pointer" color="default" @click="addBlock">
          <template #icon>
            <Icon :icon="addIcon" style="font-size: 12px" />
          </template>
          {{ addTitle }}
        </ATag>
      </ADropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
  import draggable from "vuedraggable";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import Icon from "/@/components/general/Icon/src/Icon.vue";
  import { Tag as ATag, Menu as AMenu, Dropdown as ADropdown, Button as AButton } from "ant-design-vue";
  import { PlusOutlined, CloseOutlined } from "@ant-design/icons-vue";
  import { ref, watchEffect } from "vue";
  import IconFont from "/@/components/general/Icon/src/IconFont.vue";
  import { DragMenu } from "/@/components/general/Draggable/DraggableType";
  import { lighten } from "/@/utils/Color";
  import { useRootSetting } from "/@/hooks/setting/UseRootSetting";
  const AMenuItem = AMenu.Item;
  const { prefixCls } = useDesign("draggable-input");
  const props = defineProps({
    items: {
      type: Array as PropType<Array<Object>>,
      default: () => []
    },
    addIcon: { type: String, default: "ant-design:plus-outlined" },
    addTitle: { type: String, default: "添加" },
    menus: { type: Array as PropType<DragMenu<Object>[]>, default: () => [] }
  });
  const emit = defineEmits(["dragChange", "blockBuild", "addBlock", "editBlock", "closeBlock"]);
  const dragItems = ref<Object[]>([]);
  const dataTransferText = "Text";
  const blockColor = lighten(useRootSetting().getThemeColor.value, 10);

  const curTagOver = ref<number>();
  const drag = ref<boolean>(false);
  watchEffect(() => {
    dragItems.value = props.items;
  });
  function allowDrop(event) {
    event.preventDefault();
  }
  //头回调
  const headerCallBack = (item: any) => {
    addItem(item, undefined);
  };

  const onStart = () => {
    drag.value = true;
  };
  //拖拽结束的事件
  const onEnd = () => {
    drag.value = false;
  };
  const onUpdate = () => {
    emit("dragChange", dragItems.value);
  };
  function drop(event: any) {
    event.stopPropagation();
    if (!blockBuildEvent(undefined, JSON.parse(event.dataTransfer.getData(dataTransferText)))) return;
    dropCreateItem(event, undefined);
  }
  function handleDropItem(e, index: number) {
    e.stopPropagation();
    //判断拖放在组件左边还是右边
    const newIndex = index + (e.offsetX < e.target.offsetWidth / 2 ? 0 : 1);
    //如果存在事件回调，走回调添加项
    if (!blockBuildEvent(newIndex, JSON.parse(e.dataTransfer.getData(dataTransferText)))) return;
    dropCreateItem(e, newIndex);
  }
  function dropCreateItem(event: any, index: number | undefined) {
    const item = event.dataTransfer.getData(dataTransferText);
    if (!item) return;
    addItem(JSON.parse(item), index);
  }
  function addItem(item: object, index: number | undefined) {
    if (index !== undefined) {
      dragItems.value.splice(index, 0, item);
    } else {
      dragItems.value.push(item);
    }
    emit("dragChange", dragItems.value);
  }
  function menuDrag(event, item) {
    event.dataTransfer.setData(dataTransferText, JSON.stringify(item));
    event.stopPropagation();
  }
  function addBlock() {
    emit("addBlock");
  }
  function editBlock(index: number, item: any) {
    emit("editBlock", index, item);
  }
  function childMenuClick(event, item) {
    event.stopPropagation();
    if (item) {
      //如果存在事件回调，走回调添加项
      if (!blockBuildEvent(undefined, item)) return;
      dragItems.value.push(item);
      emit("dragChange", dragItems.value);
    }
  }

  /**
   * 块创建事件 可以在创建前进行拦截
   * @param index 块所在索引
   * @param item 块信息
   */
  function blockBuildEvent(index: number | undefined, item: DragMenu<Object>) {
    let isCreate = true;
    emit("blockBuild", index, item, (create: boolean) => {
      isCreate = create;
    });
    //是否创建块 返回false内部不创建块 又外部控制
    return isCreate;
  }
  function tagMouseOver(index: number) {
    curTagOver.value = index;
  }
  function tagMouseLeave() {
    curTagOver.value = undefined;
  }
  function closeBlock(index: number) {
    const delItem = { ...dragItems.value[index] };
    dragItems.value.splice(index, 1);
    emit("closeBlock", index, delItem, dragItems);
    emit("dragChange", dragItems.value);
  }
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-draggable-input";
  [data-theme="dark"] {
    .@{prefix-cls} {
      border: 1px #303030 solid;
      .close {
        background-color: #303030;
      }
    }
  }
  .@{prefix-cls}-header-bar {
    display: flex;
    margin-bottom: 3px;
  }
  .@{prefix-cls} {
    flex: 1;
    border: 1px #d9d9d9 solid;
    min-height: 32px;
    min-width: 350px;
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 2px;
    border-radius: 6px;

    .frame {
      margin-left: 8px;
      display: flex;
      align-items: center;
    }
    .block {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      max-width: 800px;
    }
    .move {
      border: none;
      cursor: move;
    }
    .pointer {
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 24px;
      margin-top: 2px;
    }
    .close {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16px;
      height: 16px;
      min-width: 16px;
      position: absolute;
      z-index: 1;
      top: -6px;
      right: 2px;
    }
  }
  .@{prefix-cls}-menus {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
</style>
