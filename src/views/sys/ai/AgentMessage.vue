<!--
 @description: 智能体消息渲染组件 —— 可折叠计划面板 + 步骤状态 + 最终汇总
 @author: mfish
-->
<template>
  <div class="agent-message">
    <!-- 加载态：还没有计划数据 -->
    <div v-if="!hasPlan" class="agent-loading">
      <Spin size="small" />
      <span class="agent-loading-text">正在规划任务，请稍后...</span>
    </div>
    <template v-else>
      <!-- 计划面板 -->
      <div class="agent-plan-panel">
        <div class="agent-plan-header" @click="toggleExpand">
          <RightOutlined class="agent-plan-arrow" :class="[expanded && 'agent-plan-arrow-open']" />
          <component :is="headerIcon" :style="headerIconStyle" />
          <span class="agent-plan-title">{{ headerText }}</span>
        </div>
        <!-- 步骤列表（可折叠） -->
        <Steps v-if="expanded" direction="vertical" size="small" :items="stepItems" class="agent-step-list" />
      </div>
      <!-- 最终汇总内容 -->
      <div v-if="finalContent" class="agent-content" v-html="renderedFinalContent"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from "vue";
  import { CheckCircleOutlined, ClockCircleOutlined, LoadingOutlined, RightOutlined } from "@ant-design/icons-vue";
  import { Spin, Steps, theme } from "ant-design-vue";
  import markdownit from "markdown-it";
  import { renderMarkdown } from "./hooks/useMarkdownRender";

  const props = defineProps<{
    /** 消息 ID（用于折叠状态记录） */
    msgId: string;
    /** agent 状态对象 */
    agent: AgentState;
    /** 最终汇总内容（PLAN_COMPLETED 的 content） */
    finalContent: string;
  }>();

  // 单独的 markdownit 实例，供模板中 v-html 使用（返回字符串）
  const md = markdownit({ html: true, breaks: true });

  interface AgentStep {
    index: number;
    title: string;
    content: string;
    status: "pending" | "running" | "completed";
  }

  interface AgentState {
    planText: string;
    steps: AgentStep[];
    done: boolean;
  }

  const { token } = theme.useToken();

  // 折叠状态：用户是否手动操作过 + 当前展开值
  const userTouched = ref(false);
  const expandedRef = ref(false);

  const hasPlan = computed(() => props.agent && (props.agent.planText || props.agent.steps?.length));
  const steps = computed(() => props.agent?.steps || []);
  const completedCount = computed(() => steps.value.filter((s) => s.status === "completed").length);
  const isRunning = computed(() => !props.agent?.done && steps.value.some((s) => s.status === "running"));
  const allDone = computed(
    () => props.agent?.done || (steps.value.length > 0 && completedCount.value === steps.value.length)
  );

  // 默认：运行中展开、完成后折叠；用户操作过后尊重用户选择
  const expanded = computed(() => {
    if (userTouched.value) return expandedRef.value;
    return isRunning.value || !allDone.value;
  });

  // 运行/完成状态切换时同步默认展开值（用户未操作时）
  watch(
    [isRunning, allDone],
    ([running, done]) => {
      if (!userTouched.value) {
        expandedRef.value = running || !done;
      }
    },
    { immediate: true }
  );

  const toggleExpand = () => {
    userTouched.value = true;
    expandedRef.value = !expanded.value;
  };

  // 头部图标
  const headerIcon = computed(() => {
    if (allDone.value) return CheckCircleOutlined;
    if (isRunning.value) return LoadingOutlined;
    return ClockCircleOutlined;
  });
  const headerIconStyle = computed(() => {
    if (allDone.value) return { color: "#52c41a", fontSize: "14px" };
    if (isRunning.value) return { color: token.value.colorPrimary, fontSize: "14px" };
    return { fontSize: "14px", color: token.value.colorTextTertiary };
  });

  const headerText = computed(() => {
    if (allDone.value) return `已完成 ${steps.value.length} 个步骤`;
    if (isRunning.value) return `正在执行计划 (${completedCount.value}/${steps.value.length})`;
    return `执行计划 (${completedCount.value}/${steps.value.length})`;
  });

  // Steps 组件 items：状态映射 completed → finish，running → process，pending → wait
  const stepItems = computed(() =>
    steps.value.map((step) => ({
      title: step.title,
      description: step.content ? renderMarkdown(step.content) : undefined,
      status:
        step.status === "completed"
          ? ("finish" as const)
          : step.status === "running"
            ? ("process" as const)
            : ("wait" as const)
    }))
  );

  // 最终内容 markdown 渲染（返回 HTML 字符串供 v-html 使用）
  const renderedFinalContent = computed(() => {
    if (!props.finalContent) return "";
    return md.render(props.finalContent);
  });
</script>

<style lang="less" scoped>
  .agent-message {
    width: 100%;
  }

  .agent-loading {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #999;
    font-size: 13px;

    .agent-loading-text {
      line-height: 1.5;
    }
  }

  .agent-plan-panel {
    margin-bottom: 8px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.03);
    padding: 8px 12px;
    transition: background 0.2s;
  }

  .agent-plan-header {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    color: @text-color-secondary;
    user-select: none;
    padding: 2px 0;

    &:hover {
      color: @text-color;
    }

    .agent-plan-arrow {
      font-size: 10px;
      margin-right: 6px;
      transition: transform 0.2s ease;

      &.agent-plan-arrow-open {
        transform: rotate(90deg);
      }
    }

    .agent-plan-title {
      margin-left: 6px;
    }
  }

  .agent-step-list {
    margin-top: 8px;
    padding-left: 8px;

    // ant-design-vue Steps 组件样式微调
    :deep(.ant-steps) {
      .ant-steps-item-title {
        font-size: 13px;
        line-height: 1.5;
      }
      .ant-steps-item-description {
        font-size: 13px;
        line-height: 1.6;
        color: @text-color;
        word-break: break-word;
        overflow-wrap: anywhere;

        p {
          margin: 0 0 4px 0;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .agent-content {
    margin-top: 8px;
    word-break: break-word;
    overflow-wrap: anywhere;
  }
</style>
