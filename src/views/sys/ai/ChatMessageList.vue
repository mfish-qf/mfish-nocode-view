<!--
 @description: 对话消息列表组件 —— chat 与 agent 模式共用 Bubble.List
 @author: mfish
-->
<template>
  <Bubble.List
    v-if="messages?.length"
    ref="bubbleListRef"
    :style="{ height: '100%', paddingInline: '16px' }"
    :items="bubbleItems"
    :roles="roles"
    :auto-scroll="false"
  >
    <template #footer="{ item }">
      <div class="msg-footer">
        <AButton
          type="text"
          size="small"
          v-if="item.role !== 'user'"
          :icon="h(ReloadOutlined)"
          class="msg-footer-btn"
          @click="emit('refresh', item.key)"
        />
        <AButton
          type="text"
          size="small"
          :style="{ cursor: 'pointer', color: copied ? 'green' : 'inherit' }"
          :icon="h(CopyOutlined)"
          @click="copy(item.content)"
        />
      </div>
    </template>
  </Bubble.List>
  <template v-else>
    <Welcome
      variant="borderless"
      title="👋 欢迎，我是摸鱼小助手"
      description="要是喜欢我，请点击右边的图标，给项目点个star吧！"
      :style="welcomeStyle"
    >
      <template #extra>
        <Space>
          <AButton @click="openGithub">
            <template #icon>
              <Icon icon="simple-icons:github" />
            </template>
          </AButton>
          <AButton @click="openGitee">
            <template #icon>
              <Icon icon="simple-icons:gitee" color="#bf0c2c" />
            </template>
          </AButton>
        </Space>
      </template>
    </Welcome>
    <Prompts
      wrap
      :title="() => '我可以帮忙：'"
      :items="suggestQuestions.map((i) => ({ key: i, description: i }))"
      :style="{ 'margin-inline': '16px' }"
      @item-click="(info) => emit('submit', info?.data?.description as string)"
    />
  </template>
</template>

