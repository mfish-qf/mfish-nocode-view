<template>
  <div ref="wrapperRef" class="account-setting">
    <Tabs tab-position="left" :tabBarStyle="tabBarStyle" :activeKey="tabType" @change="tabChange">
      <TabPane v-for="item in settingList" :key="item.key" :tab="item.name" class="base-title">
        <component :is="item.component" />
      </TabPane>
    </Tabs>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  import { Tabs } from "ant-design-vue";
  import { settingList } from "./setting.data";
  import BaseSetting from "./BaseSetting.vue";
  import SecureSetting from "./SecureSetting.vue";
  import TenantSetting from "./TenantSetting.vue";
  import TenantOrgSetting from "./TenantOrgSetting.vue";
  import TenantRoleSetting from "./TenantRoleSetting.vue";
  import TenantUserSetting from "./TenantUserSetting.vue";
  import { useRoute } from "vue-router";
  import { usePermission } from "/@/hooks/web/UsePermission";

  export default defineComponent({
    components: {
      Tabs,
      TabPane: Tabs.TabPane,
      BaseSetting,
      SecureSetting,
      TenantSetting,
      TenantOrgSetting,
      TenantRoleSetting,
      TenantUserSetting
    },
    setup() {
      const route = useRoute();
      const tabType = ref(1);
      const { isSuperTenant, isSuperAdmin } = usePermission();
      const setting = ref<{ key: number; name: string; component: string }[]>([]);

      onMounted(() => {
        const index = route.path.lastIndexOf("/");
        if (index) {
          const type = parseInt(route.path.substring(index + 1));
          if (!Number.isNaN(type)) {
            tabType.value = type;
          }
        }
        //如果是系统默认租户，但不是管理员，不显示租户配置信息
        if (isSuperTenant() && !isSuperAdmin()) {
          setting.value = settingList.filter((set) => set.key === 1 || set.key === 2);
        } else {
          setting.value = settingList;
        }
      });
      function tabChange(e) {
        tabType.value = e;
      }

      return {
        settingList: setting,
        tabBarStyle: {
          width: "110px",
          height: "calc(100vh - 122px)"
        },
        tabType,
        tabChange
      };
    }
  });
</script>
<style lang="less" scoped>
  .account-setting {
    margin: 12px;
    background-color: @component-background;

    .base-title {
      padding: 0 16px 0 16px !important;
    }

    .ant-tabs-tab-active {
      background-color: @item-active-bg;
    }
  }
</style>
