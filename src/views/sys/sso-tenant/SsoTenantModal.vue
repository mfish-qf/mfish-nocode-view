<!--
 @description: 租户信息表
 @author: mfish
 @date: 2023-05-31
 @version: V1.3.2
-->
<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
    :show-ok-btn="showSave"
    cancel-text="关闭"
  >
    <BasicForm @register="registerForm" @submit="handleSubmit">
      <template #logoImg>
        <Upload
          v-model:file-list="logoList"
          name="file"
          label-in-value
          :max-count="1"
          accept="image/*"
          list-type="picture-card"
          :custom-request="uploadLogo"
          @preview="handlePreview"
        >
          <div>
            <Icon icon="ant-design:plus-outlined" />
            <div style="margin-top: 8px">上传logo</div>
          </div>
        </Upload>
        <Modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
          <img alt="example" style="width: 100%" :src="previewImage" />
        </Modal>
      </template>
      <template #userSearch>
        <ASelect
          v-model:value="accountList.userId"
          show-search
          allow-clear
          placeholder="检索帐号"
          :filter-option="false"
          :not-found-content="accountList.fetching ? undefined : null"
          :options="accountList.userList"
          @search="fetchUser"
          @change="changeUser"
        >
          <template v-if="accountList.fetching" #notFoundContent>
            <Spin size="small" />
          </template>
        </ASelect>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, reactive, ref, unref } from "vue";
  import { BasicForm, useForm } from "@/components/general/Form";
  import { Modal, Select as ASelect, Spin, Upload, UploadProps } from "ant-design-vue";
  import { ssoTenantFormSchema } from "./ssoTenant.data";
  import { BasicModal, useModalInner } from "@/components/general/Modal";
  import { insertSsoTenant, updateMeTenant, updateSsoTenant } from "@/api/sys/SsoTenant";
  import { uploadApi } from "@/api/storage/Upload";
  import { getBase64WithFile, imageUrl } from "@/utils/file/FileUtils";
  import Icon from "@/components/general/Icon/src/Icon.vue";
  import { SysFile } from "@/api/storage/model/SysFileModel";
  import { getLocalFileUrl, getSysFileByKey } from "@/api/storage/SysFile";
  import { debounce } from "lodash-es";
  import { getUserById, getUserList } from "@/api/sys/User";
  import { getAllRoleList } from "@/api/sys/Role";
  import { Recordable } from "@mfish/types";

  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  let source = 0;
  const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 12 },
    schemas: ssoTenantFormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const logoList = ref<UploadProps["fileList"]>([]);
  const showSave = ref<boolean>(true);
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    logoList.value = [];
    showSave.value = true;
    if (data.record?.userId) {
      accountList.userId = data.record.userId;
      getUserById(data.record.userId).then((res) => {
        accountList.userList = [{ label: res.account, value: res.id }];
      });
    } else {
      accountList.userId = "";
      accountList.userList = [];
    }
    setModalProps({ confirmLoading: false, width: "800px" });
    isUpdate.value = !!data?.isUpdate;
    if (unref(isUpdate)) {
      const logo = data.record.logo;
      if (logo) {
        getSysFileByKey(logo).then((res) => {
          if (res) {
            logoList.value = [
              {
                uid: res.fileKey,
                name: res.fileName,
                status: "done",
                url: imageUrl(getLocalFileUrl(logo))
              }
            ];
          }
        });
      }
      // 来源1 表示自己修改租户信息，不允许修改用户
      if (data?.source === 1) {
        source = 1;
        updateSchema([
          {
            field: "userId",
            show: false
          },
          {
            field: "roleIds",
            show: false
          },
          {
            field: "tenantType",
            dynamicDisabled: true
          },
          {
            field: "status",
            dynamicDisabled: true
          }
        ]).then();
      }
      setFieldsValue({
        ...data.record
      }).then();
      if (data?.disabled === 1) {
        showSave.value = false;
      }
    }
    // 来源1 表示自己修改租户信息，不允许修改角色信息
    if (data?.source !== 1) {
      initRoles().then();
    }
  });

  async function initRoles() {
    const roles = await getAllRoleList({ tenantId: "1" });
    const options = roles.reduce((prev, next: Recordable) => {
      if (next && next.id !== "1") {
        prev.push({
          label: next.roleName,
          value: next.id
        });
      }
      return prev;
    }, [] as any);
    updateSchema([
      {
        field: "roleIds",
        componentProps: { options, optionFilterProp: "label" }
      }
    ]).then();
  }
  const getTitle = computed(() => (unref(isUpdate) ? "编辑租户信息" : "新增租户信息"));

  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      if (source === 1) {
        saveSsoTenant(updateMeTenant, values);
      } else {
        saveSsoTenant(updateSsoTenant, values);
      }
    } else {
      saveSsoTenant(insertSsoTenant, values);
    }
  }

  function changeUser(id) {
    if (!id) {
      id = "";
    }
    setFieldsValue({ userId: id }).then();
  }

  function saveSsoTenant(save, values) {
    if (logoList.value && logoList.value.length > 0) {
      if (logoList.value[0].response) {
        values.logo = (logoList.value[0].response as SysFile).fileKey;
      }
    } else {
      values.logo = "";
    }
    save(values)
      .then(() => {
        emit("success");
        closeModal();
      })
      .finally(() => {
        setModalProps({ confirmLoading: false });
      });
  }

  function uploadLogo(e) {
    uploadApi({ file: e.file }, (_) => {})
      .then((res) => {
        e.onSuccess(res, e);
      })
      .catch((error) => {
        // 调用实例的失败方法通知组件该文件上传失败
        e.onError(error);
      });
  }

  const previewVisible = ref(false);
  const previewImage = ref("");
  const previewTitle = ref("");

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      const obj = await getBase64WithFile(file.originFileObj);
      file.preview = obj?.result as string;
    }
    previewImage.value = file.url || file.preview;
    previewVisible.value = true;
    previewTitle.value = file.name || file.url.slice(Math.max(0, file.url.lastIndexOf("/") + 1));
  };

  const handleCancel = () => {
    previewVisible.value = false;
    previewTitle.value = "";
  };

  const accountList = reactive({
    userList: [] as { label: string; value: string }[],
    userId: "",
    fetching: false
  });

  const fetchUser = debounce((value) => {
    accountList.userList = [];
    accountList.fetching = true;
    getUserList({ account: value, pageNum: 1, pageSize: 20 }).then((res) => {
      accountList.userList = res.list.map((user) => ({
        label: user.account,
        value: user.id
      }));
      accountList.fetching = false;
    });
  }, 300);
</script>
