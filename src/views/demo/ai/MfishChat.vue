<!--
 @description: 摸鱼小助手
 @author: mfish
 @date: 2025/8/29
-->
<template>
  <div :class="prefixCls">
    <div class="copilot-chat">
      <!-- 对话区 - header -->
      <!-- {chatHeader} -->
      <div :style="styles.chatHeader">
        <div :style="styles.headerTitle"> ✨ 摸鱼小助手 </div>
        <Space :size="0">
          <AButton type="link" :icon="h(PlusOutlined)" size="small" @click="createNewSession" />
          <Popover
            v-if="conversationList.length > 0"
            placement="bottomRight"
            :overlay-style="{ padding: 0, maxHeight: 600 }"
            :get-popup-container="(triggerNode: HTMLElement) => triggerNode?.parentNode as HTMLElement"
          >
            <template #content>
              <Conversations
                :items="conversationList"
                :active-key="curSession"
                groupable
                :styles="{ ...styles.conversations, item: { padding: '0 8px' } }"
                @active-change="changeConversation"
              />
            </template>
            <AButton type="link" :icon="h(CommentOutlined)" />
          </Popover>
          <AButton type="link" :icon="h(CloseOutlined)" @click="() => emit('close')" />
        </Space>
      </div>
      <!-- 对话区 - 消息列表 -->
      <div :style="styles.chatList">
        <Bubble.List
          v-if="messages?.length"
          :style="{ height: '100%', paddingInline: '16px' }"
          :items="
            messages?.map((i, index) => ({
              ...i.message,
              key: index,
              styles: {
                content:
                  i.status === 'pending' ? styles.loadingMessage : i.status === 'error' ? styles.errorMessage : {}
              },
              loading: i.status === 'pending',
              typing: { step: 3, interval: 30, suffix: '💖' },
              messageRender: renderMarkdown
            }))
          "
          :roles="roles"
        />
        <template v-else>
          <Welcome
            variant="borderless"
            title="👋 欢迎，我是摸鱼小助手"
            description="要是喜欢我，请点击右边的图标，给项目点个star吧！"
            :style="styles.chatWelcome"
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
            :items="SUGGEST_QUESTIONS.map((i) => ({ key: i, description: i }))"
            :style="{
              'margin-inline': '16px'
            }"
            @item-click="(info) => handleUserSubmit(info?.data?.description as string)"
          />
        </template>
      </div>

      <!-- 对话区 - 输入框 -->
      <!-- {chatSender} -->
      <div :style="styles.chatSend">
        <div :style="styles.sendAction">
          <AButton :icon="h(ScheduleOutlined)" @click="handleUserSubmit('请给我讲一个笑话?')"> 讲个笑话 </AButton>
        </div>
        <!-- 输入框 -->
        <Suggestion :items="() => MOCK_SUGGESTIONS" @select="(itemVal) => (inputValue = `[${itemVal}]:`)">
          <template #default="{ onTrigger }">
            <Sender
              :loading="status === 'pending' || status === 'loading'"
              :value="inputValue"
              allow-speech
              placeholder="询问或输入 / 使用技巧"
              @change="
                (v) => {
                  onTrigger(v === '/');
                  inputValue = v;
                }
              "
              @submit="
                () => {
                  handleUserSubmit(inputValue);
                  inputValue = '';
                }
              "
              @cancel="
                () => {
                  try {
                    abortController?.abort();
                  } catch (error) {
                    console.error(error);
                  }
                }
              "
              @paste-file="onPasteFile"
            >
              <template #header>
                <Sender.Header
                  :styles="{ content: { padding: 0 } }"
                  :open="attachmentsOpen"
                  force-render
                  @open-change="(val) => (attachmentsOpen = val)"
                >
                  <Attachments
                    ref="attachmentsRef"
                    :before-upload="() => false"
                    :items="files"
                    :placeholder="
                      (type) =>
                        type === 'drop'
                          ? { title: '将文件拖放到此处' }
                          : {
                              icon: h(CloudUploadOutlined),
                              title: '上传文件',
                              description: '单击或拖动文件到此区域进行上传'
                            }
                    "
                    @change="({ fileList }) => (files = fileList)"
                  />
                </Sender.Header>
              </template>
              <template #prefix>
                <AButton
                  type="text"
                  :icon="h(PaperClipOutlined, { style: { fontSize: '18px' } })"
                  @click="attachmentsOpen = !attachmentsOpen"
                />
              </template>
              <template
                #actions="{
                  info: {
                    components: { SendButton, LoadingButton, SpeechButton }
                  }
                }"
              >
                <div :style="{ display: 'flex', alignItems: 'center', gap: 4 }">
                  <component :is="SpeechButton" :style="styles.speechButton" />
                  <component :is="LoadingButton" v-if="status === 'pending' || status === 'loading'" type="default" />
                  <component :is="SendButton" v-else type="primary" />
                </div>
              </template>
            </Sender>
          </template>
        </Suggestion>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {
    CloseOutlined,
    CloudUploadOutlined,
    CommentOutlined,
    CopyOutlined,
    PaperClipOutlined,
    PlusOutlined,
    ReloadOutlined,
    ScheduleOutlined,
    UserOutlined
  } from "@ant-design/icons-vue";
  import {
    Attachments,
    type Attachment,
    Bubble,
    Conversations,
    Prompts,
    Sender,
    Suggestion,
    Welcome,
    theme,
    XRequest,
    BubbleProps
  } from "ant-design-x-vue";
  import { Icon } from "@mfish/core/components/Icon";
  import { Button as AButton, Popover, Space, Spin, message } from "ant-design-vue";
  import { ref, watch, computed, h, nextTick } from "vue";
  import { useDesign, useRootSetting } from "@mfish/core/hooks";
  import { getToken } from "@mfish/core/utils/auth";
  import { buildUUID } from "@mfish/core/utils/Uuid";
  import markdownit from "markdown-it";
  import { useClipboard } from "@vueuse/core";
  import { getAiRouter } from "@/api/ai/AiRouter";

  defineOptions({ name: "MfishChat" });
  const emit = defineEmits(["close"]);
  const { prefixCls } = useDesign("ai-chat");

  const conversationList = computed(() => {
    return (
      Object.keys(messageHistory.value).map((key) => {
        return {
          key,
          label: messageHistory.value[key][0].message.content,
          group: "Today"
        };
      }) || []
    );
  });
  const MOCK_SUGGESTIONS = [
    { label: "Write a report", value: "report" },
    { label: "Draw a picture", value: "draw" },
    {
      label: "Check some knowledge",
      value: "knowledge",
      children: [
        { label: "About React", value: "react" },
        { label: "About Ant Design", value: "antd" }
      ]
    }
  ];
  const SUGGEST_QUESTIONS = [
    "介绍一下自己吧！",
    "请帮我查询一下我有哪些权限？",
    "摸鱼低代码有哪些菜单，请列出菜单树结构？",
    "请帮我查询字典名称为“用户性别”的字典编码？",
    "请帮我查询下字典编码为“sys_user_sex”的字典项？"
  ];

  const attachmentsRef = ref<InstanceType<typeof Attachments>>();
  const abortController = ref<AbortController>();
  // ==================== State ====================
  const status = ref<"pending" | "loading" | "success" | "error">();
  const messageHistory = ref<Record<string, any>>({});
  const curSession = ref<string>(buildUUID());
  const attachmentsOpen = ref(false);
  const files = ref<Attachment[]>([]);
  const inputValue = ref("");
  const messages = ref<any[]>([]);

  const md = markdownit({ html: true, breaks: true });
  const { copy } = useClipboard({ legacy: true });
  const renderMarkdown: BubbleProps["messageRender"] = (content) => {
    return h("div", { innerHTML: md.render(content) });
  };
  // ==================== Style ====================
  const { token } = theme.useToken();
  const styles = computed(() => {
    return {
      // chatHeader 样式
      chatHeader: {
        height: "38px",
        boxSizing: "border-box",
        borderBottom: `1px solid ${token.value.colorBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10px 0 16px"
      },
      headerTitle: {
        "font-weight": 600,
        "font-size": "15px"
      },
      conversations: {
        width: "300px",
        "& .ant-conversations-list": {
          paddingInlineStart: 0
        }
      },
      // chatList 样式
      chatList: {
        overflow: "auto",
        "padding-block": "16px",
        flex: 1
      },
      chatWelcome: {
        "margin-inline": "16px",
        padding: "12px 16px",
        "border-radius": "8px",
        background: "linear-gradient(97deg, rgba(90,196,255,0.12) 0%, rgba(174,136,255,0.12) 100%)",
        "margin-bottom": "16px"
      },
      loadingMessage: {
        "background-image": "linear-gradient(90deg, #ff6b23 0%, #af3cb8 31%, #53b6ff 89%)",
        "background-size": "100% 2px",
        "background-repeat": "no-repeat",
        "background-position": "bottom"
      },
      errorMessage: {
        color: "red"
      },
      // chatSend 样式
      chatSend: {
        padding: "12px"
      },
      sendAction: {
        display: "flex",
        "align-items": "center",
        "margin-bottom": "12px",
        gap: "8px"
      },
      speechButton: {
        "font-size": "18px",
        color: `${token.value.colorText} !important`
      }
    } as const;
  });
  const color = useRootSetting().getThemeColor;
  const roles: (typeof Bubble.List)["roles"] = {
    assistant: {
      placement: "start",
      avatar: {
        icon: h("img", { class: "chat-img", src: "/resource/img/logo.png", alt: "chat-img" })
      },
      footer: (data) =>
        h("div", { style: { display: "flex" } }, [
          // h(AButton, {
          //   type: "text",
          //   size: "small",
          //   icon: h(ReloadOutlined),
          //   style: { cursor: "pointer" },
          //   onClick: () => {
          //   }
          // }),
          h(AButton, {
            type: "text",
            size: "small",
            icon: h(CopyOutlined),
            style: { cursor: "pointer" },
            onClick: () => {
              copy(data);
            }
          })
        ]),
      loadingRender: () => h(Space, () => [h(Spin, { size: "small" }), "正在生成内容，请稍后..."])
    },
    user: { placement: "end", avatar: { icon: h(UserOutlined), style: { background: color } } }
  };

  watch(curSession, (val: string, oldVal: string) => {
    //保存历史对话
    if (messages.value?.length && oldVal) {
      messageHistory.value = {
        ...messageHistory.value,
        [oldVal]: messages.value
      };
    }
    messages.value = messageHistory.value?.[val] || [];
  });

  async function request(val) {
    status.value = "pending";
    const id = buildUUID();
    const answer = { id, message: { role: "assistant", content: "" }, status: "pending" };
    messages.value.push({ id, message: { role: "user", content: val }, status: "local" }, answer);
    getAiRouter(val)
      .then((aiRouter) => {
        sseRequest(aiRouter?.path || "/sys/ai/chat", id, val);
      })
      .catch((error) => {
        status.value = error;
        const index = messages.value.findIndex((msg) => msg.id === id && msg.message.role === "assistant");
        if (index !== -1) {
          messages.value[index].message.content += error.message;
          messages.value[index].status = "error";
        }
      });
  }

  function sseRequest(path: string, id: string, val: string) {
    // 建立新 SSE 连接，并把 prompt 传给后端
    const chatRequest = XRequest({
      baseURL: `/api${path}?access_token=${getToken()}`
    });
    chatRequest.value.create(
      {
        id,
        sessionId: curSession.value,
        message: { role: "user", content: val }
      },
      {
        onSuccess: (data) => {
          if (data && data.length > 0) {
            const index = messages.value.findIndex((msg) => msg.id === data[0].id && msg.message.role === "assistant");
            status.value = "success";
            messages.value[index].status = "success";
            if (!messages.value[index].message?.content) {
              messages.value[index].message.content = "小助手未获取到回复";
            }
          } else {
            status.value = "error";
          }
        },
        onError: (error: Error) => {
          status.value = "error";
          messages.value[messages.value.length - 1].status = "error";
          if (error.name === "AbortError") {
            messages.value[messages.value.length - 1].message.content = "请求已终止";
          } else {
            messages.value[messages.value.length - 1].message.content = "请求出错";
          }
        },
        onUpdate: (data) => {
          status.value = "loading";
          const index = messages.value.findIndex((msg) => msg.id === data.id && msg.message.role === "assistant");
          if (index !== -1) {
            messages.value[index].message.content += data.content;
            messages.value[index].status = "loading";
          }
        },
        onStream: (controller) => {
          abortController.value = controller;
        }
      },
      new TransformStream<string, { id: string; content: string }>({
        transform(chunk, controller) {
          const regexData = /data:(?<data>\{"id":"\w+","content":.+\})/g;
          let content = "";
          let id = "";
          for (const match of chunk.matchAll(regexData)) {
            const data = match.groups?.data ? JSON.parse(match.groups.data) : "";
            content += data?.content || "";
            id = data?.id;
          }
          controller.enqueue({ id, content });
        }
      })
    );
  }

  // ==================== Event ====================
  const handleUserSubmit = (val: string) => {
    request(val);
  };

  const onPasteFile = (_: File, files: FileList) => {
    for (const file of [...files]) {
      attachmentsRef.value?.upload(file);
    }
    attachmentsOpen.value = true;
  };

  const createNewSession = () => {
    if (status.value === "pending" || status.value === "loading") {
      message.error("消息正在请求，您可以在请求完成后创建新的对话，也可以立即中止。..");
      return;
    }
    if (messages.value?.length) {
      try {
        abortController.value?.abort();
      } catch (error) {
        console.error(error);
      }
      // The abort execution will trigger an asynchronous requestFallback, which may lead to timing issues.
      // In future versions, the sessionId capability will be added to resolve this problem.
      setTimeout(() => {
        curSession.value = buildUUID();
      }, 100);
    } else {
      message.error("现在这是一场新的对话。");
    }
  };

  const changeConversation = async (val: string) => {
    try {
      abortController.value?.abort();
    } catch (error) {
      console.error(error);
    }
    // The abort execution will trigger an asynchronous requestFallback, which may lead to timing issues.
    // In future versions, the sessionId capability will be added to resolve this problem.
    setTimeout(() => {
      curSession.value = val;
    }, 100);
  };

  function openGitee() {
    window.open("https://gitee.com/qiufeng9862/mfish-nocode", "_blank");
  }

  function openGithub() {
    window.open("https://github.com/mfish-qf/mfish-nocode", "_blank");
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-ai-chat";
  .@{prefix-cls} {
    .copilot-chat {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
</style>
