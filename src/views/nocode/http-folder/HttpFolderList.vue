<!--
 @description: HTTP目录列表
 @author: mfish
 @date: 2023-07-28
 @version: V2.1.1
-->
<template>
  <div :class="prefixCls">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <div style="margin-top: 2px; width: 100%; display: flex; justify-content: space-between">
          <AButton type="primary" @click="handleCreate" v-auth="'sys:mfApi:insert'" pre-icon="ant-design:plus-outlined">
            新建HTTP请求
          </AButton>
          <InputSearch placeholder="输入HTTP请求路径" @search="onSearch" style="width: 260px" allow-clear />
        </div>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'carbon:folder-move-to',
                color: 'blue',
                onClick: handleMove.bind(null, record),
                auth: ['sys:mfApi:update', 'sys:mfApi:insert'],
                tooltip: '移动',
                ifShow: record.fType === 1
              },
              {
                icon: 'ant-design:edit-outlined',
                color: 'orange',
                onClick: handleUpdate.bind(null, record),
                auth: 'sys:mfApi:update',
                tooltip: '编辑HTTP请求',
                ifShow: record.fType === 1
              },
              {
                icon: 'carbon:api-1',
                color: 'orange',
                onClick: apiCreate.bind(null, record),
                auth: 'sys:mfApi:insert',
                tooltip: '创建API',
                ifShow: record.fType === 1
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: ['sys:mfApi:update', 'sys:mfApi:insert'],
                tooltip: '删除'
              }
            ]"
          />
        </template>
        <template v-if="column.key === 'name'">
          <div style="display: flex; align-items: center; cursor: pointer" @click="folderClick(record)">
            <DictTag v-if="record?.fType === 1" code="http_request_method" :value="record.requestMethod" />
            <FolderTwoTone v-else :two-tone-color="iconColor" />
            <div class="name-a">{{ record.name }}</div>
          </div>
        </template>
        <template v-if="column.key === 'requestUrl'">
          <div class="name-a" @click="handleUpdate(record)">{{ record.requestUrl }}</div>
        </template>
      </template>
    </BasicTable>
    <FolderMoveModal @register="registerHttpMoveModal" @success="moveSuccess" :api="getHttpFolderTree" />
    <MfHttpModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, watch } from "vue";
  import { BasicTable, PaginationProps, TableAction, useTable } from "@mfish/core/components/Table";
  import { useDesign, useRootSetting } from "@mfish/core/hooks";
  import { propTypes } from "@mfish/core/utils/PropTypes";
  import { HttpFolder, HttpFolderVo } from "@/api/nocode/model/HttpFolderModel";
  import { columns } from "@/views/nocode/http-folder/httpFolder.data";
  import { useModal } from "@mfish/core/components/Modal";
  import FolderMoveModal from "@/views/nocode/api-folder/FolderMoveModal.vue";
  import { getHttpFolderAndHttp, getHttpFolderTree } from "@/api/nocode/HttpFolder";
  import { FolderTwoTone } from "@ant-design/icons-vue";
  import InputSearch from "@mfish/core/components/InputSearch";
  import MfHttpModal from "@/views/nocode/mf-http/MfHttpModal.vue";
  import { DictTag } from "@mfish/core/components/DictTag";
  import { deleteMfHttp } from "@mfish/nocode";

  const props = defineProps({
    folderId: propTypes.string.def("")
  });

  const emit = defineEmits(["folderClick", "folderDelete", "apiCreate", "httpClick"]);
  const [registerHttpMoveModal, { openModal: openHttpMoveModal }] = useModal();
  watch(
    () => props.folderId,
    () => {
      onSearch();
    }
  );
  const { prefixCls } = useDesign("http-folder");
  const iconColor = useRootSetting().getThemeColor;
  const [registerTable, { reload, getPaginationRef, setPagination, setProps }] = useTable({
    title: "",
    columns,
    useSearchForm: false,
    showTableSetting: false,
    bordered: false,
    showIndexColumn: false,
    resizeHeightOffset: 52,
    actionColumn: {
      width: 120,
      title: "操作",
      dataIndex: "action"
    }
  });
  const [registerModal, { openModal }] = useModal();
  onMounted(() => {
    onSearch();
  });

  /**
   * 删除
   * @param folderVo
   */
  function handleDelete(folderVo: HttpFolderVo) {
    if (folderVo.fType === 0) {
      emit("folderDelete", folderVo, (res) => {
        if (res) {
          reload();
        }
      });
      return;
    }
    if (folderVo.id) {
      deleteMfHttp(folderVo.id).then(() => {
        reload();
      });
    }
  }

  function handleMove(folderVo: HttpFolderVo) {
    openHttpMoveModal(true, folderVo);
  }

  /**
   * 新建
   */
  function handleCreate() {
    openModal(true, { folderId: props.folderId });
  }

  function handleUpdate(record) {
    openModal(true, { folderId: props.folderId, id: record.id, isUpdate: true });
  }

  /**
   * 处理完成
   */
  function handleSuccess() {
    onSearch();
  }

  function onSearch(name?: string) {
    setPagination({ current: 1 });
    setProps({
      api: () =>
        getHttpFolderAndHttp({
          parentId: name ? undefined : props.folderId,
          name: name || undefined,
          pageNum: (getPaginationRef() as PaginationProps).current,
          pageSize: (getPaginationRef() as PaginationProps).pageSize
        })
    });
    reload();
  }

  function folderClick(record: HttpFolderVo) {
    if (record.fType === 0) {
      emit("folderClick", record);
      return;
    }
    emit("apiCreate", { sourceType: 2, ...record });
  }

  function apiCreate(data: HttpFolder) {
    emit("apiCreate", { sourceType: 2, ...data });
  }

  function moveSuccess() {
    reload();
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-http-folder";
  .@{prefix-cls} {
    .name-a {
      margin-left: 8px;
      cursor: pointer;
      color: @main-color;
    }
  }
</style>
