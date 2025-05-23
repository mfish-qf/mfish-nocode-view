<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    :title="t('component.cropper.modalTitle')"
    width="800px"
    :can-fullscreen="false"
    @ok="handleOk"
    :ok-text="t('component.cropper.okText')"
  >
    <div :class="prefixCls">
      <div :class="`${prefixCls}-left`">
        <div :class="`${prefixCls}-cropper`">
          <CropperImage
            v-if="src"
            :src="src"
            height="300px"
            :circled="circled"
            @cropper="handleCropper"
            @ready="handleReady"
          />
        </div>

        <div :class="`${prefixCls}-toolbar`">
          <Upload :file-list="[]" accept="image/*" :before-upload="handleBeforeUpload">
            <Tooltip :title="t('component.cropper.selectImage')" placement="bottom">
              <a-button size="small" pre-icon="ant-design:upload-outlined" type="primary" />
            </Tooltip>
          </Upload>
          <Space>
            <Tooltip :title="t('component.cropper.btn_reset')" placement="bottom">
              <a-button
                type="primary"
                pre-icon="ant-design:reload-outlined"
                size="small"
                :disabled="!src"
                @click="handlerToolbar('reset')"
              />
            </Tooltip>
            <Tooltip :title="t('component.cropper.btn_rotate_left')" placement="bottom">
              <a-button
                type="primary"
                pre-icon="ant-design:rotate-left-outlined"
                size="small"
                :disabled="!src"
                @click="handlerToolbar('rotate', -45)"
              />
            </Tooltip>
            <Tooltip :title="t('component.cropper.btn_rotate_right')" placement="bottom">
              <a-button
                type="primary"
                pre-icon="ant-design:rotate-right-outlined"
                size="small"
                :disabled="!src"
                @click="handlerToolbar('rotate', 45)"
              />
            </Tooltip>
            <Tooltip :title="t('component.cropper.btn_scale_x')" placement="bottom">
              <a-button
                type="primary"
                pre-icon="vaadin:arrows-long-h"
                size="small"
                :disabled="!src"
                @click="handlerToolbar('scaleX')"
              />
            </Tooltip>
            <Tooltip :title="t('component.cropper.btn_scale_y')" placement="bottom">
              <a-button
                type="primary"
                pre-icon="vaadin:arrows-long-v"
                size="small"
                :disabled="!src"
                @click="handlerToolbar('scaleY')"
              />
            </Tooltip>
            <Tooltip :title="t('component.cropper.btn_zoom_in')" placement="bottom">
              <a-button
                type="primary"
                pre-icon="ant-design:zoom-in-outlined"
                size="small"
                :disabled="!src"
                @click="handlerToolbar('zoom', 0.1)"
              />
            </Tooltip>
            <Tooltip :title="t('component.cropper.btn_zoom_out')" placement="bottom">
              <a-button
                type="primary"
                pre-icon="ant-design:zoom-out-outlined"
                size="small"
                :disabled="!src"
                @click="handlerToolbar('zoom', -0.1)"
              />
            </Tooltip>
          </Space>
        </div>
      </div>
      <div :class="`${prefixCls}-right`">
        <div :class="`${prefixCls}-preview`">
          <img :src="previewSource" v-if="previewSource" :alt="t('component.cropper.preview')" />
        </div>
        <template v-if="previewSource">
          <div :class="`${prefixCls}-group`">
            <Avatar :src="previewSource" size="large" />
            <Avatar :src="previewSource" :size="48" />
            <Avatar :src="previewSource" :size="64" />
            <Avatar :src="previewSource" :size="80" />
          </div>
        </template>
      </div>
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import type { Cropper, CropperResult } from "./typing";
  import { defineComponent, PropType, ref } from "vue";
  import CropperImage from "./Cropper.vue";
  import { Avatar, Space, Tooltip, Upload } from "ant-design-vue";
  import { useDesign, useI18n } from "@core/hooks";
  import { BasicModal, useModalInner } from "@core/components/Modal";
  import { dataURLtoBlob } from "@core/utils/file/Base64Convert";
  import { isFunction } from "@core/utils/Is";
  import { UploadFileParams } from "@mfish/types/src/type/axios";

  const props = {
    circled: { type: Boolean, default: true },
    uploadApi: {
      type: Function as PropType<(params: UploadFileParams) => Promise<any>>
    },
    src: { type: String }
  };

  export default defineComponent({
    name: "CropperModal",
    components: { BasicModal, Space, CropperImage, Upload, Avatar, Tooltip },
    props,
    emits: ["uploadSuccess", "register"],
    setup(props, { emit }) {
      let fileName = "";
      const src = ref(props.src || "");
      const previewSource = ref("");
      const cropper = ref<Cropper>();
      let scaleX = 1;
      let scaleY = 1;

      const { prefixCls } = useDesign("cropper-am");
      const [register, { closeModal, setModalProps }] = useModalInner();
      const { t } = useI18n();

      // Block upload
      function handleBeforeUpload(file: File) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        src.value = "";
        previewSource.value = "";
        reader.addEventListener("load", (e) => {
          src.value = (e.target?.result as string) ?? "";
          fileName = file.name;
        });
        return false;
      }

      function handleCropper({ imgBase64 }: CropperResult) {
        previewSource.value = imgBase64;
      }

      function handleReady(cropperInstance: Cropper) {
        cropper.value = cropperInstance;
      }

      function handlerToolbar(event: string, arg?: number) {
        if (event === "scaleX") {
          scaleX = arg = scaleX === -1 ? 1 : -1;
        }
        if (event === "scaleY") {
          scaleY = arg = scaleY === -1 ? 1 : -1;
        }
        //@ts-ignore 忽略类型错误
        cropper?.value?.[event]?.(arg);
      }

      async function handleOk() {
        const uploadApi = props.uploadApi;
        if (uploadApi && isFunction(uploadApi)) {
          const blob = dataURLtoBlob(previewSource.value);
          try {
            setModalProps({ confirmLoading: true });
            const result = await uploadApi({ file: blob, fileName, path: "avatar" });
            emit("uploadSuccess", { source: previewSource.value, data: result.fileKey });
            closeModal();
          } finally {
            setModalProps({ confirmLoading: false });
          }
        }
      }

      return {
        t,
        prefixCls,
        src,
        register,
        previewSource,
        handleBeforeUpload,
        handleCropper,
        handleReady,
        handlerToolbar,
        handleOk
      };
    }
  });
</script>

<style lang="less">
  @prefix-cls: ~"@{namespace}-cropper-am";

  .@{prefix-cls} {
    display: flex;

    &-left,
    &-right {
      height: 340px;
    }

    &-left {
      width: 55%;
    }

    &-right {
      width: 45%;
    }

    &-cropper {
      height: 300px;
      background: #eee;
      background-image:
        linear-gradient(45deg, rgb(0 0 0 / 25%) 25%, transparent 0, transparent 75%, rgb(0 0 0 / 25%) 0),
        linear-gradient(45deg, rgb(0 0 0 / 25%) 25%, transparent 0, transparent 75%, rgb(0 0 0 / 25%) 0);
      background-position:
        0 0,
        12px 12px;
      background-size: 24px 24px;
    }

    &-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }

    &-preview {
      width: 220px;
      height: 220px;
      margin: 0 auto;
      overflow: hidden;
      border: 1px solid @border-color-base;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-group {
      display: flex;
      padding-top: 8px;
      margin-top: 8px;
      border-top: 1px solid @border-color-base;
      justify-content: space-around;
      align-items: center;
    }
  }
</style>
