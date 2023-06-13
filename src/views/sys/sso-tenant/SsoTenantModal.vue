<!--
 @description: 租户信息表
 @author: mfish
 @date: 2023-05-31
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit">
      <template #logoImg="{ model, field }">
        <Upload
          v-model:file-list="logoList"
          name="file"
          accept="image/*"
          list-type="picture-card"
          :customRequest="customRequest"
          @preview="handlePreview"
        >
          <div>
            <plus-outlined />
            <div style="margin-top: 8px">上传照片</div>
          </div>
        </Upload>
        <Modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
          <img alt="example" style="width: 100%" :src="previewImage" />
        </Modal>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/general/Form";
import { Upload, UploadProps, Modal } from "ant-design-vue";
import { ssoTenantFormSchema } from "./ssoTenant.data";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { insertSsoTenant, updateSsoTenant } from "/@/api/sys/SsoTenant";
import { uploadApi } from "/@/api/storage/Upload";
import { getBase64WithFile } from "/@/utils/FileUtils";

export default {
  name: "SsoTenantModal",
  components: { BasicModal, BasicForm, Upload, Modal },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      name: "model_form_item",
      labelWidth: 100,
      baseColProps: { span: 12 },
      schemas: ssoTenantFormSchema,
      showActionButtonGroup: false,
      autoSubmitOnEnter: true
    });
    const logoList = ref([]);
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "800px" });
      isUpdate.value = !!data?.isUpdate;
      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record
        }).then();
      }
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增租户信息表" : "编辑租户信息表"));

    async function handleSubmit() {
      let values = await validate();
      setModalProps({ confirmLoading: true });
      if (unref(isUpdate)) {
        saveSsoTenant(updateSsoTenant, values);
      } else {
        saveSsoTenant(insertSsoTenant, values);
      }
    }

    function saveSsoTenant(save, values) {
      save(values).then(() => {
        emit("success");
        closeModal();
      }).finally(() => {
        setModalProps({ confirmLoading: false });
      });
    }

    function customRequest(e) {
      uploadApi({ file: e.file }, (_) => {
      }).then((res) => {
        e.onSuccess(res, e);
      }).catch((err) => {
        // 调用实例的失败方法通知组件该文件上传失败
        e.onError(err);
      });
    }

    const previewVisible = ref(false);
    const previewImage = ref("");
    const previewTitle = ref("");

    const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
        file.preview = (await getBase64WithFile(file.originFileObj))?.result as string;
      }
      previewImage.value = file.url || file.preview;
      previewVisible.value = true;
      previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf("/") + 1);
    };

    const handleCancel = () => {
      previewVisible.value = false;
      previewTitle.value = "";
    };
    return {
      registerModal,
      registerForm,
      getTitle,
      handleSubmit,
      logoList,
      customRequest,
      handlePreview,
      previewVisible,
      previewImage,
      previewTitle,
      handleCancel
    };
  }
};
</script>
