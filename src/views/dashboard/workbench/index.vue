<template>
  <PageWrapper content-full-height fixed-height>
    <template #headerContent>
      <WorkbenchHeader ref="workbenchHeader" />
    </template>
    <ScrollContainer>
      <div class="lg:flex m-3 gap-3">
        <div class="lg:w-7/10 enter-y">
          <Card class="enter-y" :loading="loading" :body-style="{ padding: '6px' }">
            <ScreenResourceManagement style="border-radius: 6px" @clone-screen="cloneScreen" />
          </Card>
          <ProjectCard :loading="loading" class="!my-3 enter-y" />
        </div>
        <div class="lg:w-3/10 enter-y">
          <AuditList :loading="loading" class="enter-y" @success="handleSuccess" />
          <QuickNav :loading="loading" class="my-3 enter-y" />
          <Card class="my-3 enter-y" :loading="loading">
            <img class="xl:h-50 h-30" src="@mfish/core/assets/svg/illustration.svg" alt="ill" />
          </Card>
        </div>
      </div>
    </ScrollContainer>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref, useTemplateRef } from "vue";
  import { Card } from "ant-design-vue";
  import { PageWrapper } from "@/components/general/Page";
  import WorkbenchHeader from "./components/WorkbenchHeader.vue";
  import ProjectCard from "./components/ProjectCard.vue";
  import QuickNav from "./components/QuickNav.vue";
  import AuditList from "../../workflow/AuditList.vue";
  import ScreenResourceManagement from "@/views/nocode/screen-resource/index.vue";
  import { ScrollContainer } from "@mfish/core/components/Container";
  import { router } from "@mfish/core/router";
  import { useOutsideOpen } from "@mfish/core/utils/OutsideOpenUtils";
  import { SCREEN_SAVE } from "@mfish/nocode";

  defineOptions({ name: "WorkbenchIndex" });
  const loading = ref(true);
  const { open } = useOutsideOpen(SCREEN_SAVE);
  const workbenchHeader = useTemplateRef<typeof WorkbenchHeader>("workbenchHeader");
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

  function handleSuccess() {
    workbenchHeader.value?.fetchTasks();
  }
</script>
