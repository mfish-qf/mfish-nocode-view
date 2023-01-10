<template>
  <CollapseContainer title="安全设置" :canExpan="false">
    <List>
      <template v-for="item in list" :key="item.key">
        <ListItem>
          <ListItemMeta>
            <template #title>
              {{ item.title }}
              <div class="extra" v-if="item.extra">
                {{ item.extra }}
              </div>
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
import { defineComponent } from "vue";
import { CollapseContainer } from "/@/components/general/Container/index";
import { ListItem } from "./setting.data";
import { useUserStore } from "/@/store/modules/User";

export default defineComponent({
  components: { CollapseContainer, List, ListItem: List.Item, ListItemMeta: List.Item.Meta },
  setup() {
    const userStore = useUserStore();
    const userInfo = userStore.getUserInfo;
    const phone = userInfo?.phone.replace(/(\d{3})\d*(\d{4})/,'$1****$2');
    const email = userInfo?.email.replace(/(\w)\w*(@\w+\.\w+)/,'$1***$2');
    const secureSettingList: ListItem[] = [
      {
        key: "1",
        title: "账户密码",
        description: "当前密码强度：强",
        extra: "修改"
      },
      {
        key: "2",
        title: "密保手机",
        description: "已绑定手机：" + phone,
        extra: "修改"
      },
      {
        key: "3",
        title: "密保问题",
        description: "未设置密保问题，密保问题可有效保护账户安全",
        extra: "修改"
      },
      {
        key: "4",
        title: "备用邮箱",
        description: "已绑定邮箱：" + email,
        extra: "修改"
      },
      {
        key: "5",
        title: "MFA 设备",
        description: "未绑定 MFA 设备，绑定后，可以进行二次确认",
        extra: "修改"
      }
    ];
    return {
      list: secureSettingList
    };
  }
});
</script>
<style lang="less" scoped>
.extra {
  float: right;
  margin-top: 10px;
  margin-right: 30px;
  font-weight: normal;
  color: #1890ff;
  cursor: pointer;
}
</style>
