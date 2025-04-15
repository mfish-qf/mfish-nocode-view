<!--
 @description: 大屏列表卡片
 @author: mfish
 @date: 2024/1/9
-->
<template>
  <ACard :class="prefixCls" hoverable :body-style="{ cursor: 'text' }">
    <template #cover>
      <div class="thumbnail" @click="cardClick">
        <FolderTwoTone v-if="data?.fType === 0" style="font-size: 100px" :two-tone-color="color" />
        <img v-else class="img" alt="thumbnail" :src="thumbnail" />
      </div>
    </template>
    <template #actions>
      <ATooltip v-if="data?.released" placement="bottom" title="撤回发布">
        <APopconfirm title="是否确认撤回发布" @confirm="handleRollback">
          <RollbackOutlined key="edit" :style="{ color: '#faad14' }" @click.stop />
        </APopconfirm>
      </ATooltip>
      <template v-else>
        <ATooltip placement="bottom" :title="data?.fType === 1 ? '编辑' : '重命名'">
          <EditTwoTone key="edit" :two-tone-color="color" @click.stop="editClick" />
        </ATooltip>
        <ATooltip placement="bottom" title="删除">
          <APopconfirm title="是否确认删除" @confirm="handleDelete">
            <DeleteTwoTone key="delete" two-tone-color="red" @click.stop />
          </APopconfirm>
        </ATooltip>
      </template>
      <Dropdown
        v-if="data?.fType === 1"
        :trigger="['hover']"
        :drop-menu-list="[
          {
            icon: 'ant-design:copy-outlined',
            text: '克隆',
            event: '1'
          },
          {
            icon: 'carbon:folder-move-to',
            text: '移动',
            event: '2',
            divider: true
          },
          {
            icon: 'ant-design:share-alt-outlined',
            text: '分享',
            event: '3'
          },
          {
            icon: 'ant-design:cloud-upload-outlined',
            text: '发布',
            event: '4'
          }
        ]"
        @menu-event="handleMenuClick"
      >
        <EllipsisOutlined @click.prevent.stop />
      </Dropdown>
    </template>
    <div class="published-tag" v-if="data?.released">已发布</div>
    <div v-if="!isEdit" class="title">{{ title }}</div>
    <AInput
      ref="titleInputRef"
      class="title"
      v-else
      v-model:value="title"
      @click.stop
      @blur="updateTitle"
      @press-enter="inputEnter"
    />
    <div class="description" @click.stop>{{ data?.remark ? data?.remark : data?.name }}</div>
  </ACard>
  <ScreenShare :title="title" :screen-id="props.data?.id" :open="shareOpen" @close="() => (shareOpen = false)" />
  <ScreenResourceModal @register="registerModal" @success="releaseSuccess" />
