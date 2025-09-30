<!--
 @description: 大屏列表
 @author: mfish
 @date: 2024/1/9
-->
<template>
  <div :class="prefixCls">
    <AList :grid="{ xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 5 }" :data-source="data">
      <template #header>
        <div class="header">
          <ScreenResource @clone-screen="(e) => cloneScreen({ id: e, isResource: true })" />
          <InputSearch placeholder="输入大屏名称" @search="onSearch" style="width: 320px" allow-clear />
        </div>
      </template>
      <template #renderItem="{ item, index }">
        <ACard v-if="index === 0" v-auth="'sys:screen:insert'" class="add-screen">
          <AButton type="primary" @click="createScreen" pre-icon="ant-design:plus-outlined"> 新建大屏</AButton>
        </ACard>
        <ScreenCard
          v-else
          :key="listKey"
          :data="item"
          :index="index"
          @card-click="folderClick(item)"
          @handle-delete="handleDelete"
          @folder-rename="folderRename"
          @folder-move="folderMove"
          @card-edit="editScreen"
          @card-clone="cloneScreen"
          @card-released="releasedScreen"
          @card-rollback="rollbackScreen"
        />
      </template>
    </AList>
    <!-- 多插入了一条新增按钮，所以不采用list自带分页，单独实现分页 -->
    <div class="flex justify-end mb-2 mr-2">
      <Pagination class="flex" v-bind="paginationProp" />
    </div>
  </div>
  <FolderMoveModal
    @register="registerFolderMoveModal"
    @success="moveSuccess"
    :api="getScreenFolderTree"
    :move-handle="updateMfScreen"
  />
  <PreviewModal @register="registerPreviewModal" @clone-screen="(e) => cloneScreen({ id: e })" />
</template>
<script setup lang="ts">
  import ScreenCard from "@/views/nocode/screen-folder/ScreenCard.vue";
  import { computed, ref, watch } from "vue";
  import { Card as ACard, List as AList, Pagination, theme } from "ant-design-vue";
  import { propTypes } from "@mfish/core/utils/PropTypes";
  import {
    deleteMfScreen,
    getScreenFolderAndFile,
    getScreenFolderTree,
    SCREEN_SAVE,
    updateMfScreen
  } from "@mfish/nocode";
  import { useDesign } from "@mfish/core/hooks";
  import { FileFolderVo } from "@/api/nocode/model/FileFolderModel";
  import { usePagination } from "@mfish/core/utils/PageUtils";
  import FolderMoveModal from "@/views/nocode/api-folder/FolderMoveModal.vue";
  import { useModal } from "@mfish/core/components/Modal";
  import { useOutsideOpen } from "@mfish/core/utils/OutsideOpenUtils";
  import { router } from "@mfish/core/router";
  import InputSearch from "@mfish/core/components/InputSearch";
  import PreviewModal from "@/views/nocode/screen-folder/PreviewModal.vue";
  import ScreenResource from "@/views/nocode/screen-resource/ScreenResource.vue";

  const props = defineProps({
    folderId: propTypes.string.def("")
  });
  const emit = defineEmits(["folderClick", "folderDelete", "folderRename"]);
  const data = ref();
  const { paginationProp, setCurrentPage, getPageNum, getPageSize, setTotal } = usePagination(pageRefresh);
  const { prefixCls } = useDesign("screen-list");
  const listKey = ref<number>(1);
  const [registerFolderMoveModal, { openModal: openFolderMoveModal }] = useModal();
  const [registerPreviewModal, { openModal: openPreviewModal }] = useModal();
  const { open } = useOutsideOpen(SCREEN_SAVE, pageRefresh);
  const screenUrl = "/low-code/mf-screen/config";
  const { token } = theme.useToken();
  const bgColor = computed(() => token.value.colorInfoBg);

  watch(
    () => props.folderId,
    (val) => {
      setCurrentPage(1);
      fetch(val);
    },
    { immediate: true }
  );

  function pageRefresh() {
    fetch(props.folderId);
  }

  async function fetch(folderId?: string, name?: string) {
    const result = await getScreenFolderAndFile({
      parentId: folderId,
      pageNum: getPageNum(),
      name,
      pageSize: getPageSize()
    });
    data.value = [{}, ...result.list];
    setTotal(result.total);
    listKey.value++;
  }

  function onSearch(val) {
    if (val) {
      fetch(undefined, val);
      return;
    }
    fetch(props.folderId);
  }

  function folderClick(record: FileFolderVo) {
    if (record.fType === 0) {
      emit("folderClick", record);
      return;
    }
    openPreviewModal(true, { id: record?.id });
  }

  function handleDelete(folderVo: FileFolderVo) {
    if (folderVo.fType === 0) {
      emit("folderDelete", folderVo, (res) => {
        if (res) {
          fetch(props.folderId);
        }
      });
    } else if (folderVo.id) {
      deleteMfScreen(folderVo.id).then((res) => {
        if (res) {
          fetch(props.folderId);
        }
      });
    }
  }

  function folderRename(value) {
    data.value.forEach((item) => {
      if (item.id === value.id) {
        item.name = value.name;
      }
    });
    emit("folderRename", value);
  }

  function folderMove(data) {
    openFolderMoveModal(true, data);
  }

  function moveSuccess() {
    pageRefresh();
  }

  function createScreen() {
    const routeData = router.resolve({
      path: screenUrl,
      query: { folderId: props.folderId }
    });
    open(routeData);
  }

  function editScreen(data) {
    const routeData = router.resolve({
      path: screenUrl,
      query: { id: data.id }
    });
    open(routeData);
  }

  function cloneScreen(data) {
    const routeData = router.resolve({
      path: screenUrl,
      query: { folderId: props.folderId, id: data.id, isResource: data.isResource }
    });
    open(routeData);
  }

  function releasedScreen(index) {
    if (data.value.length > index) {
      data.value[index].released = 0;
    }
  }

  function rollbackScreen(index) {
    if (data.value.length > index) {
      data.value[index].released = null;
    }
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-screen-list";
  [data-theme="dark"] {
    .@{prefix-cls} {
      .add-screen {
        &:hover {
          box-shadow: 0 0 8px 4px rgba(255, 255, 255, 0.1);
        }
      }
    }
  }

  .@{prefix-cls} {
    .ant-list-header {
      border-block-end: none !important;
    }

    .header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 12px;
      margin: 0 10px 0 10px;
    }

    .add-screen {
      border-radius: 8px;
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.05);
      transition: all 0.25s ease-in;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px;
      height: 34vh;
      min-height: 258px;
      background-color: v-bind(bgColor);

      &:hover {
        box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
        transform: scale(1.01);
      }
    }
  }
</style>