<script setup lang="ts">
  import { computed, h, nextTick, onUnmounted, ref, watch } from "vue";
  import { CopyOutlined, ReloadOutlined, UserOutlined } from "@ant-design/icons-vue";
  import { Bubble, Prompts, Welcome } from "ant-design-x-vue";
  import { Button as AButton, Space, Spin } from "ant-design-vue";
  import { Icon } from "@mfish/core/components/Icon";
  import { FileHref } from "@mfish/core/components/FileUpDown";
  import { useClipboard } from "@vueuse/core";
  import { useRootSetting } from "@mfish/core/hooks";
  import { renderSmart } from "./hooks/useMarkdownRender";
  import AgentMessage from "./AgentMessage.vue";
  import type { FrontendActionType } from "./hooks/useFrontendAction";

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
    steps: any[];
    actions?: AgentAction[];
    done: boolean;
  }

  interface MessageItem {
    id: string;
    message: { role: string; content: string };
    status: "pending" | "loading" | "success" | "error" | "local";
    agent?: AgentState;
    /** 用户消息附带的已上传文件 fileKey 数组（用于在气泡中展示文件列表） */
    fileIds?: string[];
    /** 是否启用打字机效果（仅用户本次提问触发的 assistant 消息才为 true） */
    animateTyping?: boolean;
  }

  const props = defineProps<{
    messages: MessageItem[];
    /** 推荐问题列表 */
    suggestQuestions: string[];
  }>();

  const emit = defineEmits<{
    (e: "refresh", index: number): void;
    (e: "submit", val: string): void;
  }>();

  const { copy, copied } = useClipboard({ legacy: true });
  const color = useRootSetting().getThemeColor;

  // 动态滚动彩色条纹 loading 样式
  const loadingMessageStyle = {
    "background-image": "linear-gradient(90deg, #ff6b23 0%, #af3cb8 25%, #53b6ff 50%, #af3cb8 75%, #ff6b23 100%)",
    "background-size": "200% 2px",
    "background-repeat": "no-repeat",
    "background-position": "0% bottom",
    animation: "chatLoadingStripe 1.5s linear infinite"
  } as const;

  const errorMessageStyle = { color: "red" } as const;

  const welcomeStyle = {
    "margin-inline": "16px",
    padding: "12px 16px",
    "border-radius": "8px",
    background: "linear-gradient(97deg, rgba(90,196,255,0.12) 0%, rgba(174,136,255,0.12) 100%)",
    "margin-bottom": "16px"
  } as const;

  const roles: (typeof Bubble.List)["roles"] = {
    assistant: {
      placement: "start",
      avatar: {
        icon: h("img", { class: "chat-img", src: "/resource/img/logo.png", alt: "chat-img" })
      },
      loadingRender: () => h(Space, () => [h(Spin, { size: "small" }), "正在生成内容，请稍后..."])
    },
    user: { placement: "end", avatar: { icon: h(UserOutlined), style: { background: color } } }
  };

  // 气泡列表 items：chat 消息用 renderSmart，agent 消息用 AgentMessage 组件
  const bubbleItems = computed(() =>
    props.messages.map((i, index) => {
      const isAgent = !!i.agent;
      // chat 模式 pending 或 agent 模式未完成时显示动态滚动条纹
      const showLoadingStripe =
        i.status === "error" ? false : (i.status === "pending" && !isAgent) || (isAgent && !i.agent!.done);
      // 用户消息附带文件时，在内容下方追加 FileHref 文件列表（可点击预览/下载）
      const hasFiles = i.message.role === "user" && i.fileIds && i.fileIds.length > 0;

      return {
        ...i.message,
        key: index,
        styles: {
          content: i.status === "error" ? errorMessageStyle : showLoadingStripe ? loadingMessageStyle : {},
          footer: { marginTop: "2px" }
        },
        loading: i.status === "pending" && !isAgent,
        // 逐字打字机效果：与底部 LoadingButton 同步（pending / loading 期间持续显示）
        // 仅用户本次提问触发的 assistant 消息（animateTyping=true）才启用；刷新重试 / 加载历史直接显示完整内容
        typing:
          (i.status === "pending" || i.status === "loading") && !isAgent && i.animateTyping
            ? { step: 1, interval: 28 }
            : false,
        // agent 消息渲染为 AgentMessage 组件；带文件的用户消息在内容下方追加 FileHref；其他用 renderSmart
        // animateTyping 同时结合 status 判断：仅 pending/loading 期间才启用打字机
        // 切换 session 加载的历史消息 status 为 success，不启用打字机，直接显示完整内容
        messageRender: isAgent
          ? () =>
              h(AgentMessage, {
                msgId: i.id,
                agent: i.agent!,
                finalContent: i.message.content,
                animateTyping:
                  i.animateTyping && (i.status === "pending" || i.status === "loading")
              })
          : hasFiles
            ? (content: any) =>
                h("div", { style: "display: flex; flex-direction: column; gap: 6px" }, [
                  renderSmart(content),
                  h(FileHref, { keys: i.fileIds! })
                ])
            : renderSmart
      };
    })
  );

  function openGitee() {
    window.open("https://gitee.com/qiufeng9862/mfish-nocode", "_blank");
  }

  function openGithub() {
    window.open("https://github.com/mfish-qf/mfish-nocode", "_blank");
  }

  // ==================== 自动滚动到底部 ====================
  // Bubble.List 内置 autoScroll 只监听 items.length 和 typing 完成，不监听 content 变化
  // 这里用组件 expose 的 scrollTo 方法直接操作内置滚动容器，配合 MutationObserver 监听所有内容变化
  const bubbleListRef = ref<any>();
  // 用户是否手动向上滚动离开底部（true 时不自动跟踪）
  let userScrolledUp = false;
  let mutationObserver: MutationObserver | null = null;
  let scrollRaf: number | null = null;

  // 滚动到最底部。force=true 时忽略用户手动滚动状态（用于新消息发送场景）
  function scrollToBottom(force = false) {
    if (!force && userScrolledUp) return;
    if (scrollRaf !== null) cancelAnimationFrame(scrollRaf);
    scrollRaf = requestAnimationFrame(() => {
      scrollRaf = null;
      const comp = bubbleListRef.value;
      const el: HTMLElement | undefined = comp?.nativeElement;
      if (!el) return;
      el.scrollTop = el.scrollHeight;
    });
  }

  // 滚动事件：判断用户是否离开底部
  function onScroll() {
    const el: HTMLElement | undefined = bubbleListRef.value?.nativeElement;
    if (!el) return;
    const distanceToBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    userScrolledUp = distanceToBottom > 80;
  }

  // 监听 Bubble.List 内部 DOM 变化：chat 流式追加 content、agent steps/打字机更新
  function setupObserver() {
    const el: HTMLElement | undefined = bubbleListRef.value?.nativeElement;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    mutationObserver = new MutationObserver(() => scrollToBottom());
    mutationObserver.observe(el, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  // Bubble.List 挂载后初始化监听（用 watch 等待 ref 就绪）
  const stopWatch = watch(
    () => bubbleListRef.value,
    (comp) => {
      if (comp?.nativeElement) {
        nextTick(() => {
          setupObserver();
          scrollToBottom();
        });
        stopWatch();
      }
    },
    { immediate: true }
  );

  onUnmounted(() => {
    const el: HTMLElement | undefined = bubbleListRef.value?.nativeElement;
    el?.removeEventListener("scroll", onScroll);
    mutationObserver?.disconnect();
    mutationObserver = null;
    if (scrollRaf !== null) {
      cancelAnimationFrame(scrollRaf);
      scrollRaf = null;
    }
  });

  // 新消息发送时（messages.length 增加）：重置用户滚动状态并强制滚动
  watch(
    () => props.messages.length,
    (newLen, oldLen) => {
      if (newLen > (oldLen || 0)) {
        userScrolledUp = false;
        nextTick(() => scrollToBottom(true));
      }
    }
  );
</script>

<style lang="less" scoped>
  .msg-footer {
    display: flex;
    gap: 4px;

    .msg-footer-btn {
      cursor: pointer;
    }
  }

  // 用户气泡中的文件列表：右对齐，与用户消息内容位置一致
  :deep(.mfish-file-href) {
    align-items: flex-end;

    a {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: inherit;
      text-decoration: underline;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  // 气泡内容溢出/换行控制，防止长 URL、长串、代码块、表格把对话框撑爆
  :deep(.ant-bubble) {
    max-width: 100%;
    min-width: 0;
  }
  :deep(.ant-bubble-content) {
    max-width: calc(100% - 24px);
    min-width: 0;
    overflow-wrap: anywhere;
    word-break: break-word;
    overflow-x: auto;

    > div {
      max-width: 100%;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    pre,
    code {
      max-width: 100%;
      white-space: pre-wrap;
      word-break: break-word;
      overflow-wrap: anywhere;
    }
    pre {
      overflow-x: auto;
    }

    table {
      display: block;
      max-width: 100%;
      overflow-x: auto;
      white-space: nowrap;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }
</style>
