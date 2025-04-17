<template>
  <PageWrapper>
    <template #headerContent>
      <WorkbenchHeader />
    </template>
    <ScrollContainer style="height: calc(100vh - 180px)">
      <div class="lg:flex">
        <div class="lg:w-7/10 m-4 enter-y">
          <Card class="enter-y" :loading="loading" :body-style="{ padding: '6px' }">
            <ScreenResourceManagement @clone-screen="cloneScreen" />
          </Card>
          <ProjectCard :loading="loading" class="!my-4 enter-y" />
        </div>
        <div class="lg:w-3/10 w-full mt-4 mb-4 mr-4 enter-y">
          <QuickNav :loading="loading" class="enter-y" />
          <Card class="my-4 enter-y" :loading="loading">
            <img class="xl:h-50 h-30" src="@mfish/core/assets/svg/illustration.svg" />
          </Card>
          <DynamicInfo :loading="loading" class="my-4 enter-y" />
        </div>
      </div>
    </ScrollContainer>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  import { Card } from "ant-design-vue";
  import { PageWrapper } from "@/components/general/Page";
  import WorkbenchHeader from "./components/WorkbenchHeader.vue";
  import ProjectCard from "./components/ProjectCard.vue";
  import QuickNav from "./components/QuickNav.vue";
  import DynamicInfo from "./components/DynamicInfo.vue";
  import ScreenResourceManagement from "@/views/nocode/screen-resource/index.vue";
  import { ScrollContainer } from "@mfish/core/components/Container";
  import { router } from "@mfish/core/router";
  import { useOutsideOpen } from "@mfish/core/utils/OutsideOpenUtils";
  import { SCREEN_SAVE } from "@/views/nocode/screen-folder/screenFolder.data";

  defineOptions({ name: "WorkbenchIndex" });
  const loading = ref(true);
  const { open } = useOutsideOpen(SCREEN_SAVE);
  setTimeout(() => {
    loading.value = false;
  }, 200);

  function cloneScreen(id: string) {
    const routeData = router.resolve({
      path: "/low-code/mf-screen/config",
      query: { folderId: "", id, isResource: "true" }
    });
    open(routeData);
  }
</script>
