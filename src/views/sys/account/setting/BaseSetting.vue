<template>
  <CollapseContainer title="个人信息" :can-expan="false">
    <ARow :gutter="24">
      <ACol :span="14">
        <BasicForm @register="register">
          <template #changeAccount>
            <ATooltip title="修改账号，账号只能修改一次">
              <AButton
                v-if="isAllowChangeAccount"
                type="link"
                pre-icon="ant-design:edit-outlined"
                icon-size="16"
                @click="changeAccount"
              />
            </ATooltip>
          </template>
        </BasicForm>
      </ACol>
      <ACol :span="10">
        <div class="change-avatar">
          <div class="mb-2">头像</div>
          <CropperAvatar
            :upload-api="uploadApi"
            :value="avatar"
            btn-text="更换头像"
            :btn-props="{ preIcon: 'ant-design:cloud-upload-outlined' }"
            @change="updateAvatar"
            width="150"
          />
        </div>
      </ACol>
    </ARow>
    <ARow :gutter="24">
      <ACol :offset="5">
        <AButton type="primary" @click="handleSubmit">更新基本信息</AButton>
      </ACol>
    </ARow>
  </CollapseContainer>
  <ChangeAccountModal @register="registerModal" @success="handleSuccess" />
</template>
<script lang="ts" setup>
  import { Col as ACol, Row as ARow, Tooltip as ATooltip } from "ant-design-vue";
  import { onBeforeMount, onMounted, ref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { CollapseContainer } from "@mfish/core/components/Container";
  import { CropperAvatar } from "@mfish/core/components/Cropper";
  import { allowChangeAccount, getUserInfo, updateMe, uploadApi } from "@mfish/core/api";
  import { baseSetSchemas } from "./setting.data";
  import { useUserStore } from "@mfish/stores/modules";
  import { setHeaderImg } from "@mfish/core/utils/file/FileUtils";
  import ChangeAccountModal from "@/views/sys/account/ChangeAccountModal.vue";
  import { useModal } from "@mfish/core/components/Modal";

  const userStore = useUserStore();
  const [register, { setFieldsValue, validate }] = useForm({
    labelWidth: 120,
    schemas: baseSetSchemas,
    showActionButtonGroup: false
  });
  const isAllowChangeAccount = ref<boolean>(false);
  const [registerModal, { openModal }] = useModal();
  let userInfo = userStore.getUserInfo;
  onMounted(async () => {
    loadUserInfo();
  });

  async function loadUserInfo() {
    const user = await getUserInfo();
    if (userInfo !== null) {
      userInfo = Object.assign(userInfo, user);
      setFieldsValue(userInfo).then();
    }
    allowChangeAccount(user.id).then((res) => {
      isAllowChangeAccount.value = res;
    });
  }

  const avatar = ref("");
  onBeforeMount(() => {
    const imgUrl = userStore.getUserInfo?.headImgUrl;
    setHeaderImg(imgUrl, avatar);
  });

  function updateAvatar({ data }) {
    if (userInfo !== null) {
      userInfo.headImgUrl = data;
      userStore.setUserInfo(userInfo);
      if (data) {
        updateMe(userInfo).then();
      }
    }
  }

  async function handleSubmit() {
    const values = await validate();
    updateMe(values).then();
  }
  function changeAccount() {
    openModal(true, userInfo);
  }

  /**
   * 处理完成
   */
  function handleSuccess() {
    loadUserInfo();
  }
</script>

<style lang="less" scoped>
  .change-avatar {
    img {
      display: block;
      margin-bottom: 15px;
      border-radius: 50%;
    }
  }
</style>
