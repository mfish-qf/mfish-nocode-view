<template>
  <CollapseContainer title="基本设置" :canExpan="false">
    <a-row :gutter="24">
      <a-col :span="14">
        <BasicForm @register="register" />
      </a-col>
      <a-col :span="10">
        <div class="change-avatar">
          <div class="mb-2">头像</div>
          <CropperAvatar
            :uploadApi="uploadApi"
            :value="avatar"
            btnText="更换头像"
            :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
            @change="updateAvatar"
            width="150"
          />
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :offset="5">
        <Button type="primary" @click="handleSubmit">更新基本信息</Button>
      </a-col>
    </a-row>
  </CollapseContainer>
</template>
<script lang="ts">
import { Button, Row, Col } from "ant-design-vue";
import { computed, defineComponent, onMounted } from "vue";
import { BasicForm, useForm } from "/@/components/general/Form/index";
import { CollapseContainer } from "/@/components/general/Container";
import { CropperAvatar } from "/@/components/general/Cropper";
import headerImg from "/@/assets/images/header.png";
import { getUserInfo, updateUser } from "/@/api/sys/User";
import { baseSetSchemas } from "./setting.data";
import { useUserStore } from "/@/store/modules/User";
import { uploadApi } from "/@/api/storage/Upload";
import { imageUrl } from "/@/utils/FileUtils";
import { getLocalFileUrl } from "/@/api/storage/SysFile";

export default defineComponent({
  components: {
    BasicForm,
    CollapseContainer,
    Button,
    ARow: Row,
    ACol: Col,
    CropperAvatar
  },
  setup() {
    const userStore = useUserStore();
    const [register, { setFieldsValue, validate }] = useForm({
      labelWidth: 120,
      schemas: baseSetSchemas,
      showActionButtonGroup: false
    });
    let userInfo = userStore.getUserInfo;
    onMounted(async () => {
      const user = await getUserInfo();
      if (userInfo != null) {
        userInfo = Object.assign(userInfo, user);
        setFieldsValue(userInfo).then();
      }
    });

    let avatar = computed(() => {
      const imgUrl = userStore.getUserInfo?.headImgUrl;
      return imgUrl ? imageUrl(getLocalFileUrl(imgUrl)) : headerImg;
    });

    function updateAvatar({ data }) {
      if (userInfo != null) {
        userInfo.headImgUrl = data;
        userStore.setUserInfo(userInfo);
        if (data) {
          updateUser(userInfo).then();
        }
      }
    }

    async function handleSubmit() {
      const values = await validate();
      updateUser(values).then();
    }

    return {
      avatar,
      register,
      uploadApi,
      updateAvatar,
      handleSubmit
    };
  }
});
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
