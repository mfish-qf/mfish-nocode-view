<template>
  <Dropdown v-if="getTenant.id" placement="bottomLeft" :overlay-class-name="`${prefixCls}-dropdown-overlay`">
    <span :class="[prefixCls, `${prefixCls}--${theme}`]" class="flex">
      <img :class="`${prefixCls}__header`" :src="tenantImg" :alt="getTenant.name" />
      <span :class="`${prefixCls}__info hidden md:block`">
        <span :class="`${prefixCls}__name`" class="truncate">
          <span style="font-weight: bold">租户：</span>
          {{ getTenant.name }}
        </span>
      </span>
    </span>
    <template #overlay>
      <AMenu @click="handleMenuClick">
        <MenuItem
          v-for="item in tenants"
          :key="item.id"
          :text="item.name"
          :icon="item.id === getTenant.id ? 'ant-design:check-outlined' : 'ion:business'"
        />
      </AMenu>
    </template>
  </Dropdown>
</template>
<script lang="ts">
  import { Dropdown, Menu as AMenu } from "ant-design-vue";
  import type { MenuInfo } from "ant-design-vue/lib/menu/src/interface";
  import { onBeforeMount, reactive, ref, toRaw } from "vue";
  import { useUserStore } from "@mfish/stores/modules";
  import { useDesign } from "@mfish/core/hooks";
  import { propTypes } from "@mfish/core/utils/PropTypes";
  import { createAsyncComponent } from "@mfish/core/utils/factory/CreateAsyncComponent";
  import { setHeaderImg } from "@mfish/core/utils/file/FileUtils";
  import { changeSsoTenant, TenantVo } from "@mfish/core/api";
  import { router } from "@mfish/core/router";
  import { sleep } from "@mfish/core/utils/Utils";

  export default {
    name: "TenantDropdown",
    components: {
      Dropdown,
      AMenu,
      MenuItem: createAsyncComponent(() => import("../user-dropdown/DropMenuItem.vue"))
    },
    props: {
      theme: propTypes.oneOf(["dark", "light"])
    },
    setup() {
      const { prefixCls } = useDesign("header-tenant-dropdown");
      const userStore = useUserStore();
      const tenants = ref<TenantVo[]>([]);
      const getTenant = reactive<{ name?: string; id?: string }>({
        name: "",
        id: ""
      });
      const tenantImg = ref("");
      onBeforeMount(async () => {
        let userInfo = toRaw(userStore.getUserInfo);
        while (!userInfo) {
          userInfo = toRaw(userStore.getUserInfo);
          await sleep(500);
        }
        tenants.value = userInfo.tenants;
        const tenant: TenantVo = tenants.value?.find((tenant) => tenant.id === userStore.getTenantId) as TenantVo;
        if (tenant) {
          getTenant.id = tenant.id;
          getTenant.name = tenant.name;
          setHeaderImg(tenant.logo, tenantImg);
        }
      });

      function handleMenuClick(e: MenuInfo) {
        const tenantId = e.key as string;
        if (tenantId === userStore.getTenantId) {
          return;
        }
        changeSsoTenant(tenantId).then((res) => {
          userStore.setTenantId(res);
          router.go(0);
        });
      }

      return {
        prefixCls,
        getTenant,
        handleMenuClick,
        tenants,
        tenantImg
      };
    }
  };
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-header-tenant-dropdown";
  @import "../dropdown.less";
</style>
