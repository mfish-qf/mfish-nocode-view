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
<script lang="ts">
  import { computed, CSSProperties, defineComponent, PropType, ref, unref, watch, watchEffect } from "vue";
  import CopperModal from "./CopperModal.vue";
  import { useDesign, useI18n, useMessage } from "@core/hooks";
  import { useModal } from "@core/components/Modal";
  import type { ButtonProps } from "@core/components/Button";
  import { Icon } from "@core/components/Icon";
  import { UploadFileParams } from "@mfish/types/src/type/axios";

  const props = {
    width: { type: [String, Number], default: "200px" },
    value: { type: String },
    showBtn: { type: Boolean, default: true },
    btnProps: { type: Object as PropType<ButtonProps> },
    btnText: { type: String, default: "" },
    uploadApi: { type: Function as PropType<(params: UploadFileParams) => Promise<any>> }
  };

  export default defineComponent({
    name: "CropperAvatar",
    components: { CopperModal, Icon },
    props,
    emits: ["update:value", "change"],
    setup(props, { emit, expose }) {
      const sourceValue = ref(props.value || "");
      const { prefixCls } = useDesign("cropper-avatar");
      const [register, { openModal, closeModal }] = useModal();
      const { createMessage } = useMessage();
      const { t } = useI18n();

      const getClass = computed(() => [prefixCls]);

      const getWidth = computed(() => `${`${props.width}`.replace(/px/, "")}px`);

      const getIconWidth = computed(() => `${Number.parseInt(`${props.width}`.replace(/px/, "")) / 2}px`);

      const getStyle = computed((): CSSProperties => ({ width: unref(getWidth) }));

      const getImageWrapperStyle = computed((): CSSProperties => ({ width: unref(getWidth), height: unref(getWidth) }));

      watchEffect(() => {
        sourceValue.value = props.value || "";
      });

      watch(
        () => sourceValue.value,
        (v: string) => {
          emit("update:value", v);
        }
      );

      function handleUploadSuccess({ source, data }: { source: any; data: any }) {
        sourceValue.value = source;
        emit("change", { source, data });
        createMessage.success(t("component.cropper.uploadSuccess"));
      }

      expose({ openModal: openModal.bind(null, true), closeModal });

      return {
        t,
        prefixCls,
        register,
        openModal: openModal as any,
        getIconWidth,
        sourceValue,
        getClass,
        getImageWrapperStyle,
        getStyle,
        handleUploadSuccess
      };
    }
  });
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
