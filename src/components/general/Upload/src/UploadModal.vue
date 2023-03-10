<template>
  <BasicModal
    width="900px"
    :title="t('component.upload.upload')"
    :okText="t('component.upload.close')"
    v-bind="$attrs"
    @register="register"
    @ok="handleOk"
    :afterClose="handleCloseFunc"
    class="upload-modal"
    :showCancelBtn="false"
  >
    <template #centerFooter>
      <a-button
        @click="handleStartUpload"
        color="success"
        :disabled="!getIsSelectFile"
        :loading="isUploadingRef"
      >
        {{ getUploadBtnText }}
      </a-button>
    </template>

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
    <FileList :dataSource="fileListRef" :columns="columns" :actionColumn="actionColumn" />
  </BasicModal>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs, unref, computed } from "vue";
import { Upload, Alert } from "ant-design-vue";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { useUploadType } from "./UseUpload";
import { useMessage } from "/@/hooks/web/UseMessage";
import { FileItem, UploadResultStatus } from "./Typing";
import { basicProps } from "./Props";
import { createTableColumns, createActionColumn } from "./data";
import { checkImgType, getBase64WithFile } from "/@/utils/FileUtils";
import { buildUUID } from "/@/utils/Uuid";
import { isFunction } from "/@/utils/Is";
import { warn } from "/@/utils/Log";
import FileList from "./FileList.vue";
import { useI18n } from "/@/hooks/web/UseI18n";
import { SysFile } from "/@/api/storage/model/SysFileModel";

export default defineComponent({
  components: { BasicModal, Upload, Alert, FileList },
  props: {
    ...basicProps
  },
  emits: ["change", "register", "delete"],
  setup(props, { emit }) {
    const state = reactive<{ fileList: FileItem[] }>({
      fileList: []
    });
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
        fileListRef.value.length > 0 &&
        !fileListRef.value.every((item) => item.status === UploadResultStatus.SUCCESS)
      );
    });
    const getUploadBtnText = computed(() => {
      const someError = fileListRef.value.some(
        (item) => item.status === UploadResultStatus.ERROR
      );
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
      const commonItem = {
        uuid: buildUUID(),
        isPrivate: 1,
        path: "",
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
            ...(props.uploadParams || {}),
            file: item.file,
            isPrivate: item.isPrivate,
            path: item.path
          },
          function onUploadProgress(progressEvent: ProgressEvent) {
            const complete = ((progressEvent.loaded / progressEvent.total) * 100) | 0;
            item.percent = complete;
          }
        );
        item.status = UploadResultStatus.SUCCESS;
        item.responseData = result;
        return {
          success: true,
          error: null
        };
      } catch (e) {
        item.status = UploadResultStatus.ERROR;
        return {
          success: false,
          error: e
        };
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
        const uploadFileList =
          fileListRef.value.filter((item) => item.status !== UploadResultStatus.SUCCESS) || [];
        const data = await Promise.all(
          uploadFileList.map((item) => {
            return uploadApiByItem(item);
          })
        );
        isUploadingRef.value = false;
        // 生产环境:抛出错误
        const errorList = data.filter((item: any) => !item.success);
        if (errorList.length > 0) throw errorList;
      } catch (e) {
        isUploadingRef.value = false;
        throw e;
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

    return {
      columns: createTableColumns() as any[],
      actionColumn: createActionColumn(handleRemove) as any,
      register,
      getHelpText,
      getStringAccept,
      beforeUpload,
      fileListRef,
      state,
      isUploadingRef,
      handleStartUpload,
      handleOk,
      handleCloseFunc,
      getIsSelectFile,
      getUploadBtnText,
      t
    };
  }
});
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
