<template>
  <BasicModal
    :width="modalWidth"
    :height="modalHeight"
    :title="modalTitle || t('component.upload.upload')"
    :ok-text="t('component.upload.close')"
    v-bind="$attrs"
    @register="register"
    @ok="handleOk"
    :after-close="handleCloseFunc"
    class="upload-modal"
    :show-cancel-btn="false"
  >
    <template #centerFooter>
      <a-button @click="handleStartUpload" color="success" :disabled="!getIsSelectFile" :loading="isUploadingRef">
        {{ getUploadBtnText }}
      </a-button>
    </template>
    <slot name="header"></slot>
    <div class="upload-modal-toolbar">
      <Alert :message="getHelpText" type="info" banner class="upload-modal-toolbar__text" />
      <Upload
        :accept="getStringAccept"
        :multiple="multiple"
        :before-upload="beforeUpload"
        :show-upload-list="false"
        class="upload-modal-toolbar__btn"
      >
        <a-button type="primary">
          {{ t("component.upload.choose") }}
        </a-button>
      </Upload>
    </div>
    <FileList :data-source="fileListRef" :columns="columns" :action-column="actionColumn" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, ref, toRefs, unref } from "vue";
  import { Alert, Upload } from "ant-design-vue";
  import { BasicModal, useModalInner } from "@core/components/Modal";
  import { useUploadType } from "./UseUpload";
  import { useMessage } from "@core/hooks/web/UseMessage";
  import { FileItem, UploadResultStatus } from "./Typing";
  import { basicProps, UploadColumnName } from "./Props";
  import { createActionColumn, createTableColumns } from "./data";
  import { checkImgType, getBase64WithFile } from "@core/utils/file/FileUtils";
  import { buildUUID } from "@core/utils/Uuid";
  import { isFunction } from "@core/utils/Is";
  import { warn } from "@core/utils/Log";
  import FileList from "./FileList.vue";
  import { useI18n } from "@core/hooks/web/UseI18n";
  import { SysFile } from "@core/api/storage/model/SysFileModel";

  const props = defineProps(basicProps);
  const emit = defineEmits(["change", "register", "delete", "success"]);

  //   是否正在上传
  const isUploadingRef = ref(false);
  const fileListRef = ref<FileItem[]>([]);
  const { accept, helpText, maxNumber, maxSize } = toRefs(props);
  const { t } = useI18n();
  const [register, { closeModal }] = useModalInner();
  const { getStringAccept, getHelpText } = useUploadType({
    acceptRef: accept,
    helpTextRef: helpText,
    maxNumberRef: maxNumber,
    maxSizeRef: maxSize
  });
  const { createMessage } = useMessage();
  const getIsSelectFile = computed(() => {
    return (
      fileListRef.value.length > 0 && !fileListRef.value.every((item) => item.status === UploadResultStatus.SUCCESS)
    );
  });
  const getUploadBtnText = computed(() => {
    const someError = fileListRef.value.some((item) => item.status === UploadResultStatus.ERROR);
    return isUploadingRef.value
      ? t("component.upload.uploading")
      : someError
        ? t("component.upload.reUploadFailed")
        : t("component.upload.startUpload");
  });

  // 上传前校验
  function beforeUpload(file: File) {
    const { size, name } = file;
    const { maxSize } = props;
    // 设置最大值，则判断
    if (maxSize && file.size / 1024 / 1024 >= maxSize) {
      createMessage.error(t("component.upload.maxSizeMultiple", [maxSize]));
      return false;
    }
    // 判断文件类型
    if (accept.value && accept.value?.length > 0 && !accept.value?.some((item) => name.endsWith(item))) {
      createMessage.error(t("component.upload.acceptUpload", [getStringAccept.value]));
      return false;
    }
    const commonItem = {
      uuid: buildUUID(),
      isPrivate: 1,
      path: props.defaultPath ?? "",
      file,
      size,
      name,
      percent: 0,
      type: name.split(".").pop()
    };
    // 生成图片缩略图
    if (checkImgType(file)) {
      getBase64WithFile(file).then(({ result: thumbUrl }) => {
        fileListRef.value = [
          ...unref(fileListRef),
          {
            thumbUrl,
            ...commonItem
          }
        ];
      });
    } else {
      fileListRef.value = [...unref(fileListRef), commonItem];
    }
    return false;
  }

  // 删除
  function handleRemove(record: FileItem) {
    const index = fileListRef.value.findIndex((item) => item.uuid === record.uuid);
    index !== -1 && fileListRef.value.splice(index, 1);
    emit("delete", record);
  }

  async function uploadApiByItem(item: FileItem) {
    const { api } = props;
    if (!api || !isFunction(api)) {
      return warn("上传接口必须是一个方法");
    }
    try {
      item.status = UploadResultStatus.UPLOADING;
      const result = await props.api(
        {
          ...props.uploadParams,
          file: item.file,
          isPrivate: item.isPrivate,
          path: item.path
        },
        (progressEvent: ProgressEvent) => {
          item.percent = Math.trunc((progressEvent.loaded / progressEvent.total) * 100);
        }
      );
      item.status = UploadResultStatus.SUCCESS;
      item.responseData = result;
      return item;
    } catch {
      item.status = UploadResultStatus.ERROR;
      return item;
    }
  }

  // 点击开始上传
  async function handleStartUpload() {
    const { maxNumber } = props;
    if (fileListRef.value.length > maxNumber) {
      return createMessage.warning(t("component.upload.maxNumber", [maxNumber]));
    }
    try {
      isUploadingRef.value = true;
      // 只上传不是成功状态的
      const uploadFileList = fileListRef.value.filter((item) => item.status !== UploadResultStatus.SUCCESS) || [];
      const data = await Promise.all(
        uploadFileList.map((item) => {
          return uploadApiByItem(item);
        })
      );
      isUploadingRef.value = false;
      // 生产环境:抛出错误
      const errorList = data.filter((item: any) => item.status !== UploadResultStatus.SUCCESS);
      if (errorList.length > 0) throw errorList;
      emit("success", data);
    } catch (error) {
      isUploadingRef.value = false;
      throw error;
    }
  }

  function handleOk() {
    closeModal();
  }

  async function handleCloseFunc() {
    if (isUploadingRef.value) {
      return createMessage.warning(t("component.upload.closeWarn"));
    }
    if (fileListRef.value.length > 0) {
      const fileList: SysFile[] = [];
      for (const item of fileListRef.value) {
        const { status, responseData } = item;
        if (status === UploadResultStatus.SUCCESS && responseData) {
          fileList.push(responseData);
        }
      }
      fileListRef.value = [];
      if (fileList.length > 0) {
        emit("change", fileList);
      }
    }
  }

  const columns = computed(() => {
    const cols: any[] = createTableColumns();
    if (!props.hideColumn) {
      return cols;
    }
    return cols.filter((item) => item.dataIndex && !props.hideColumn.includes(item.dataIndex as UploadColumnName));
  });
  const actionColumn: any = createActionColumn(handleRemove);
</script>
<style lang="less">
  .upload-modal {
    .ant-upload-list {
      display: none;
    }

    .ant-table-wrapper .ant-spin-nested-loading {
      padding: 0;
    }

    &-toolbar {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      &__btn {
        margin-left: 8px;
        text-align: right;
        flex: 1;
      }
    }
  }
</style>
