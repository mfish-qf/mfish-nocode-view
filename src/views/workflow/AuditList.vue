<template>
  <Card title="审批列表" :body-style="{ padding: '0' }">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>
    <List item-layout="horizontal" :data-source="tasks">
      <template #renderItem="{ item }">
        <ListItem>
          <ListItemMeta>
            <template #title>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <Popover :overlay-style="{ minWidth: '280px' }">
                    <template #content>
                      <TaskStepView
                        :key="taskStepKey"
                        direction="vertical"
                        :process-instance-id="item.processInstanceId"
                      />
                    </template>
                    <DictTag code="workflow_task_status" :value="item.status" />
                  </Popover>
                  <span class="text-lg ml-1">{{ item.processName }}</span>
                </div>
                <AButton type="primary" size="small" v-if="item.status === 'created'" @click="handleAudit(item)">
                  审核
                </AButton>
              </div>
              <div class="text-secondary mt-1 mb-2">{{ item.description }}</div>
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
  import { Card, List, Popover } from "ant-design-vue";
  import { onMounted, ref } from "vue";
  import { getAllTasks } from "@/api/workflow/FlowProcess";
  import { MfTask } from "@/api/workflow/model/MfTaskModel";
  import { DictTag } from "@mfish/core/components/DictTag";
  import TaskStepView from "@/views/workflow/TaskStepView.vue";
  import AuditModal from "@/views/workflow/AuditModal.vue";
  import { useModal } from "@mfish/core/components/Modal";

  const emit = defineEmits(["success"]);
  const ListItem = List.Item;
  const ListItemMeta = List.Item.Meta;
  const tasks = ref<MfTask[]>([]);
  const [registerModal, { openModal }] = useModal();
  const taskStepKey = ref(0);
  onMounted(() => {
    fetchTasks();
  });

  function fetchTasks() {
    getAllTasks({ pageNum: 1, pageSize: 5 }).then((res) => {
      tasks.value = res.list;
    });
  }

  function handleAudit(item: MfTask) {
    openModal(true, item);
  }
  function handleSuccess() {
    fetchTasks();
    taskStepKey.value++;
    emit("success");
  }
</script>
