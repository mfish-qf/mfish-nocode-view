<template>
  <div class="lg:flex">
    <Avatar :src="avatar" :size="72" class="!mx-auto !block" :load-error="errorAvatarHandle" />
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
  import { computed, ComputedRef, ref } from "vue";
  import { Avatar } from "ant-design-vue";
  import { useUserStore } from "@mfish/stores/modules";
  import logo from "@mfish/core/assets/images/logo.png";
  import { getLocalFileUrl, imageUrl } from "@mfish/core/utils/file/FileUtils";
  import { SsoUser } from "@mfish/core/api";
  import { Nullable } from "@mfish/types";

  const userStore = useUserStore();
  const userInfo: ComputedRef<Nullable<SsoUser>> = computed(() => userStore.getUserInfo);
  const isError = ref(false);
  const avatar = computed(() => {
    if (isError.value) {
      return logo;
    }
    const imgUrl = userStore.getUserInfo?.headImgUrl;
    if (imgUrl) {
      return imageUrl(getLocalFileUrl(imgUrl));
    }
    return logo;
  });

  const errorAvatarHandle = (): boolean => {
    isError.value = true;
    return false;
  };
</script>
