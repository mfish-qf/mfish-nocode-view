<template>
  <div :class="prefixCls">
    <div :class="`${prefixCls}-panel`">
      <ScrollContainer ref="scrollRef">
        <template v-for="(item, index) in chats">
          <div :key="`${index}1`" :class="`${prefixCls}-wrapper`" v-if="item.user === '摸鱼机器人'">
            <img class="chat-img" src="/resource/img/logo.png" alt="chat-img" />
            <div
              class="chat-text"
              v-if="item.chat !== undefined && true && item.chat !== ''"
              @mouseenter="item.enter = true"
              @mouseleave="item.enter = false"
            >
              <div v-html="item.chat"> </div>
              <Icon
                v-if="item.enter"
                title="复制"
                class="chat-copy right"
                icon="ant-design:copy-filled"
                :color="copied ? 'success' : ''"
                @click="copyData(item.chat)"
              />
            </div>
          </div>
          <div v-else :key="`${index}2`" :class="`${prefixCls}-wrapper`" class="right">
            <div class="chat-text right" @mouseenter="item.enter = true" @mouseleave="item.enter = false">
              <div v-html="item.chat"></div>
              <Icon
                v-if="item.enter"
                title="复制"
                class="chat-copy left"
                icon="ant-design:copy-filled"
                :color="copied ? 'success' : ''"
                @click="copyData(item.chat)"
              />
            </div>
            <SvgIcon name="dynamic-avatar-4" size="32" />
          </div>
        </template>
      </ScrollContainer>
    </div>
    <div>
      <ATag :class="`${prefixCls}-tag`" :bordered="false" color="gold" @click="onSend('介绍下自己')"> 自我介绍 </ATag>
      <ATag :class="`${prefixCls}-tag`" :bordered="false" color="lime" @click="onSend('我有哪些权限')"> 我的权限 </ATag>
      <ATag
        :class="`${prefixCls}-tag`"
        :bordered="false"
        color="processing"
        @click="onSend('请帮我查询字典名称为“用户性别”的字典编码')"
      >
        查询字典编码
      </ATag>
      <ATag
        :class="`${prefixCls}-tag`"
        :bordered="false"
        color="magenta"
        @click="onSend('请帮我查询下字典编码为“sys_user_sex”的字典项')"
      >
        查询字典项
      </ATag>
    </div>
    <div :class="`${prefixCls}-input`">
      <InputSearch v-model:value="msg" placeholder="请输入信息" enter-button="发送" size="large" @search="onSend" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, unref } from "vue";
  import { Icon, SvgIcon } from "@mfish/core/components/Icon";
  import { ScrollActionType, ScrollContainer } from "@mfish/core/components/Container";
  import { InputSearch, Tag as ATag } from "ant-design-vue";
  import { ChatsModel } from "@/api/demo/model/QuestionModel";
  import { buildUUID } from "@mfish/core/utils/Uuid";
  import { useDesign } from "@mfish/core/hooks";
  import { Nullable } from "@mfish/types";
  import { getToken } from "@mfish/core/utils/auth";
  import { getAiRouter } from "@/api/ai/AiRouter";
  import { useClipboard } from "@vueuse/core";

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
  const { copy, copied } = useClipboard({ legacy: true });
  const onSend = async (value: string) => {
    if (!value) return;

    chats.value.push({ id: "user", user: "user", chat: value });
    const id = buildUUID();
    chats.value.push({ id, user: botName, chat: "" });
    msg.value = "";
    scrollBottom();
    // 关闭之前的 SSE
    if (eventSource) {
      eventSource.close();
    }
    let aiRouter = await getAiRouter(value);
    if (!aiRouter) {
      aiRouter = { path: "/sys/ai/chat" };
    }
    // 建立新 SSE 连接，并把 prompt 传给后端
    eventSource = new EventSource(
      `/api${aiRouter?.path}?access_token=${getToken()}&id=${id}&prompt=${encodeURIComponent(value)}`
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
  function copyData(data: string) {
    copy(data);
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-ai-chat";
  [data-theme="dark"] {
    .@{prefix-cls} {
      color: @white;
      &-wrapper {
        .chat-text {
          background-color: #313136;
          box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.1);
        }

        .chat-text.right {
          background-color: #112c03;
        }
      }

      &-panel {
        box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.1);
      }
    }
  }

  .@{prefix-cls} {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 6px;
    color: @black;
    &-panel {
      flex: 1;
      border-radius: 8px;
      overflow-y: auto;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.05);
    }

    &-tag {
      margin: 10px 4px;
      transition: all 0.2s;
      &:hover {
        cursor: pointer;
        transform: scale(1.05);
      }
    }

    &-wrapper {
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
        position: relative;
        border-radius: 6px;
        font-size: 16px;
        padding: 8px;
        margin: 0 12px 0 12px;
        background-color: #fafafa;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.05);
        .chat-copy {
          position: absolute;
          bottom: 6px;
          cursor: pointer;
          color: @main-color;
          transition: scale 0.2s ease-in-out;
          &:hover {
            scale: 1.1;
          }
          &.left {
            left: 6px;
          }
          &.right {
            right: 6px;
          }
        }
      }

      .chat-text.right {
        background-color: #94ea69;
      }

      &.right {
        display: flex;
        justify-content: right;
      }
    }
  }
</style>
