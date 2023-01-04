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
import { BasicForm, useForm } from "/@/components/Form/index";
import { CollapseContainer } from "/@/components/Container";
import { CropperAvatar } from "/@/components/Cropper";
import { useMessage } from "/@/hooks/web/UseMessage";
import headerImg from "/@/assets/images/header.png";
import { getUserInfo, insertUser, updateUser } from "/@/api/sys/User";
import { baseSetSchemas } from "./setting.data";
import { useUserStore } from "/@/store/modules/User";
import { uploadApi } from "/@/api/sys/Upload";

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

    onMounted(async () => {
      const data = await getUserInfo();
      setFieldsValue(data).then();
    });

    const avatar = computed(() => {
      return userStore.getUserInfo?.headImgUrl || headerImg;
    });

    function updateAvatar({ src, data }) {
      const userinfo = userStore.getUserInfo;
      userinfo.headImgUrl = src;
      userStore.setUserInfo(userinfo);
      console.log("data", data);
    }

    async function handleSubmit() {
      const values = await validate();
      updateUser(values).then();
    }

    return {
      avatar,
      register,
      uploadApi: uploadApi as any,
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
