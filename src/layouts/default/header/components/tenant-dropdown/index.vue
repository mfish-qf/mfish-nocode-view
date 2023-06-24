<template>
  <Dropdown v-if="getTenant.name" placement="bottomLeft" :overlayClassName="`${prefixCls}-dropdown-overlay`">
    <span :class="[prefixCls, `${prefixCls}--${theme}`]" class="flex">
      <img :class="`${prefixCls}__header`" :src="getTenant.headImgUrl" :alt="getTenant.name" />
      <span :class="`${prefixCls}__info hidden md:block`">
        <span :class="`${prefixCls}__name`" class="truncate">
          <div style="font-weight: bold">租户：</div>
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
  import { computed, onMounted, ref } from "vue";
  import { useUserStore } from "/@/store/modules/User";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import { propTypes } from "/@/utils/PropTypes";
  import { createAsyncComponent } from "/@/utils/factory/CreateAsyncComponent";
  import { imageUrl } from "/@/utils/FileUtils";
  import { TenantVo } from "/@/api/sys/model/SsoTenantModel";
  import { changeSsoTenant } from "/@/api/sys/SsoTenant";
  import { router } from "/@/router";

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
      const getTenant = computed((): { name?: string; headImgUrl?: string; id?: string } => {
        const tenant: TenantVo = tenants.value?.find((tenant) => tenant.id == userStore.getTenantId) as TenantVo;
        return tenant
          ? {
              name: tenant.name,
              headImgUrl: tenant.logo ? imageUrl("/storage/file/" + tenant.logo) : "",
              id: tenant.id
            }
          : {};
      });
      onMounted(() => {
        tenants.value = userStore.getUserInfo?.tenants ? userStore.getUserInfo.tenants : [];
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
        tenants
      };
    }
  };
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-header-tenant-dropdown";

  .@{prefix-cls} {
    height: @header-height;
    padding: 0 0 0 10px;
    padding-right: 10px;
    overflow: hidden;
    font-size: 12px;
    cursor: pointer;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }

    &__header {
      border-radius: 50%;
    }

    &__name {
      display: flex;
      font-size: 14px;
    }

    &--dark {
      &:hover {
        background-color: @header-dark-bg-hover-color;
      }
    }

    &--light {
      &:hover {
        background-color: @header-light-bg-hover-color;
      }

      .@{prefix-cls}__name {
        color: @text-color-base;
      }

      .@{prefix-cls}__desc {
        color: @header-light-desc-color;
      }
    }

    &-dropdown-overlay {
      .ant-dropdown-menu-item {
        min-width: 160px;
      }
    }
  }
</style>
