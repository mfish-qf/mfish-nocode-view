<template>
  <div :class="prefixCls">
    <Popover title="" trigger="click" :overlay-class-name="`${prefixCls}__overlay`">
      <Badge :count="count" dot :number-style="numberStyle">
        <BellOutlined />
      </Badge>
      <template #content>
        <Tabs>
          <template v-for="item in listData" :key="item.key">
            <TabPane>
              <template #tab>
                {{ item.name }}
                <span v-if="item.list.length > 0">({{ item.list.length }})</span>
              </template>
              <!-- 绑定title-click事件的通知列表中标题是“可点击”的-->
              <NoticeList :list="item.list" v-if="item.key === '1'" @title-click="onNoticeClick" />
              <NoticeList :list="item.list" v-else />
            </TabPane>
          </template>
        </Tabs>
      </template>
    </Popover>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import { Badge, Popover, Tabs } from "ant-design-vue";
  import { BellOutlined } from "@ant-design/icons-vue";
  import { ListItem, tabListData } from "./Data";
  import NoticeList from "./NoticeList.vue";
  import { useDesign, useMessage } from "@mfish/core/hooks";

  export default defineComponent({
    components: { Popover, BellOutlined, Tabs, TabPane: Tabs.TabPane, Badge, NoticeList },
    setup() {
      const { prefixCls } = useDesign("header-notify");
      const { createMessage } = useMessage();
      const listData = ref(tabListData);

      const count = computed(() => {
        let count = 0;
        for (const tabListDatum of tabListData) {
          count += tabListDatum.list.length;
        }
        return count;
      });

      function onNoticeClick(record: ListItem) {
        createMessage.success(`你点击了通知，ID=${record.id}`);
        // 可以直接将其标记为已读（为标题添加删除线）,此处演示的代码会切换删除线状态
        record.titleDelete = !record.titleDelete;
      }

      return {
        prefixCls,
        listData,
        count,
        onNoticeClick,
        numberStyle: {}
      };
    }
  });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-header-notify";

  .@{prefix-cls} {
    &__overlay {
      max-width: 360px;
    }

    .ant-tabs-content {
      width: 300px;
    }

    .ant-badge {
      font-size: 18px;
      color: @header-color;

      .ant-badge-multiple-words {
        padding: 0 4px;
      }

      svg {
        width: 0.9em;
      }

      &:hover {
        svg {
          animation: bell-ring 1.2s both;
        }
      }
    }

    @keyframes bell-ring {
      0%,
      100% {
        transform-origin: top;
      }

      15% {
        transform: rotateZ(15deg);
      }

      30% {
        transform: rotateZ(-15deg);
      }

      45% {
        transform: rotateZ(10deg);
      }

      60% {
        transform: rotateZ(-10deg);
      }

      75% {
        transform: rotateZ(5deg);
      }

      90% {
        transform: rotateZ(-5deg);
      }
    }
  }
</style>
