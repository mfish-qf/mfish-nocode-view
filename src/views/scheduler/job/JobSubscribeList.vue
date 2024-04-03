<!--
 @description:策略订阅列表
 @author: mfish
 @date: 2023/2/26 16:40
-->
<template>
  <div v-for="item in subscribes" :class="getClass">
    <div :class="`${prefixCls}-column`">
      <div :class="`${prefixCls}-label`">调度周期:</div>
      <div>{{ item.startTime }} -- {{ item.endTime }}</div>
    </div>
    <div :class="`${prefixCls}-column`">
      <div :class="`${prefixCls}-label`">cron表达式:</div>
      <div style="width: 150px">{{ item.cron }}</div>
    </div>
    <div :class="`${prefixCls}-column`">
      <div :class="`${prefixCls}-label`">策略状态:</div>
      <ASwitch
        :checked="item.status == 0"
        checkedChildren="已启用"
        :loading="showLoading"
        unCheckedChildren="已停用"
        @change="statusChange(item, $event)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from "vue";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import { Switch as ASwitch } from "ant-design-vue";
  import { setJobSubscribeStatus } from "/@/api/scheduler/JobSubscribe";
  defineOptions({ name: "JobSubscribeList" });
  defineProps({
    subscribes: {
      type: Object as PropType<{ startTime: string; endTime: string; status: number; cron: string }[]>,
      default: () => {
        return [];
      }
    }
  });
  const { prefixCls } = useDesign("job-subscribe");
  const getClass = computed(() => [prefixCls]);
  let showLoading = ref(false);

  async function statusChange(record, checked) {
    showLoading.value = true;
    const newStatus = checked ? 0 : 1;
    setJobSubscribeStatus(record.id, newStatus)
      .then(() => {
        record.status = newStatus;
      })
      .finally(() => {
        showLoading.value = false;
      });
  }
</script>

<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-job-subscribe";
  .@{prefix-cls} {
    position: relative;
    display: flex;
    margin: 0 0 5px 30px;
    font-size: 14px;

    &-label {
      margin-right: 15px;
    }

    &-divider {
      margin: 0 0 0 0;
    }

    &-column {
      display: flex;
      margin-left: 20px;
      align-items: center;
    }
  }
</style>
