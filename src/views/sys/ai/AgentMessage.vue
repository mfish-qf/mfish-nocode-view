<!--
 @description: 智能体消息渲染组件 —— 可折叠计划面板 + 步骤状态 + 最终汇总
 @author: mfish
-->
<template>
  <div class="agent-message">
    <!-- 加载态：既没有计划数据，也没有任何最终内容和前端动作 -->
    <div v-if="!hasPlan && !hasActions && !displayedFinalContent" class="agent-loading">
      <Spin size="small" />
      <span class="agent-loading-text">正在规划任务，请稍后...</span>
    </div>
    <template v-else>
      <!-- 计划面板（仅在存在计划数据时展示） -->
      <div v-if="hasPlan" class="agent-plan-panel">
        <div class="agent-plan-header" @click="toggleExpand">
          <RightOutlined class="agent-plan-arrow" :class="[expanded && 'agent-plan-arrow-open']" />
          <component :is="headerIcon" :style="headerIconStyle" />
          <span class="agent-plan-title">{{ headerText }}</span>
        </div>
        <!-- 步骤列表（可折叠） -->
        <Steps v-if="expanded" direction="vertical" size="small" :items="stepItems" class="agent-step-list" />
      </div>
      <!-- 前端动作执行记录（FRONTEND_ACTION 事件触发后展示） -->
      <div v-if="hasActions" class="agent-actions">
        <div v-for="(act, i) in actions" :key="i" class="agent-action-item">
          <component
            :is="getActionStatusIcon(act.status)"
            :style="{ color: getActionStatusColor(act.status), fontSize: '14px', flexShrink: 0 }"
          />
          <div class="agent-action-body">
            <div class="agent-action-desc">{{ act.description || actionTypeLabel[act.action] }}</div>
            <div v-if="act.status === 'error' && act.result" class="agent-action-result agent-action-error">
              {{ act.result }}
            </div>
          </div>
        </div>
      </div>
      <!-- 最终汇总内容（有计划时打字机逐字显示；无计划流式追加时直接显示） -->
      <div v-if="displayedFinalContent" class="agent-content" v-html="renderedFinalContent"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { computed, onUnmounted, ref, watch } from "vue";
  import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    LoadingOutlined,
    RightOutlined
  } from "@ant-design/icons-vue";
  import { Spin, Steps, theme } from "ant-design-vue";
  import markdownit from "markdown-it";
  import { renderMarkdown } from "./hooks/useMarkdownRender";
  import type { FrontendActionType } from "./hooks/useFrontendAction";

  const props = defineProps<{
    /** 消息 ID（用于折叠状态记录） */
    msgId: string;
    /** agent 状态对象 */
    agent: AgentState;
    /** 最终汇总内容（PLAN_COMPLETED 的 content） */
    finalContent: string;
    /** 是否启用打字机效果（仅用户本次提问触发的 assistant 消息才为 true；刷新重试/加载历史不启用） */
    animateTyping?: boolean;
  }>();

  // 单独的 markdownit 实例，供模板中 v-html 使用（返回字符串）
  const md = markdownit({ html: true, breaks: true });

  interface AgentStep {
    index: number;
    title: string;
    content: string;
    status: "pending" | "running" | "completed";
  }

  /** 前端动作记录（FRONTEND_ACTION 事件触发后写入） */
  interface AgentAction {
    action: FrontendActionType;
    description?: string;
    params?: Record<string, any>;
    target?: string;
    status: "pending" | "success" | "error";
    result?: string;
  }

  interface AgentState {
    planText: string;
    steps: AgentStep[];
    actions?: AgentAction[];
    done: boolean;
  }

  const { token } = theme.useToken();

  // 折叠状态：用户是否手动操作过 + 当前展开值
  const userTouched = ref(false);
  const expandedRef = ref(false);

  const hasPlan = computed(() => props.agent && (props.agent.planText || props.agent.steps?.length));
  const steps = computed(() => props.agent?.steps || []);
  const actions = computed(() => props.agent?.actions || []);
  const hasActions = computed(() => actions.value.length > 0);
  const completedCount = computed(() => steps.value.filter((s) => s.status === "completed").length);
  const isRunning = computed(() => !props.agent?.done && steps.value.some((s) => s.status === "running"));
  const allDone = computed(
    () => props.agent?.done || (steps.value.length > 0 && completedCount.value === steps.value.length)
  );

  // 前端动作状态 → 图标组件映射（pending 显示 loading，success 显示对勾，error 显示叉号）
  function getActionStatusIcon(status: AgentAction["status"]) {
    if (status === "success") return CheckCircleOutlined;
    if (status === "error") return CloseCircleOutlined;
    return LoadingOutlined;
  }
  function getActionStatusColor(status: AgentAction["status"]) {
    if (status === "success") return "#52c41a";
    if (status === "error") return "#ff4d4f";
    return token.value.colorPrimary;
  }
  // 动作类型中文标签（无 description 时作为兜底展示）
  const actionTypeLabel: Record<FrontendActionType, string> = {
    navigate: "页面跳转",
    click: "点击元素",
    fill: "填充表单",
    refresh: "刷新页面",
    openModal: "打开弹窗"
  };

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

  // 最终汇总内容打字机效果：PLAN_COMPLETED 一次性给完整内容，逐字显示增强可读性
  // 仅当 animateTyping=true（用户本次提问触发）时启用；刷新重试 / 加载历史直接显示完整内容
  const displayedLength = ref(0);
  let typingTimer: number | null = null;

  const displayedFinalContent = computed(() => props.finalContent.slice(0, displayedLength.value));

  // 最终内容 markdown 渲染（返回 HTML 字符串供 v-html 使用）
  const renderedFinalContent = computed(() => {
    if (!displayedFinalContent.value) return "";
    return md.render(displayedFinalContent.value);
  });

  // 监听 finalContent 变化，启动打字机逐字显示
  watch(
    () => props.finalContent,
    (newVal) => {
      if (typingTimer) {
        clearInterval(typingTimer);
        typingTimer = null;
      }
      // 已显示长度大于新内容长度时重置（如刷新重试场景）
      if (displayedLength.value > newVal.length) {
        displayedLength.value = 0;
      }
      if (!newVal || displayedLength.value >= newVal.length) return;
      // 不启用打字机时直接显示完整内容（刷新重试 / 加载历史记录场景）
      if (!props.animateTyping) {
        displayedLength.value = newVal.length;
        return;
      }
      // 无计划数据（type=null 流式追加场景）：直接同步显示完整内容，实现边输出边打印
      // 有计划数据（PLAN_COMPLETED 一次性给完整内容）：启用打字机逐字显示增强可读性
      if (!hasPlan.value) {
        displayedLength.value = newVal.length;
        return;
      }
      // 每 16ms 显示 2 个字符，兼顾中英文阅读速度
      typingTimer = window.setInterval(() => {
        displayedLength.value = Math.min(displayedLength.value + 2, newVal.length);
        if (displayedLength.value >= newVal.length) {
          if (typingTimer) {
            clearInterval(typingTimer);
            typingTimer = null;
          }
        }
      }, 16);
    },
    { immediate: true }
  );

  onUnmounted(() => {
    if (typingTimer) {
      clearInterval(typingTimer);
      typingTimer = null;
    }
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

  // 前端动作执行记录列表
  .agent-actions {
    margin-top: 4px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .agent-action-item {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.03);
    font-size: 13px;
    line-height: 1.5;
  }

  .agent-action-body {
    flex: 1;
    min-width: 0;
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  .agent-action-desc {
    color: @text-color;
  }

  .agent-action-result {
    margin-top: 2px;
    font-size: 12px;
    color: @text-color-secondary;
  }

  .agent-action-error {
    color: #ff4d4f;
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
