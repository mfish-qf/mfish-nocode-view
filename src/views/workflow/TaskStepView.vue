<!--
 @description: 任务进度查看
 @author: mfish
 @date: 2025/10/11
-->
<template>
  <ASteps v-bind="$attrs" :progress-dot="progressDot" :current="current" :items="items" />
</template>
<script setup lang="ts">
  import { Steps as ASteps } from "ant-design-vue";
  import { computed, h, ref, watch } from "vue";
  import { getProcessTasks } from "@/api/workflow/FlowProcess";
  import { MfTask } from "@/api/workflow/model/MfTaskModel";
  import AuditCommentView from "@/views/workflow/AuditCommentView.vue";

  const props = defineProps({
    progressDot: {
      type: Boolean,
      default: true
    },
    processInstanceId: {
      type: String,
      default: ""
    }
  });
  const tasks = ref<MfTask[]>([]);
  const current = computed(() => {
    const currentIndex = tasks.value.findIndex((item) => item.status === "created");
    return currentIndex === -1 ? tasks.value.length : currentIndex;
  });
  const items = computed(() => {
    const items = tasks.value.map((item: MfTask) => ({
      title: item.name,
      subTitle: item.description,
      description: h(AuditCommentView, {
        comments: item?.comments || []
      })
    }));
    items.push({ title: "审批完成", subTitle: "", description: h("span") });
    return items;
  });

  watch(
    () => props.processInstanceId,
    (newVal, oldVal) => {
      if (newVal && newVal !== oldVal) {
        getProcessTasks(newVal).then((res) => {
          tasks.value = res;
        });
      }
    },
    { immediate: true }
  );
</script>
<style scoped lang="less"></style>
