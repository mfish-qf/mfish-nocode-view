<template>
  <div :class="getClass" :style="getStyle">
    <div :class="`${prefixCls}-image-wrapper`" :style="getImageWrapperStyle" @click="openModal">
      <div :class="`${prefixCls}-image-mask`" :style="getImageWrapperStyle">
        <Icon
          icon="ant-design:cloud-upload-outlined"
          :size="getIconWidth"
          :style="getImageWrapperStyle"
          color="#d6d6d6"
        />
      </div>
      <img :src="sourceValue" v-if="sourceValue" alt="avatar" />
    </div>
    <a-button :class="`${prefixCls}-upload-btn`" @click="openModal" v-if="showBtn" v-bind="btnProps">
      {{ btnText ? btnText : t("component.cropper.selectImage") }}
    </a-button>

    <CopperModal
      @register="register"
      @upload-success="handleUploadSuccess"
      :upload-api="uploadApi"
      :src="sourceValue"
    />
  </div>
</template>
<script lang="ts" setup>
  import { computed, ref, watch, watchEffect } from "vue";
  import type { CSSProperties } from "vue";
  import CopperModal from "./CopperModal.vue";
  import { useDesign, useI18n, useMessage } from "@core/hooks";
  import { useModal } from "@core/components/Modal";
  import type { ButtonProps } from "@core/components/Button";
  import { Icon } from "@core/components/Icon";
  import type { UploadFileParams } from "@mfish/types/src/type/axios";

  const props = withDefaults(
    defineProps<{
      width?: string | number;
      value?: string;
      showBtn?: boolean;
      btnProps?: ButtonProps;
      btnText?: string;
      uploadApi?: (params: UploadFileParams) => Promise<any>;
    }>(),
    {
      width: "200px",
      showBtn: true,
      btnText: ""
    }
  );

  const emit = defineEmits<{
    "update:value": [value: string];
    change: [data: { source: string; data: any }];
  }>();

  const sourceValue = ref(props.value || "");
  const { prefixCls } = useDesign("cropper-avatar");
  const [register, { openModal, closeModal }] = useModal();
  const { createMessage } = useMessage();
  const { t } = useI18n();

  const getClass = computed(() => [prefixCls]);

  const getWidth = computed(() => `${`${props.width}`.replace(/px/, "")}px`);

  const getIconWidth = computed(() => `${Number.parseInt(`${props.width}`.replace(/px/, "")) / 2}px`);

  const getStyle = computed((): CSSProperties => ({ width: getWidth.value }));

  const getImageWrapperStyle = computed((): CSSProperties => ({
    width: getWidth.value,
    height: getWidth.value
  }));

  watchEffect(() => {
    sourceValue.value = props.value || "";
  });

  watch(
    () => sourceValue.value,
    (v: string) => {
      emit("update:value", v);
    }
  );

  function handleUploadSuccess({ source, data }: { source: string; data: any }) {
    sourceValue.value = source;
    emit("change", { source, data });
    createMessage.success(t("component.cropper.uploadSuccess"));
  }

  defineExpose({ openModal: openModal.bind(null, true), closeModal });
</script>

<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-cropper-avatar";

  .@{prefix-cls} {
    display: inline-block;
    text-align: center;

    &-image-wrapper {
      overflow: hidden;
      cursor: pointer;
      background: @component-background;
      border: 1px solid @border-color-base;
      border-radius: 50%;

      img {
        width: 100%;
      }
    }

    &-image-mask {
      opacity: 0;
      position: absolute;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      border: inherit;
      background: rgb(0 0 0 / 40%);
      cursor: pointer;
      transition: opacity 0.4s;

      ::v-deep(svg) {
        margin: auto;
      }
    }

    &-image-mask:hover {
      opacity: 4000%;
    }

    &-upload-btn {
      margin: 10px auto;
    }
  }
</style>
