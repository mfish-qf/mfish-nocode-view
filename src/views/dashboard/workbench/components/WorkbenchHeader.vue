<template>
  <div class="lg:flex">
    <Avatar :src="avatar" :size="72" class="!mx-auto !block" />
    <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2">
      <h1 class="md:text-lg text-md">
        早安, {{ userInfo?.nickname ? userInfo?.nickname : userInfo?.account }}, 开始您一天的工作吧！
      </h1>
      <span class="text-secondary"> 今日晴，20℃ - 32℃！ </span>
    </div>
    <div class="flex flex-1 justify-end md:mt-0 mt-4">
      <div class="flex flex-col justify-center text-right">
        <span class="text-secondary"> 待办 </span>
        <span class="text-2xl">2/10</span>
      </div>

      <div class="flex flex-col justify-center text-right md:mx-16 mx-12">
        <span class="text-secondary"> 项目 </span>
        <span class="text-2xl">8</span>
      </div>
      <div class="flex flex-col justify-center text-right md:mr-10 mr-4">
        <span class="text-secondary"> 团队 </span>
        <span class="text-2xl">300</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed, ComputedRef } from "vue";
  import { Avatar } from "ant-design-vue";
  import { useUserStore } from "@/store/modules/User";
  import headerImg from "@/assets/images/header.png";
  import { imageUrl } from "@/utils/file/FileUtils";
  import { getLocalFileUrl } from "@/api/storage/SysFile";
  import { SsoUser } from "@/api/sys/model/UserModel";
  import { Nullable } from "@mfish/types";

  const userStore = useUserStore();
  const userInfo: ComputedRef<Nullable<SsoUser>> = computed(() => userStore.getUserInfo);
  const avatar = computed(() => {
    const imgUrl = userStore.getUserInfo?.headImgUrl;
    if (imgUrl) {
      if (imgUrl.startsWith("http://") || imgUrl.startsWith("https://")) {
        return imgUrl;
      }
      return imageUrl(getLocalFileUrl(imgUrl));
    }
    return headerImg;
  });
</script>
