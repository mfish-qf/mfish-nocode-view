<template>
  <ScrollContainer>
    <div ref="wrapperRef" class="account-setting">
      <Tabs tab-position="left" :tabBarStyle="tabBarStyle" :activeKey="tabType" @change="tabChange">
        <TabPane v-for="item in settingList" :key="item.key" :tab="item.name" class="base-title">
          <component :is="item.component" />
        </TabPane>
      </Tabs>
    </div>
  </ScrollContainer>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  import { Tabs } from "ant-design-vue";
  import { ScrollContainer } from "/@/components/general/Container";
  import { settingList } from "./setting.data";
  import BaseSetting from "./BaseSetting.vue";
  import SecureSetting from "./SecureSetting.vue";
  import TenantSetting from "./TenantSetting.vue";
  import TenantOrgSetting from "./TenantOrgSetting.vue";
  import TenantRoleSetting from "./TenantRoleSetting.vue";
  import TenantUserSetting from "./TenantUserSetting.vue";
  import { useRoute } from "vue-router";

  export default defineComponent({
    components: {
      ScrollContainer,
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
      onMounted(() => {
        const index = route.path.lastIndexOf("/");
        if (index) {
          const type = parseInt(route.path.substring(index + 1));
          if (!Number.isNaN(type)) {
            tabType.value = type;
          }
        }
      });
      function tabChange(e) {
        tabType.value = e;
      }
      return {
        settingList,
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
