<!--
 @description: 文件上传组件
 @author: mfish
 @date: 2024/9/6
-->
<template>
  <AUpload
    v-model:file-list="fileList"
    name="file"
    :disabled="disabled"
    :max-count="maxCount"
    :show-upload-list="showUploadList"
    :accept="accepts"
    :list-type="isPic ? 'picture-card' : 'text'"
    :custom-request="customRequest || handleCustomRequest"
    @preview="handlePreview"
    @remove="handleRemove"
  >
    <div v-if="isPic">
      <Icon :icon="icon" :color="iconColor" />
      <div style="margin-top: 8px">{{ buttonText }}</div>
    </div>
    <AButton v-else :color="buttonColor" :loading="uploadLoading">
      <Icon :icon="icon" :color="iconColor" />
      {{ buttonText }}
    </AButton>
  </AUpload>
  <FilePreview v-if="showUploadList" ref="filePreviewRef" />
</template>
<script setup lang="ts">
  import { Upload as AUpload, UploadProps } from "ant-design-vue";
  import { PropType, ref, toRaw, toRefs, unref, watch } from "vue";
  import { uploadApi } from "@/api/storage/Upload";
  import { getLocalFileUrl, getSysFileByKey } from "@/api/storage/SysFile";
  import FilePreview from "@/components/general/FileUpDown/FilePreview.vue";
  import { imageUrl } from "@/utils/file/FileUtils";
  import { SysFile } from "@/api/storage/model/SysFileModel";
  import { Icon } from "@/components/general/Icon";
  import { UploadRequestOption } from "ant-design-vue/lib/vc-upload/interface";

  const props = defineProps({
    disabled: { type: Boolean, default: false },
    fileKeys: { type: String, default: "" },
    buttonText: { type: String, default: "上传文件" },
    buttonColor: { type: String, default: "" },
    accepts: { type: String, default: "" },
    maxCount: { type: Number, default: undefined },
    showUploadList: { type: Boolean, default: true },
    filePath: { type: String, default: null },
    customRequest: { type: Function as PropType<(options: UploadRequestOption) => void>, default: null },
    icon: { type: String, default: "ant-design:upload-outlined" },
    iconColor: { type: String, default: "" },
    uploadLoading: { type: Boolean, default: false },
    isPic: { type: Boolean, default: false }
  });
  const emit = defineEmits(["success", "fail", "remove"]);
  const filePreviewRef = ref();
  const fileList = ref<UploadProps["fileList"]>([]);
  const { uploadLoading } = toRefs(props);

  watch(
    () => props.fileKeys,
    (fileKeys) => {
      fileList.value = [];
      if (!fileKeys) return;
      const keysArray: string[] = fileKeys.split(",");
      keysArray.forEach((key) => {
        getSysFileByKey(key).then((res) => {
          if (res) {
            fileList.value?.push(buildFile(res));
          }
        });
      });
    },
    { immediate: true }
  );

  function handleCustomRequest(e) {
    uploadLoading.value = true;
    uploadApi({ file: e.file, path: props.filePath }, (_) => {})
      .then((res) => {
        e.onSuccess(res, e);
        emit("success", res, getFiles());
      })
      .catch((error) => {
        e.onError(error);
        emit("fail", error);
      })
      .finally(() => (uploadLoading.value = false));
  }

  function buildFile(sysFile: SysFile): any {
    return {
      uid: sysFile.fileKey,
      name: sysFile.fileName,
      size: sysFile.fileSize,
      type: sysFile.fileType,
      status: "done",
      response: sysFile,
      url: imageUrl(getLocalFileUrl(sysFile.fileKey))
    };
  }

  function handlePreview(file: any) {
    filePreviewRef.value?.show({ fileKey: file.response.fileKey, fileType: file.type });
  }
  function handleRemove(file: any) {
    emit("remove", toRaw(unref(file)), getFiles());
  }
  function getFiles() {
    return unref(fileList)?.map((file) => toRaw(file.response));
  }
  defineExpose({ getFiles });
</script>
