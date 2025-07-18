<template>
  <div>
    <Space>
      <Tooltip placement="bottom" v-if="buttonTooltip" :title="buttonTooltip">
        <a-button
          :size="buttonSize"
          :type="buttonType"
          :icon-size="iconSize"
          :icon-color="iconColor"
          @click="openUploadModal"
          pre-icon="ant-design:cloud-upload-outlined"
        >
          {{ buttonText !== undefined ? buttonText : t("component.upload.upload") }}
        </a-button>
      </Tooltip>
      <a-button
        v-else
        :size="buttonSize"
        :type="buttonType"
        :icon-size="iconSize"
        :icon-color="iconColor"
        @click="openUploadModal"
        pre-icon="ant-design:cloud-upload-outlined"
      >
        {{ buttonText !== undefined ? buttonText : t("component.upload.upload") }}
      </a-button>
    </Space>
    <UploadModal
      v-bind="bindValue"
      @register="registerUploadModal"
      @change="handleChange"
      @delete="handleDelete"
      @success="handleSuccess"
    >
      <template #[item]="data" v-for="item in Object.keys($slots)">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </UploadModal>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent } from "vue";
  import { Space, Tooltip } from "ant-design-vue";
  import { useModal } from "@core/components/Modal";
  import { uploadContainerProps } from "./Props";
  import { omit } from "lodash-es";
  import { useI18n } from "@core/hooks";
  import UploadModal from "./UploadModal.vue";
  import { SysFile } from "@core/api";
  import { Recordable } from "@mfish/types";

  export default defineComponent({
    name: "BasicUpload",
    components: { Tooltip, UploadModal, Space },
    props: uploadContainerProps,
    emits: ["change", "delete", "success"],

    setup(props, { emit, attrs }) {
      const { t } = useI18n();
      // 上传modal
      const [registerUploadModal, { openModal: openUploadModal }] = useModal();
      const bindValue = computed(() => {
        const value = { ...attrs, ...props };
        return omit(value, "onChange");
      });

      // 上传modal保存操作
      function handleChange(files: SysFile[]) {
        emit("change", files);
      }

      function handleDelete(record: Recordable) {
        emit("delete", record);
      }

      function handleSuccess(files: SysFile[]) {
        emit("success", files);
      }

      return {
        registerUploadModal,
        openUploadModal,
        bindValue,
        handleChange,
        handleDelete,
        handleSuccess,
        t
      };
    }
  });
</script>
