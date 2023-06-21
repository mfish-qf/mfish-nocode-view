<template>
  <ScrollContainer>
    <div ref="wrapperRef" class="account-setting">
      <Tabs tab-position="left" :tabBarStyle="tabBarStyle">
        <template v-for="item in settingList" :key="item.key">
          <TabPane :tab="item.name" class="base-title">
            <component :is="item.component" :source="1" />
          </TabPane>
        </template>
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

  export default defineComponent({
    components: {
      ScrollContainer,
      Tabs,
      TabPane: Tabs.TabPane,
      BaseSetting,
      SecureSetting,
      TenantSetting,
      TenantOrgSetting,
      TenantRoleSetting
    },
    setup() {
      const tenantId = ref("");
      onMounted(() => {
        tenantId.value = "57e357ca632f8654c8745dc00092bf79";
      });
      return {
        settingList,
        tabBarStyle: {
          width: "110px",
          height: "calc(100vh - 122px)"
        },
        tenantId
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
