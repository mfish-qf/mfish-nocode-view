<template>
  <div>
    <Space>
      <a-button type="primary" @click="openUploadModal" pre-icon="carbon:cloud-upload">
        {{ t("component.upload.upload") }}
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
  import { defineComponent, computed } from "vue";
  import { Space } from "ant-design-vue";
  import { useModal } from "@/components/general/Modal";
  import { uploadContainerProps } from "./Props";
  import { omit } from "lodash-es";
  import { useI18n } from "@/hooks/web/UseI18n";
  import UploadModal from "./UploadModal.vue";
  import { SysFile } from "@/api/storage/model/SysFileModel";

  export default defineComponent({
    name: "BasicUpload",
    components: { UploadModal, Space },
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
