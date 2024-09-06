<!--
 @description: 文件上传组件
 @author: mfish
 @date: 2024/9/6
-->
<template>
  <Upload
    v-model:file-list="fileList"
    name="file"
    :max-count="maxCount"
    :show-upload-list="showUploadList"
    :accept="accepts"
    :custom-request="customRequest"
    @preview="handlePreview"
  >
    <Button>
      <UploadOutlined />
      {{ buttonText }}
    </Button>
  </Upload>
  <FilePreview ref="filePreviewRef" />
</template>
<script setup lang="ts">
  import { UploadOutlined } from "@ant-design/icons-vue";
  import { Button, Upload, UploadProps } from "ant-design-vue";
  import { ref, watch } from "vue";
  import { uploadApi } from "@/api/storage/Upload";
  import { getLocalFileUrl, getSysFileByKey } from "@/api/storage/SysFile";
  import FilePreview from "@/components/general/FileUpDown/FilePreview.vue";
  import { imageUrl } from "@/utils/file/FileUtils";

  const props = defineProps({
    fileKeys: { type: String, default: "" },
    buttonText: { type: String, default: "上传文件" },
    accepts: { type: String, default: "" },
    maxCount: { type: Number, default: undefined },
    showUploadList: { type: Boolean, default: true },
    filePath: { type: String, default: null }
  });
  const emit = defineEmits(["success", "fail"]);
  const filePreviewRef = ref();
  const fileList = ref<UploadProps["fileList"]>([]);
  watch(
    () => props.fileKeys,
    (fileKeys) => {
      fileList.value = [];
      if (!fileKeys) return;
      const keysArray: string[] = fileKeys.split(",");
      keysArray.forEach((key) => {
        getSysFileByKey(key).then((res) => {
          if (res) {
            fileList.value.push({
              uid: res.fileKey,
              name: res.fileName,
              status: "done",
              type: res.fileType,
              url: imageUrl(getLocalFileUrl(res.fileKey))
            });
          }
        });
      });
    }
  );

  function customRequest(e) {
    uploadApi({ file: e.file, path: props.filePath }, (_) => {})
      .then((res) => {
        emit("success", res);
        e.onSuccess(res, e);
      })
      .catch((error) => {
        emit("fail", error);
        e.onError(error);
      });
  }
  function handlePreview(file) {
    filePreviewRef.value?.show({ fileKey: file.uid, fileType: file.type });
  }
</script>
<style scoped lang="less"></style>
