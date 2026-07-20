<!--
 @description: 对话消息列表组件 —— chat 与 agent 模式共用 Bubble.List
 @author: mfish
-->
<template>
  <Bubble.List
    v-if="messages?.length"
    :style="{ height: '100%', paddingInline: '16px' }"
    :items="bubbleItems"
    :roles="roles"
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
  import { computed, h } from "vue";
  import { CopyOutlined, ReloadOutlined, UserOutlined } from "@ant-design/icons-vue";
  import { Bubble, Prompts, Welcome } from "ant-design-x-vue";
  import { Button as AButton, Space, Spin } from "ant-design-vue";
  import { Icon } from "@mfish/core/components/Icon";
  import { FileHref } from "@mfish/core/components/FileUpDown";
  import { useClipboard } from "@vueuse/core";
  import { useRootSetting } from "@mfish/core/hooks";
  import { renderSmart } from "./hooks/useMarkdownRender";
  import AgentMessage from "./AgentMessage.vue";

  interface AgentState {
    planText: string;
    steps: any[];
    done: boolean;
  }

  interface MessageItem {
    id: string;
    message: { role: string; content: string };
    status: "pending" | "loading" | "success" | "error" | "local";
    agent?: AgentState;
    /** 用户消息附带的已上传文件 fileKey 数组（用于在气泡中展示文件列表） */
    fileIds?: string[];
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
        typing: i.status === "pending" && !isAgent ? { step: 3, interval: 20 } : false,
        // agent 消息渲染为 AgentMessage 组件；带文件的用户消息在内容下方追加 FileHref；其他用 renderSmart
        messageRender: isAgent
          ? () => h(AgentMessage, { msgId: i.id, agent: i.agent!, finalContent: i.message.content })
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
