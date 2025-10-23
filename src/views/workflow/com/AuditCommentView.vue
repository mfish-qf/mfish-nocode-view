<!--
 @description: 审批评论组件
 @author: mfish
 @date: 2025/10/11
-->
<template>
  <ListItem v-if="task?.deleteReason" style="padding: 2px !important">
    <ListItemMeta>
      <template #description>
        <div class="text-ellipsis whitespace-nowrap overflow-hidden max-w-[300px] text-left" :title="task.deleteReason">
          终止原因：{{ task?.deleteReason.replace("terminated:", "") }}
        </div>
        <div class="text-ellipsis whitespace-nowrap overflow-hidden max-w-[300px] text-left" :title="task.endTime">
          终止时间：{{ task.endTime }}
        </div>
      </template>
    </ListItemMeta>
  </ListItem>
  <List v-else-if="task?.comments && task.comments.length > 0" :data-source="task.comments || []">
    <template #renderItem="{ item }">
      <ListItem style="padding: 2px !important">
        <ListItemMeta>
          <template #description>
            <div
              v-if="item.comment"
              class="text-ellipsis whitespace-nowrap overflow-hidden max-w-[300px] text-left"
              :title="item.comment"
            >
              审批意见：{{ item.comment }}
            </div>
            <div class="text-ellipsis whitespace-nowrap overflow-hidden max-w-[300px] text-left" :title="item.assignee">
              审批人：{{ item.assignee }}
            </div>
            <div class="text-ellipsis whitespace-nowrap overflow-hidden max-w-[300px] text-left" :title="item.time">
              审批时间：{{ item.time }}
            </div>
          </template>
        </ListItemMeta>
      </ListItem>
    </template>
  </List>
</template>
<script setup lang="ts">
  import { List, ListItem, ListItemMeta } from "ant-design-vue";
  import { PropType } from "vue";
  import { MfTask } from "@/api/workflow/model/MfTaskModel";
  defineProps({
    task: {
      type: Object as PropType<MfTask>,
      default: () => {}
    }
  });
</script>
<style scoped lang="less"></style>