</template>
<script lang="ts" setup>
  import { DeleteTwoTone, EditTwoTone, EllipsisOutlined, FolderTwoTone, RollbackOutlined } from "@ant-design/icons-vue";
  import { Card as ACard, Input as AInput, Popconfirm as APopconfirm, Tooltip as ATooltip } from "ant-design-vue";
  import { Dropdown } from "@mfish/core/components/Dropdown";
  import { deleteScreenResource, ScreenFolderVo, updateScreenFolder } from "@mfish/nocode";
  import { useDesign, useRootSetting } from "@mfish/core/hooks";
  import type { PropType } from "vue";
  import { nextTick, ref, watchEffect } from "vue";
  import { setImage } from "@mfish/core/utils/file/FileUtils";
  import { Nullable } from "@mfish/types";
  import ScreenResourceModal from "@/views/nocode/mf-screen/ScreenResourceModal.vue";
  import { useModal } from "@mfish/core/components/Modal";
  import ScreenShare from "@/views/nocode/mf-screen/ScreenShare.vue";

  const props = defineProps({
    data: { type: Object as PropType<ScreenFolderVo> },
    index: { type: Number, default: 0 }
  });
  const emit = defineEmits([
    "cardClick",
    "handleDelete",
    "folderRename",
    "folderMove",
    "cardEdit",
    "cardClone",
    "cardReleased",
    "cardRollback"
  ]);
  const color = useRootSetting().getThemeColor;
  const { prefixCls } = useDesign("screen-card");
  const thumbnail = ref<string>("");
  const isEdit = ref<boolean>(false);
  const shareOpen = ref<boolean>(false);
  const [registerModal, { openModal }] = useModal();

  watchEffect(() => {
    setImage(props.data?.thumbnail, "", thumbnail);
  });
  const title = ref<string>(props?.data?.name ?? "");
  const titleInputRef = ref<Nullable<HTMLInputElement>>(null);

  function cardClick() {
    emit("cardClick", props.data);
  }

  function handleDelete() {
    emit("handleDelete", props.data);
  }

  function handleMenuClick({ event }) {
    if (event === "1") {
      emit("cardClone", props.data);
      return;
    }
    if (event === "2") {
      emit("folderMove", props.data);
      return;
    }
    if (event === "3") {
      shareClick();
      return;
    }
    if (event === "4") {
      releaseClick();
    }
  }

  function shareClick() {
    shareOpen.value = true;
  }

  async function releaseClick() {
    if (!props.data?.id) return;
    openModal(true, {
      sourceId: props.data?.id,
      name: props.data?.name,
      remark: props.data?.remark,
      picKey: props.data?.thumbnail,
      price: 0
    });
  }

  function editClick() {
    if (props.data?.fType === 0) {
      isEdit.value = true;
      nextTick(() => {
        titleInputRef.value?.focus();
      });
      return;
    }
    emit("cardEdit", props.data);
  }

  function inputEnter(e) {
    // 主动触发离开防止blur事件触发两次
    e.target.blur(e, true);
  }

  function updateTitle() {
    if (props.data?.fType === 0) {
      isEdit.value = false;
      if (props.data.name !== title.value) {
        const value = { id: props.data.id, name: title.value };
        updateScreenFolder(value).then();
        emit("folderRename", value);
      }
    }
  }

  function releaseSuccess() {
    emit("cardReleased", props.index);
  }

  function handleRollback() {
    if (!props.data?.id) return;
    deleteScreenResource(props.data.id).then((res) => {
      if (res) {
        emit("cardRollback", props.index);
      }
    });
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-screen-card";
  [data-theme="dark"] {
    .@{prefix-cls} {
      .title {
        color: rgba(255, 255, 255, 0.88);
      }

      .description {
        color: rgba(255, 255, 255, 0.45);
      }

      &:hover {
        box-shadow: 0 0 8px 4px rgba(255, 255, 255, 0.1);
      }

      .published-tag {
        box-shadow: 1px 1px 4px 1px rgba(255, 255, 255, 0.3);
      }
    }

    .@{prefix-cls}-share {
      color: @screen-item-normal-color;
    }
  }

  .@{prefix-cls} {
    border-radius: 8px;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.05);
    transition: all 0.25s ease-in;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 10px;
    height: 34vh;
    min-height: 258px;

    &:hover {
      box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
      transform: scale(1.01);
    }

    .thumbnail {
      display: flex;
      align-items: center;
      justify-content: center;

      .img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        opacity: 90%;
        border-radius: 8px;
      }
    }

    .title {
      color: rgba(0, 0, 0, 0.88);
      font-weight: 600;
      font-size: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 8px;
      cursor: text;
    }

    .description {
      color: rgba(0, 0, 0, 0.45);
      cursor: text;
    }

    .published-tag {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      padding: 2px 6px;
      font-size: 12px;
      font-weight: 500;
      color: #fff;
      background: @main-color;
      border-radius: 4px 0 4px 0;
      box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
    }
  }

  .share-title {
    width: calc(100% - 20px);
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
<style lang="less">
  @prefix-cls: ~"@{namespace}-screen-card";
  .@{prefix-cls} {
    .ant-card-cover {
      flex: 1;
      display: flex;
      align-items: center;
      overflow: hidden;
      margin: 20px 20px 0 20px;
      border-radius: 8px;
    }
  }
</style>
