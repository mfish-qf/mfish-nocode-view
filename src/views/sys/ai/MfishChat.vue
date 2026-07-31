<!--
 @description: 摸鱼小助手 —— 容器组件（header + 消息列表 + 输入框）
   - chat / agent 模式切换在输入框 footer
   - 消息渲染、SSE、markdown 等逻辑已抽到子组件 / hooks
 @author: mfish
 @date: 2025/8/29
-->
<template>
  <div :class="prefixCls">
    <div class="copilot-chat">
      <!-- 对话区 - header -->
      <div :style="styles.chatHeader">
        <div :style="styles.headerTitle"> ✨ 摸鱼小助手 </div>
        <Space :size="0">
          <AButton type="link" :icon="h(PlusOutlined)" size="small" @click="createNewSession" />
          <Popover
            v-if="conversationList.length > 0"
            placement="bottomRight"
            :overlay-style="{ padding: 0, maxHeight: 800 }"
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

      <!-- 对话区 - 消息列表（chat / agent 共用） -->
      <div :style="styles.chatList">
        <ChatMessageList
          :messages="messages"
          :suggest-questions="SUGGEST_QUESTIONS"
          @refresh="refreshRequest"
          @submit="handleUserSubmit"
        />
      </div>

      <!-- 对话区 - 输入框 -->
      <div :style="styles.chatSend">
        <div :style="styles.sendAction">
          <AButton :icon="h(SmileOutlined)" @click="handleUserSubmit('请给我讲一个笑话?')"> 讲个笑话 </AButton>
        </div>
        <Suggestion :items="() => MOCK_SUGGESTIONS" @select="(itemVal) => (inputValue = `[${itemVal}]:`)">
          <template #default="{ onTrigger }">
            <Sender
              :loading="status === 'pending' || status === 'loading'"
              :value="inputValue"
              :actions="false"
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
              @cancel="abort"
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
                    :custom-request="customUploadRequest"
                    :accept="acceptAttr"
                    :items="files"
                    :placeholder="
                      (type) =>
                        type === 'drop'
                          ? { title: '将文件拖放到此处' }
                          : {
                              icon: h(CloudUploadOutlined),
                              title: '上传文件',
                              description: '支持文本、代码、Office 文档（.txt/.md/.json/.docx/.xlsx 等）'
                            }
                    "
                    @change="({ fileList }) => (files = fileList)"
                    @remove="handleFileRemove"
                  />
                </Sender.Header>
              </template>
              <template
                #footer="{
                  info: {
                    components: { SendButton, LoadingButton, SpeechButton }
                  }
                }"
              >
                <div style="display: flex; align-items: center; justify-content: space-between">
                  <div>
                    <Select
                      v-model:value="chatMode"
                      :options="chatModeOptions"
                      variant="borderless"
                      size="small"
                      :bordered="false"
                      class="chat-mode-select"
                      style="width: 90px"
                    />
                    <AButton
                      type="text"
                      :icon="h(PaperClipOutlined, { style: { fontSize: '18px' } })"
                      @click="attachmentsOpen = !attachmentsOpen"
                    />
                  </div>
                  <div :style="{ display: 'flex', alignItems: 'center', gap: 4 }">
                    <component :is="SpeechButton" :style="styles.speechButton" />
                    <component :is="LoadingButton" v-if="status === 'pending' || status === 'loading'" type="default" />
                    <component :is="SendButton" v-else type="primary" />
                  </div>
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
    MessageOutlined,
    PaperClipOutlined,
    PlusOutlined,
    RobotOutlined,
    SmileOutlined
  } from "@ant-design/icons-vue";
  import { type Attachment, Attachments, Conversations, Sender, Suggestion, theme } from "ant-design-x-vue";
  import { Button as AButton, message, Popover, Select, Space, UploadProps } from "ant-design-vue";
  import { computed, h, ref, watch } from "vue";
  import { useDesign } from "@mfish/core/hooks";
  import { buildUUID } from "@mfish/core/utils/Uuid";
  import { uploadApi } from "@mfish/core/api";
  import ChatMessageList from "./ChatMessageList.vue";
  import { useChatSSE, type ChatStatus, type SseEvent } from "./hooks/useChatSSE";
  import { useFrontendAction, type FrontendAction } from "./hooks/useFrontendAction";

  defineOptions({ name: "MfishChat" });
  const emit = defineEmits(["close"]);
  const { prefixCls } = useDesign("ai-chat");

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

  // ==================== State ====================
  const attachmentsRef = ref<InstanceType<typeof Attachments>>();
  // 已上传到后台的文件 fileKey 数组（发送消息时带上，供后端读取文件内容做上下文）
  const fileIdList = ref<string[]>([]);
  // 对话模式：chat 走原对话逻辑，agent 调用 /ai/agent/chat 接口
  const chatMode = ref<"chat" | "agent">("chat");
  const chatModeLabel = (text: string, IconComp: any) =>
    h("span", { style: "display: inline-flex; align-items: center; gap: 6px" }, [h(IconComp), text]);
  const chatModeOptions = [
    { label: chatModeLabel("Chat", MessageOutlined), value: "chat" },
    { label: chatModeLabel("Agent", RobotOutlined), value: "agent" }
  ];

  const status = ref<ChatStatus>();
  const messageHistory = ref<Record<string, any>>({});
  const curSession = ref<string>(buildUUID());
  const attachmentsOpen = ref(false);
  const files = ref<Attachment[]>([]);
  const inputValue = ref("");
  const messages = ref<any[]>([]);

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

  // ==================== Style ====================
  const { token } = theme.useToken();
  const styles = computed(() => {
    return {
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
      chatList: {
        "padding-block": "16px",
        flex: 1,
        "min-height": 0
      },
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

  // ==================== SSE ====================
  const { sseRequest, abort } = useChatSSE();
  const { executeAction, parseAction } = useFrontendAction();

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

  async function request(val: string) {
    status.value = "pending";
    const id = buildUUID();
    // animateTyping=true 标记仅本次提问触发的加载才启用打字机效果（刷新/加载历史不带此标记）
    const answer: any = { id, message: { role: "assistant", content: "" }, status: "pending", animateTyping: true };
    // agent 模式预初始化 agent 字段，使渲染函数能展示加载态
    if (chatMode.value === "agent") {
      answer.agent = { planText: "", steps: [], actions: [], done: false };
    }
    // 携带已上传文件的 fileKey 数组，发送后清空附件状态
    const fileIds = [...fileIdList.value];
    fileIdList.value = [];
    files.value = [];
    attachmentsOpen.value = false;
    // 用户消息上记录 fileIds，便于在气泡中展示文件列表（可点击下载/预览）
    messages.value.push({ id, message: { role: "user", content: val }, status: "local", fileIds }, answer);
    sendMessage(id, val, fileIds);
  }

  function sendMessage(id: string, val: string, fileIds: string[] = []) {
    // chat 模式走原对话逻辑，agent 模式调用 /ai/agent/chat 接口
    const path = chatMode.value === "agent" ? "/ai/agent/chat" : "/ai/router";
    sseRequest(id, val, {
      path,
      sessionId: curSession,
      fileIds: fileIds.length > 0 ? fileIds : undefined,
      onEvent: (data) => handleSseEvent(id, data),
      onComplete: (events) => handleSseComplete(id, events),
      onError: (error) => handleSseError(id, error)
    });
  }

  // ==================== SSE 事件处理 ====================
  function findAssistantMsg(id: string) {
    const index = messages.value.findIndex((msg) => msg.id === id && msg.message.role === "assistant");
    return index === -1 ? null : { index, msg: messages.value[index] };
  }

  function handleSseEvent(id: string, data: SseEvent) {
    status.value = "loading";
    const found = findAssistantMsg(id);
    if (!found) return;
    const { msg } = found;
    // 结束标志：content 为 null 且 finishReason 为 STOP，不追加内容
    if (data.content === null && data.finishReason === "STOP") {
      msg.status = "loading";
      return;
    }
    // FRONTEND_ACTION 类型：解析 content JSON 并执行对应前端动作（navigate/refresh/click/fill/openModal）
    if (data.type === "FRONTEND_ACTION") {
      handleFrontendActionEvent(msg, data);
      return;
    }
    // agent 模式按 type 分发；chat 模式无 type，直接追加 content
    if (data.type) {
      handleAgentEvent(msg, data);
    } else {
      msg.message.content += data.content || "";
      msg.status = "loading";
    }
  }

  /**
   * 处理 FRONTEND_ACTION 事件：
   *   1. 解析 content JSON 得到 FrontendAction
   *   2. 记录到 msg.agent.actions 数组（pending 状态）便于在气泡中展示
   *   3. 串行执行：同一消息的多个 action 按到达顺序排队，前一个完成后再执行下一个
   *      （navigate 后等待页面渲染，refresh 等待列表加载，避免操作相互覆盖）
   *   不阻塞 SSE 流，后续 TOKEN_STREAM/STOP 等事件照常处理
   */
  function handleFrontendActionEvent(msg: any, data: SseEvent) {
    if (!msg.agent) {
      msg.agent = { planText: "", steps: [], actions: [], done: false };
    }
    if (!Array.isArray(msg.agent.actions)) {
      msg.agent.actions = [];
    }
    // action 执行队列：每个 msg 维护一个 Promise 链，新 action 接到链尾实现串行
    if (!msg.agent._actionChain) {
      msg.agent._actionChain = Promise.resolve();
    }
    const action = parseAction(data.content);
    if (!action) {
      console.warn("[FRONTEND_ACTION] content 解析失败，已忽略:", data.content);
      return;
    }
    // 先以 pending 状态记录，便于即时在气泡中展示"执行中"
    const record: {
      action: string;
      description?: string;
      params?: Record<string, any>;
      target?: string;
      status: "pending" | "success" | "error";
      result: string;
    } = {
      ...action,
      status: "pending",
      result: ""
    };
    msg.agent.actions.push(record);
    msg.status = "loading";
    // 排队串行执行：等前一个 action 完成后再执行当前 action
    msg.agent._actionChain = msg.agent._actionChain.then(async () => {
      // 前一个 action 是 navigate/refresh 时，等待页面渲染/列表加载完成再执行下一个
      // navigate 路由跳转 + 目标页面挂载需要时间；refresh 触发列表请求也需要时间
      await executeAction(action).then((result) => {
        record.status = result.success ? "success" : "error";
        record.result = result.message;
      });
      await waitForNextAction(action);
    });
  }

  /**
   * action 执行后等待时间：navigate 后页面有异步渲染/请求，需等待完成再执行下一个 action
   * 否则下一个 refresh/click 会作用在旧 DOM 或被新页面渲染覆盖
   *
   * 注意：navigate 的 executeAction 已 await router.push，路由跳转本身已完成，
   * 但目标页面的组件挂载 + onTableRefresh 注册是异步的，仍需等待
   * refresh 通过事件总线触发 reload（同步触发，异步查询），不阻塞下一个 action，无需额外等待
   */
  function waitForNextAction(action: FrontendAction): Promise<void> {
    const { action: type } = action;
    let delay = 0;
    switch (type) {
      case "navigate":
        // router.push 已 await（路由切换完成），等待目标页面组件挂载 + onTableRefresh 注册 + 列表首次加载
        delay = 500;
        break;
      case "refresh":
        // triggerTableRefresh 同步触发 reload，reload 在后台异步查询，不阻塞下一个 action
        delay = 0;
        break;
      case "openModal":
        // 模态框打开 + 表单渲染
        delay = 300;
        break;
      case "fill":
        // 表单填充后可能触发联动，稍等一下
        delay = 100;
        break;
    }
    if (delay <= 0) return Promise.resolve();
    return new Promise((resolve) => setTimeout(resolve, delay));
  }

  function handleSseComplete(id: string, events: SseEvent[]) {
    const found = findAssistantMsg(events[0]?.id || id);
    if (!found) {
      status.value = "error";
      return;
    }
    const { msg } = found;
    status.value = "success";
    msg.status = "success";
    // agent 模式：标记计划完成，收尾运行中的步骤
    if (msg.agent) {
      msg.agent.done = true;
      if (Array.isArray(msg.agent.steps)) {
        msg.agent.steps.forEach((s: any) => {
          if (s.status === "running") s.status = "completed";
        });
      }
    }
    if (!msg.message?.content) {
      msg.message.content = "小助手未获取到回复";
    }
  }

  function handleSseError(id: string, error: Error) {
    status.value = "error";
    const found = findAssistantMsg(id);
    if (!found) return;
    const { msg } = found;
    msg.status = "error";
    if (error.name === "AbortError") {
      msg.message.content = "请求已终止";
    } else {
      msg.message.content = "请求出错";
    }
  }

  // ==================== Agent 事件分发 ====================
  // 实际数据格式：
  //   PLAN_CREATED:   { content: 计划描述文本, stepIndex: null }
  //   STEP_STARTED:   { content: 步骤标题, stepIndex: N }
  //   TOKEN_STREAM:   { content: 流式片段, stepIndex: N }
  //   STEP_COMPLETED: { content: 步骤完整内容, stepIndex: N }
  //   PLAN_COMPLETED: { content: 最终汇总, stepIndex: null }
  function handleAgentEvent(msg: any, data: SseEvent) {
    if (!msg.agent) {
      msg.agent = { planText: "", steps: [], actions: [], done: false };
    }
    if (!Array.isArray(msg.agent.steps)) {
      msg.agent.steps = [];
    }
    msg.status = "loading";
    const stepIndex = data.stepIndex;
    switch (data.type) {
      case "PLAN_CREATED": {
        msg.agent.planText = data.content || "";
        break;
      }
      case "STEP_STARTED": {
        if (stepIndex == null) break;
        msg.agent.steps[stepIndex] = {
          index: stepIndex,
          title: data.content || `步骤 ${stepIndex + 1}`,
          content: "",
          status: "running"
        };
        break;
      }
      case "TOKEN_STREAM": {
        if (stepIndex != null && msg.agent.steps[stepIndex]) {
          msg.agent.steps[stepIndex].content += data.content || "";
        } else {
          msg.message.content += data.content || "";
        }
        break;
      }
      case "STEP_COMPLETED": {
        if (stepIndex != null && msg.agent.steps[stepIndex]) {
          msg.agent.steps[stepIndex].status = "completed";
          if (data.content) {
            msg.agent.steps[stepIndex].content = data.content;
          }
        }
        break;
      }
      case "PLAN_COMPLETED": {
        msg.agent.done = true;
        msg.agent.steps.forEach((s: any) => {
          s.status = "completed";
        });
        if (data.content) {
          msg.message.content = data.content;
        }
        break;
      }
    }
  }

  // 重置 agent 状态（用于刷新请求）
  function resetAgentState(msg: any) {
    if (msg.agent) {
      // 保留 _actionChain 引用避免正在执行的 then 链丢失，但重置其他展示字段
      msg.agent = { planText: "", steps: [], actions: [], _actionChain: msg.agent._actionChain, done: false };
    }
  }

  function refreshRequest(index: number) {
    status.value = "pending";
    const message = messages.value[index - 1];
    if (message) {
      const answer = messages.value[index];
      if (answer) {
        answer.message.content = "";
        answer.status = "pending";
        // 刷新重试不启用打字机效果（仅用户本次提问触发才启用）
        answer.animateTyping = false;
        // 重置 agent 状态，使重新请求时展示加载效果
        if (answer.agent) {
          resetAgentState(answer);
        }
      }
      // 刷新时不重新携带文件（文件已随上次请求被后端消费）
      sendMessage(message.id, message.message.content, []);
    }
  }

  // ==================== Event ====================
  const handleUserSubmit = (val: string) => {
    request(val);
  };

  const onPasteFile = (_: File, files: FileList) => {
    for (const file of files) {
      attachmentsRef.value?.upload(file);
    }
    attachmentsOpen.value = true;
  };

  // ==================== 文件上传 ====================
  // 参考 demo-up-down 的 FileUp 组件实现：选择文件后立即通过 customRequest 上传到后台，
  // 拿到 fileKey 存入 fileIdList，发送消息时把 fileIdList 一起传给后端做上下文
  // 注意：不能用 beforeUpload 返回 false 阻止上传，那会连 customRequest 一起阻止

  // 允许上传的文件后缀集合（与后端 TextFileHandler + OfficeFileHandler 支持的格式一致）
  // 文本类：代码/配置/文档；Office 类：doc/xls/ppt 系列
  const ALLOWED_EXTENSIONS = [
    // 文本类
    ".txt",
    ".log",
    ".md",
    ".markdown",
    ".json",
    ".xml",
    ".yaml",
    ".yml",
    ".csv",
    ".sql",
    ".js",
    ".ts",
    ".java",
    ".py",
    ".go",
    ".rs",
    ".c",
    ".cpp",
    ".h",
    ".hpp",
    ".cs",
    ".rb",
    ".php",
    ".swift",
    ".kt",
    ".scala",
    ".sh",
    ".bat",
    ".ps1",
    ".properties",
    ".conf",
    ".ini",
    ".toml",
    ".html",
    ".htm",
    ".css",
    ".scss",
    ".less",
    ".vue",
    ".tsx",
    ".jsx",
    ".gradle",
    ".gitignore",
    ".dockerfile",
    ".env",
    ".proto",
    // Office 文档类（Apache POI 解析）
    ".docx",
    ".xlsx",
    ".pptx",
    ".docm",
    ".dotm",
    ".xlsm",
    ".xltm",
    ".pptm",
    ".potm"
  ];
  // 浏览器 input accept 属性值（逗号分隔）
  const acceptAttr = ALLOWED_EXTENSIONS.join(",");

  // 校验文件是否为允许的格式（accept 只是浏览器提示，用户可绕过，需在 customRequest 中二次校验）
  function isAllowedFile(filename: string): boolean {
    const lower = filename.toLowerCase();
    // 取最后一个点之后的部分作为后缀（.gitignore/.dockerfile/.env 这种以点开头的文件名也适用）
    const lastDot = lower.lastIndexOf(".");
    if (lastDot === -1) return false;
    const ext = lower.slice(lastDot);
    return ALLOWED_EXTENSIONS.includes(ext);
  }

  // 自定义上传：调用 uploadApi 上传到后台，成功后把 fileKey 记录到 fileIdList
  const customUploadRequest: UploadProps["customRequest"] = (options) => {
    const { file, onSuccess, onError, onProgress } = options;
    const fileName = (file as File)?.name || "";
    // 后缀校验：不允许的格式直接拒绝，不调用上传接口
    if (!isAllowedFile(fileName)) {
      message.error(`不支持的文件格式：${fileName}，仅支持文本/代码/Office 文档`);
      onError?.(new Error("unsupported file type"));
      return;
    }
    uploadApi({ file: file as File }, (progressEvent) => {
      if (progressEvent.total) {
        onProgress?.({ percent: Math.round((progressEvent.loaded * 100) / progressEvent.total) });
      }
    })
      .then((sysFile) => {
        onSuccess?.(sysFile);
        // 后台返回的 fileKey 即文件唯一 ID，存入数组待发送时带上
        if (sysFile?.fileKey) {
          fileIdList.value.push(sysFile.fileKey);
        }
      })
      .catch((error) => {
        onError?.(error);
        message.error("文件上传失败");
      });
  };

  // 删除文件时同步从 fileIdList 移除对应 fileKey
  const handleFileRemove: UploadProps["onRemove"] = (file) => {
    const fileKey = (file as any)?.response?.fileKey || (file as any)?.fileKey;
    if (fileKey) {
      fileIdList.value = fileIdList.value.filter((id) => id !== fileKey);
    }
    return true;
  };

  const createNewSession = () => {
    if (status.value === "pending" || status.value === "loading") {
      message.error("消息正在请求，您可以在请求完成后创建新的对话，也可以立即中止。..");
      return;
    }
    if (messages.value?.length) {
      abort();
      setTimeout(() => {
        curSession.value = buildUUID();
      }, 100);
    } else {
      message.error("现在这是一场新的对话。");
    }
  };

  const changeConversation = async (val: string) => {
    abort();
    setTimeout(() => {
      curSession.value = val;
    }, 100);
  };
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-ai-chat";
  .@{prefix-cls} {
    .copilot-chat {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-width: 0;
    }

    // 模式切换下拉框：彻底隐藏边线，避免与 Sender 输入框边框叠加
    .chat-mode-select:deep(.ant-select-selector) {
      border: none !important;
      box-shadow: none !important;
      padding-inline: 4px;
    }
    .chat-mode-select:deep(.ant-select-arrow) {
      inset-inline-end: 2px;
    }
  }
</style>
<style>
  /* 全局 keyframes：供内联 style 的 animation 引用（scoped 会给 keyframes 加哈希导致不匹配） */
  @keyframes chatLoadingStripe {
    0% {
      background-position: 0% bottom;
    }
    100% {
      background-position: -200% bottom;
    }
  }
</style>
