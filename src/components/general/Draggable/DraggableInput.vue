<!--
 @description: 拖动栏
 @author: mfish
 @date: 2023/8/17
-->
<template>
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
        item-key="name"
      >
        <template #item="{ index, element }">
          <div @mouseover="tagMouseOver(index)" @mouseleave="tagMouseLeave" style="position: relative">
            <slot v-bind="{ index, element } || {}" name="tag" v-if="element.slot"></slot>
            <ATag
              v-else
              class="pointer"
              :color="blockColor"
              @drop="handleDropItem($event, index)"
              @click="editBlock(index, element)"
            >
              <template #icon> <slot v-bind="{ index, element } || {}" name="tagIcon"></slot> </template>
              {{ element.name }}
            </ATag>
            <AButton v-if="!drag && curTagOver === index" class="close" shape="circle" @click="closeBlock(index)">
              <template #icon><CloseOutlined :style="{ fontSize: '12px', color: blockColor }" /></template>
            </AButton>
          </div>
        </template>
      </draggable>
      <ADropdown>
        <template #overlay>
          <AMenu v-if="!drag && menus.length > 0">
            <AMenuItem v-for="item in menus" :key="item" @click="childMenuClick($event, item.value)">
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
  import { computed, ref, watch } from "vue";
  import IconFont from "/@/components/general/Icon/src/IconFont.vue";
  import { DragMenu } from "/@/components/general/Draggable/DraggableType";
  import { lighten } from "/@/utils/Color";
  import { useAppStore } from "/@/store/modules/App";
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
  const emit = defineEmits(["dragChange", "menuClick", "addBlock", "editBlock", "closeBlock"]);
  const dragItems = ref<Object[]>([]);
  const dataTransferText = "Text";
  const blockColor = computed(() => {
    return lighten(useAppStore().getProjectConfig.themeColor, 10);
  });
  const curTagOver = ref<number>();
  const drag = ref<boolean>(false);
  watch(
    () => props.items,
    (val) => {
      dragItems.value = val;
    },
    { immediate: true }
  );
  function allowDrop(event) {
    event.preventDefault();
  }

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
  function drop(event) {
    addItem(event, undefined);
  }
  function handleDropItem(e, index: number) {
    //判断拖放在组件左边还是右边
    const newIndex = index + (e.offsetX < e.target.offsetWidth / 2 ? 0 : 1);
    addItem(e, newIndex);
    e.stopPropagation();
  }
  function addItem(event: any, index: number | undefined) {
    const item = event.dataTransfer.getData(dataTransferText);
    if (!item) return;
    if (index !== undefined) {
      dragItems.value.splice(index, 0, JSON.parse(item));
    } else {
      dragItems.value.push(JSON.parse(item));
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
      dragItems.value.push(item);
      emit("menuClick", item);
      emit("dragChange", dragItems.value);
    }
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
  .@{prefix-cls} {
    flex: 1;
    border: 1px #d9d9d9 solid;
    min-height: 32px;
    min-width: 350px;
    position: relative;
    width: fit-content;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 2px;

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
