<!--
 @description:策略订阅列表
 @author: qiufeng
 @date: 2023/2/26 16:40
-->
<template>
  <div v-for="item in subscribes" :class="getClass">
    <div :class="`${prefixCls}-column`">
      <div :class="`${prefixCls}-label`">cron表达式:</div>
      <div :class="`${prefixCls}-field`">{{ item.cron }}</div>
    </div>
    <div :class="`${prefixCls}-column`">
      <div :class="`${prefixCls}-label`">开始时间:</div>
      <div :class="`${prefixCls}-field`">{{ item.startTime }}</div>
    </div>
    <div :class="`${prefixCls}-column`">
      <div :class="`${prefixCls}-label`">结束时间:</div>
      <div :class="`${prefixCls}-field`">{{ item.endTime }}</div>
    </div>
    <div :class="`${prefixCls}-column`">
      <div :class="`${prefixCls}-label`">策略状态:</div>
      <Switch :checked="item.status == 0" checkedChildren="已启用" unCheckedChildren="已停用" @change="statusChange(item,$event)" :loading="showLoading"></Switch>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useDesign } from "/@/hooks/web/UseDesign";
import { Switch } from "ant-design-vue";
import { Divider } from "ant-design-vue";
import { setJobSubscribeStatus } from "/@/api/scheduler/JobSubscribe";

export default {
  name: "JobSubscribeList",
  components: { Switch, Divider },
  props: {
    subscribes: { type: Object, default: [] }
  },
  setup(_) {
    const { prefixCls } = useDesign("job-subscribe");
    const getClass = computed(() => [
      prefixCls
    ]);
    let showLoading = ref(false);

    function statusChange(record, checked) {
      showLoading = true;
      const newStatus = checked ? 0 : 1;
      setJobSubscribeStatus(record.id, newStatus).then(() => {
        record.status = newStatus;
      }).finally(() => {
        showLoading = false;
      });
    }

    return {
      prefixCls,
      getClass,
      showLoading,
      statusChange
    };
  }
};
</script>

<style scoped lang="less">
@prefix-cls: ~'@{namespace}-job-subscribe';
.@{prefix-cls} {
  position: relative;
  display: flex;
  margin: 0 0 5px 30px;
  font-size: 16px;
  font-weight: 500;

  &-label {
    margin-right: 15px;
  }

  &-field {
    width: 200px;
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