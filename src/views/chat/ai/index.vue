<template>
  <div>
    <div :class="`${prefixCls}-panel`">
      <ScrollContainer ref="scrollRef">
        <template v-for="(item,index) in chats" :key="index">
          <div :class="`${prefixCls}-wrapper`" v-if="item.user === 'chatGpt'">
            <img class="chat-img" src="/resource/img/logo.png">
            <div class="chat-text" v-if="item.chat !== undefined && item.chat !==null&&item.chat!==''" v-html="item.chat"></div>
          </div>
          <div v-else :class="`${prefixCls}-wrapper`" class="right">
            <div class="chat-text right">{{ item.chat }}</div>
            <SvgIcon name="dynamic-avatar-1" size="32" />
          </div>
        </template>
      </ScrollContainer>
    </div>
    <div style="margin: 15px">
      <InputSearch
        v-model:value="msg"
        placeholder="请输入信息"
        enter-button="发送"
        size="large"
        @search="onSend"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, unref, onMounted } from "vue";
import { SvgIcon } from "/@/components/general/Icon/index";
import { ScrollActionType, ScrollContainer } from "/@/components/general/Container/index";
import { InputSearch } from "ant-design-vue";
import { answer } from "/@/api/chat/chat";
import { ChatsModel } from "/@/api/chat/model/QuestionModel";
import { buildUUID } from "/@/utils/Uuid";
import { useDesign } from "/@/hooks/web/UseDesign";

export default {
  name: "chartGpt",
  components: { SvgIcon, ScrollContainer, InputSearch },
  setup() {
    const scrollRef = ref<Nullable<ScrollActionType>>(null);
    const { prefixCls } = useDesign("ai-chat");
    const getScroll = () => {
      const scroll = unref(scrollRef);
      if (!scroll) {
        throw new Error("scroll is Null");
      }
      return scroll;
    };
    const botName = "chatGpt";
    const msg = ref<string>("");
    let chats = ref<ChatsModel[]>([]);
    const QUERYING = "查询中...";
    const onSend = (value: string) => {
      chats.value.push({ id: "user", user: "user", chat: value });
      const id = buildUUID();
      chats.value.push({ id: id, user: botName, chat: QUERYING });
      msg.value = "";
      scrollBottom();
      answer({ data: value, id: id }).then((res) => {
        const result = JSON.parse(res.result);
        let question = "我现在忙不过来，请慢点提问！";
        if (result.choices !== undefined && result.choices !== null && result.choices.length > 0) {
          question = result?.choices[0]?.text ?? "";
        }
        for (let i = chats.value.length - 1; i >= 0; i--) {
          if (chats.value[i].id === res.id) {
            chats.value[i].chat = question;
            break;
          }
        }
        scrollBottom();
      });
    };
    onMounted(() => {
      chats.value.push({
        id: "1",
        user: botName,
        chat: "您好，我是摸鱼机器人！\n要是喜欢我，给我的开源项目点个star吧！\n" +
          "<a href='https://github.com/mfish-qf/mfish-nocode' target='_blank'>GitHub地址</a>\n" +
          "<a href='https://gitee.com/qiufeng9862/mfish-nocode' target='_blank'>Gitee地址</a>"
      });
      scrollBottom();
    });

    function scrollBottom() {
      getScroll().scrollBottom();
    }

    return {
      prefixCls,
      chats,
      msg,
      scrollRef,
      onSend
    };
  }
};
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-ai-chat';
[data-theme='dark'] {
  .@{prefix-cls}-wrapper {
    .chat-text {
      background-color: #313136;
    }

    .chat-text.right {
      background-color: #112c03;
    }
  }
  .@{prefix-cls}-panel {
    box-shadow: 0 0 15px 2px #2b2d34;
  }
}

.@{prefix-cls}-panel {
  overflow-y: auto;
  height: calc(100vh - 200px);
  margin: 15px;
  box-shadow: 0 0 15px 2px #c9d7f8;
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