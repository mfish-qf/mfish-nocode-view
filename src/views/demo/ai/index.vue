<template>
  <div>
    <div :class="`${prefixCls}-panel`">
      <ScrollContainer ref="scrollRef">
        <template v-for="(item, index) in chats">
          <div :key="`${index}1`" :class="`${prefixCls}-wrapper`" v-if="item.user === '摸鱼机器人'">
            <img class="chat-img" src="/resource/img/logo.png" alt="chat-img" />
            <div class="chat-text" v-if="item.chat !== undefined && true && item.chat !== ''" v-html="item.chat"></div>
          </div>
          <div v-else :key="`${index}2`" :class="`${prefixCls}-wrapper`" class="right">
            <div class="chat-text right">{{ item.chat }}</div>
            <SvgIcon name="dynamic-avatar-1" size="32" />
          </div>
        </template>
      </ScrollContainer>
    </div>
    <div style="margin: 15px">
      <InputSearch v-model:value="msg" placeholder="请输入信息" enter-button="发送" size="large" @search="onSend" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, unref } from "vue";
  import { SvgIcon } from "@mfish/core/components/Icon";
  import { ScrollActionType, ScrollContainer } from "@mfish/core/components/Container";
  import { InputSearch } from "ant-design-vue";
  import { ChatsModel } from "@/api/demo/model/QuestionModel";
  import { buildUUID } from "@mfish/core/utils/Uuid";
  import { useDesign } from "@mfish/core/hooks";
  import { Nullable } from "@mfish/types";
  import { getToken } from "@mfish/core/utils/auth";

  defineOptions({ name: "ChartGpt" });
  const scrollRef = ref<Nullable<ScrollActionType>>(null);
  const { prefixCls } = useDesign("ai-chat");
  const getScroll = () => {
    const scroll = unref(scrollRef);
    if (!scroll) {
      throw new Error("scroll is Null");
    }
    return scroll;
  };
  const botName = "摸鱼机器人";
  const msg = ref<string>("");
  const chats = ref<ChatsModel[]>([]);
  let eventSource: EventSource;
  const onSend = (value: string) => {
    chats.value.push({ id: "user", user: "user", chat: value });
    const id = buildUUID();
    chats.value.push({ id, user: botName, chat: "" });
    msg.value = "";
    scrollBottom();
    // 关闭之前的 SSE
    if (eventSource) {
      eventSource.close();
    }

    // 建立新 SSE 连接，并把 prompt 传给后端
    eventSource = new EventSource(
      `/api/ai/openai/chat/stream?access_token=${getToken()}&id=${id}&prompt=${encodeURIComponent(value)}`
    );

    eventSource.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      for (let i = chats.value.length - 1; i >= 0; i--) {
        if (chats.value[i].id === data.id) {
          chats.value[i].chat += data.content;
          scrollBottom();
          break;
        }
      }
    });

    eventSource.addEventListener("error", () => {
      eventSource.close();
    });
  };
  onMounted(() => {
    chats.value.push({
      id: "1",
      user: botName,
      chat:
        "您好，我是摸鱼机器人！\n要是喜欢我，给我的开源项目点个star吧！\n" +
        "<a href='https://github.com/mfish-qf/mfish-nocode' target='_blank'>GitHub地址</a>\n" +
        "<a href='https://gitee.com/qiufeng9862/mfish-nocode' target='_blank'>Gitee地址</a>"
    });
    scrollBottom();
  });

  function scrollBottom() {
    getScroll().scrollBottom();
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-ai-chat";
  [data-theme="dark"] {
    .@{prefix-cls}-wrapper {
      .chat-text {
        background-color: #313136;
      }

      .chat-text.right {
        background-color: #112c03;
      }
    }

    .@{prefix-cls}-panel {
      box-shadow: 0 0 15px 8px rgba(255, 255, 255, 0.1);
    }
  }

  .@{prefix-cls}-panel {
    border-radius: 8px;
    overflow-y: auto;
    height: calc(100vh - 200px);
    margin: 15px;
    box-shadow: 0 0 15px 8px rgba(0, 0, 0, 0.05);
  }

  .@{prefix-cls}-wrapper {
    display: flex;
    margin: 10px;
    align-items: stretch;
    white-space: pre-line;

    .chat-img {
      margin: 10px;
      width: 32px;
      height: 32px;
    }

    .chat-text {
      border-radius: 4px;
      font-size: 16px;
      padding: 8px;
      margin: 0 12px 0 12px;
      background-color: #fafafa;
    }

    .chat-text.right {
      background-color: #94ea69;
    }

    &.right {
      display: flex;
      justify-content: right;
    }
  }
</style>
