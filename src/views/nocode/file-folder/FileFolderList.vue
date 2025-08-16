<!--
 @description: 文件目录列表
 @author: mfish
 @date: 2023-07-28
 @version: V2.1.0
-->
<template>
  <div :class="prefixCls">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <div style="margin-top: 2px; width: 100%; display: flex; justify-content: space-between">
          <BasicUpload
            :modal-height="500"
            modal-title="上传数据文件"
            default-path="nocode/excel"
            :hide-column="['isPrivate', 'path']"
            :max-size="10"
            :accept="['.xls', '.xlsx', '.csv']"
            @success="handleUpload"
            :api="uploadApi"
            v-auth="['sys:mfApi:update', 'sys:mfApi:insert']"
          >
            <template #header>
              <div :class="`${prefixCls}-example`">
                <span class="title">文件数据规范（如右图）：</span>
                <img style="width: 600px" src="/resource/img/excel-data.png" alt="demo" />
              </div>
            </template>
          </BasicUpload>
          <InputSearch placeholder="输入文件名称" @search="onSearch" style="width: 260px" allow-clear />
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
                slot: 'update',
                auth: ['sys:mfApi:update', 'sys:mfApi:insert'],
                ifShow: record.fType === 1
              },
              {
                icon: 'ant-design:cloud-download-outlined',
                onClick: handleDownload.bind(null, record),
                auth: 'sys:mfApi:query',
                tooltip: '下载文件',
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
          >
            <template #update>
              <BasicUpload
                :modal-height="500"
                button-size="small"
                button-type="link"
                button-tooltip="更新文件"
                button-text=""
                icon-color="green"
                icon-size="16"
                :is-update="true"
                modal-title="上传数据文件"
                default-path="nocode/excel"
                :hide-column="['isPrivate', 'path']"
                :max-size="10"
                :accept="['.xls', '.xlsx', '.csv']"
                @success="handleUpdate(record.id, $event)"
                :api="uploadUpdateApi"
                :upload-params="{
                  fileKey: record.fileKey
                }"
                v-auth="['sys:mfApi:update', 'sys:mfApi:insert']"
              >
                <template #header>
                  <div :class="`${prefixCls}-example`">
                    <span class="title">文件数据规范（如右图）：</span>
                    <img style="width: 600px" src="/resource/img/excel-data.png" alt="demo" />
                  </div>
                </template>
              </BasicUpload>
            </template>
          </TableAction>
        </template>
        <template v-if="column.key === 'name'">
          <div style="display: flex; align-items: center; cursor: pointer" @click="folderClick(record)">
            <Icon :icon="getFileIconName(record.name)" v-if="record?.fType === 1" :color="iconColor" />
            <FolderTwoTone v-else :two-tone-color="iconColor" />
            <ATooltip :title="record.remark">
              <div class="name-a">{{ record.name }}</div>
            </ATooltip>
          </div>
        </template>
      </template>
    </BasicTable>
    <FolderMoveModal
      @register="registerFileMoveModal"
      @success="moveSuccess"
      :move-handle="updateMfFile"
      :api="getFileFolderTree"
    />
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, watch } from "vue";
  import { BasicTable, PaginationProps, TableAction, useTable } from "@mfish/core/components/Table";
  import { Tooltip as ATooltip } from "ant-design-vue";
  import { Icon } from "@mfish/core/components/Icon";
  import { useDesign, useRootSetting } from "@mfish/core/hooks";
  import { propTypes } from "@mfish/core/utils/PropTypes";
  import { FileFolder, FileFolderVo } from "@/api/nocode/model/FileFolderModel";
  import { columns } from "@/views/nocode/file-folder/fileFolder.data";
  import { useModal } from "@mfish/core/components/Modal";
  import FolderMoveModal from "@/views/nocode/api-folder/FolderMoveModal.vue";
  import { getFileFolderAndFile, getFileFolderTree } from "@/api/nocode/FileFolder";
  import { BasicUpload, FileItem } from "@mfish/core/components/Upload";
  import { uploadApi, uploadUpdateApi } from "@mfish/core/api";
  import { deleteMfFile, downloadMfFile, insertMfFile, updateMfFile } from "@/api/nocode/MfFile";
  import { getFileIconName } from "@mfish/core/utils/file/FileUtils";
  import { FolderTwoTone } from "@ant-design/icons-vue";
  import InputSearch from "@mfish/core/components/InputSearch";

  const props = defineProps({
    folderId: propTypes.string.def("")
  });

  const emit = defineEmits(["folderClick", "folderDelete", "apiCreate", "fileClick"]);
  const iconColor = useRootSetting().getThemeColor;
  const [registerFileMoveModal, { openModal: openFileMoveModal }] = useModal();
  watch(
    () => props.folderId,
    () => {
      onSearch();
    }
  );
  const { prefixCls } = useDesign("api-folder");

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

  onMounted(() => {
    onSearch();
  });

  /**
   * 上传
   */
  function handleUpload(files: FileItem[]) {
    const mfFiles = files.map((file) => ({
      fileKey: file.responseData?.fileKey,
      folderId: props.folderId,
      fileName: file.responseData?.fileName,
      fileSize: file.responseData?.fileSize
    }));
    insertMfFile(mfFiles).then(() => {
      handleSuccess();
    });
  }

  /**
   * 上传更新文件
   * @param id 唯一id
   * @param files 文件信息
   */
  function handleUpdate(id: string, files: FileItem[]) {
    const mfFiles = files.map((file) => ({
      id,
      fileKey: file.responseData?.fileKey,
      folderId: props.folderId,
      fileName: file.responseData?.fileName,
      fileSize: file.responseData?.fileSize
    }));
    if (mfFiles?.length > 0) {
      //上传更新只有单条
      updateMfFile(mfFiles[0]).then(() => {
        handleSuccess();
      });
    }
  }

  /**
   * 删除
   * @param folderVo
   */
  function handleDelete(folderVo: FileFolderVo) {
    if (folderVo.fType === 0) {
      emit("folderDelete", folderVo, (res) => {
        if (res) {
          reload();
        }
      });
      return;
    }
    if (folderVo.id) {
      deleteMfFile(folderVo.id).then(() => {
        handleSuccess();
      });
    }
  }

  function handleMove(folderVo: FileFolderVo) {
    openFileMoveModal(true, folderVo);
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
        getFileFolderAndFile({
          parentId: name ? undefined : props.folderId,
          name: name || undefined,
          pageNum: (getPaginationRef() as PaginationProps).current,
          pageSize: (getPaginationRef() as PaginationProps).pageSize
        })
    });
    reload();
  }

  function folderClick(record: FileFolderVo) {
    if (record.fType === 0) {
      emit("folderClick", record);
      return;
    }
    handleDownload(record);
  }

  function apiCreate(data: FileFolder) {
    emit("apiCreate", { sourceType: 1, ...data });
  }

  function moveSuccess() {
    reload();
  }

  function handleDownload(record) {
    downloadMfFile(record.id);
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-api-folder";
  .@{prefix-cls} {
    .name-a {
      margin-left: 8px;
      color: @main-color;
    }
    &-example {
      display: flex;
      justify-content: flex-start;
      margin: 0 0 10px 10px;

      .title {
        width: 100px;
      }
    }
  }
</style>
