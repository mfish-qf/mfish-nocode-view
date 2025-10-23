<template>
  <Card
    title="审批列表"
    :body-style="{ padding: '0' }"
    :tab-list="panes"
    :active-tab-key="activePane"
    @tab-change="(key) => paneChange(key)"
  >
    <template #extra>
      <a-button type="link" size="small" @click="jumpAuditList">更多</a-button>
    </template>
    <List item-layout="horizontal" :data-source="tasks">
      <template #renderItem="{ item }">
        <ListItem>
          <ListItemMeta>
            <template #title>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <DictTag code="workflow_process_key" :value="item.processDefinitionKey" />
                  <AuditStatusTag
                    ref="auditStatusTagRef"
                    :process-instance-id="item.processInstanceId"
                    :status="item.status"
                  />
                </div>
                <AButton type="primary" size="small" @click="handleAudit(item)">
                  {{ item.status === "created" ? "审批" : "查看" }}
                </AButton>
              </div>
              <div class="flex items-center justify-between">
                <div>{{ item.taskName }}</div>
                <div
                  :title="item.description"
                  class="text-secondary mt-1 mb-2 max-w-[260px] overflow-hidden whitespace-nowrap text-ellipsis"
                >
                  {{ item.description }}
                </div>
              </div>
              <div class="flex justify-between text-secondary">
                <span>申请人：{{ item.startAccount }}</span>
                <span>申请时间：{{ item.startTime }}</span>
              </div>
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
    <AuditModal @register="registerModal" @success="handleSuccess" />
  </Card>
</template>
<script lang="ts" setup>
  import { Card, List } from "ant-design-vue";
  import { onMounted, ref, useTemplateRef } from "vue";
  import { getApplyTasks, getPendingTask } from "@/api/workflow/FlowProcess";
  import { MfTask } from "@/api/workflow/model/MfTaskModel";
  import AuditModal from "@/views/workflow/com/AuditModal.vue";
  import { useModal } from "@mfish/core/components/Modal";
  import AuditStatusTag from "@/views/workflow/com/AuditStatusTag.vue";
  import { router } from "@mfish/core/router";
  import { DictTag } from "@mfish/core/components/DictTag";

  const emit = defineEmits(["success"]);
  const ListItem = List.Item;
  const ListItemMeta = List.Item.Meta;
  const tasks = ref<MfTask[]>([]);
  const [registerModal, { openModal }] = useModal();
  const auditStatusTagRef = useTemplateRef<typeof AuditStatusTag>("auditStatusTagRef");
  const panes = ref<{ tab: string; key: string }[]>([
    { tab: "我的审批", key: "1" },
    { tab: "我的申请", key: "2" }
  ]);
  const activePane = ref<string>("1");

  onMounted(() => {
    fetchTasks();
  });

  function fetchTasks() {
    switch (activePane.value) {
      case "1": {
        getPendingTask({ pageNum: 1, pageSize: 5 }).then((res) => {
          tasks.value = res.list;
        });

        break;
      }
      case "2": {
        getApplyTasks({ pageNum: 1, pageSize: 5 }).then((res) => {
          tasks.value = res.list;
        });

        break;
      }
    }
  }

  function handleAudit(item: MfTask) {
    openModal(true, item);
  }
  function handleSuccess() {
    fetchTasks();
    auditStatusTagRef.value?.refresh();
    emit("success");
  }
  function jumpAuditList() {
    router.push("/audit");
  }
  function paneChange(key: string) {
    activePane.value = key;
    fetchTasks();
  }
</script>
