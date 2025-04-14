<template>
  <CollapseContainer title="个人信息" :can-expan="false">
    <ARow :gutter="24">
      <ACol :span="14">
        <BasicForm @register="register" />
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
</template>
<script lang="ts" setup>
  import { Button as AButton, Row as ARow, Col as ACol } from "ant-design-vue";
  import { onBeforeMount, onMounted, ref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/src/components/Form";
  import { CollapseContainer } from "@mfish/core/src/components/Container";
  import { CropperAvatar } from "@mfish/core/src/components/Cropper";
  import { getUserInfo, updateMe } from "@mfish/core/src/api/sys/User";
  import { baseSetSchemas } from "./setting.data";
  import { useUserStore } from "@mfish/stores/modules";
  import { uploadApi } from "@mfish/core/src/api/storage/Upload";
  import { setHeaderImg } from "@mfish/core/src/utils/file/FileUtils";

  const userStore = useUserStore();
  const [register, { setFieldsValue, validate }] = useForm({
    labelWidth: 120,
    schemas: baseSetSchemas,
    showActionButtonGroup: false
  });
  let userInfo = userStore.getUserInfo;
  onMounted(async () => {
    const user = await getUserInfo();
    if (userInfo !== null) {
      userInfo = Object.assign(userInfo, user);
      setFieldsValue(userInfo).then();
    }
  });

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
