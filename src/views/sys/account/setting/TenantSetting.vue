<template>
  <CollapseContainer title="租户信息" :canExpan="false">
    <List :grid="{ gutter: 16, column: 4 }">
      <template v-for="item in list" :key="item.key">
        <ListItem>
          <ListItemMeta>
            <template #avatar>
              <Icon v-if="item.avatar" class="avatar" :icon="item.avatar" :color="item.color" />
            </template>
            <template #title>
              {{ item.title }}
              <a-button type="link" size="small" v-if="item.extra" class="extra">
                {{ item.extra }}
              </a-button>
            </template>
            <template #description>
              <div>{{ item.description }}</div>
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </CollapseContainer>
</template>
<script lang="ts">
  import { List } from "ant-design-vue";
  import { defineComponent, onMounted, ref } from "vue";
  import { CollapseContainer } from "/@/components/general/Container";
  import { Icon } from "/@/components/general/Icon/index";

  import { ListItem } from "./setting.data";

  export default defineComponent({
    components: {
      CollapseContainer,
      List,
      ListItem: List.Item,
      ListItemMeta: List.Item.Meta,
      Icon
    },
    setup() {
      onMounted(() => {
        getTenant();
      });
      const tenantList = ref([]);
      function getTenant() {}
      // 账号绑定 list
      const accountBindList: ListItem[] = [
        {
          key: "1",
          title: "绑定淘宝",
          description: "当前未绑定淘宝账号",
          extra: "绑定",
          avatar: "ri:taobao-fill",
          color: "#ff4000"
        },
        {
          key: "2",
          title: "绑定支付宝",
          description: "当前未绑定支付宝账号",
          extra: "绑定",
          avatar: "fa-brands:alipay",
          color: "#2eabff"
        },
        {
          key: "3",
          title: "绑定钉钉",
          description: "当前未绑定钉钉账号",
          extra: "绑定",
          avatar: "ri:dingding-fill",
          color: "#2eabff"
        }
      ];
      return {
        list: accountBindList
      };
    }
  });
</script>
<style lang="less" scoped>
  .avatar {
    font-size: 40px !important;
  }

  .extra {
    float: right;
    margin-top: 10px;
    margin-right: 30px;
    cursor: pointer;
  }
</style>
