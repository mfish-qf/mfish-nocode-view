<template>
  <div>
    <CollapseContainer title="租户信息" :can-expan="false">
      <AList>
        <template v-for="item in tenantList" :key="item.id">
          <AListItem>
            <AListItemMeta>
              <template #avatar>
                <Avatar :src="imageUrl(getLocalFileUrl(item.logo))" :size="60" class="!mx-auto !block" />
              </template>
              <template #title>
                <div style="display: flex">
                  <DictTag code="tenant_corp_type" :value="item.tenantType" />
                  <Tag v-if="item.master === 1" color="red">管理员</Tag>
                  <div style="font-weight: bold">{{ item.name }}</div>
                </div>
              </template>
              <template #description>
                <div>{{ item.trade }}</div>
                <a :href="item.domain" target="_blank">{{ item.domain }}</a>
              </template>
            </AListItemMeta>
            <template #actions>
              <AButton type="link" size="small" v-if="item.master === 1" @click="handleEdit(item)">
                <template #icon>
                  <Icon icon="ant-design:edit-outlined" />
                </template>
                编辑
              </AButton>
              <AButton type="link" size="small" v-else @click="handleQuery(item)">
                <template #icon>
                  <Icon icon="ant-design:info-circle-outlined" />
                </template>
                查看
              </AButton>
            </template>
          </AListItem>
        </template>
      </AList>
    </CollapseContainer>
    <SsoTenantModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { Avatar, List as AList, Button as AButton, Tag } from "ant-design-vue";
  import { onMounted, ref } from "vue";
  import { CollapseContainer } from "@mfish/core/src/components/Container";
  import { imageUrl } from "@mfish/core/src/utils/file/FileUtils";
  import { Icon } from "@mfish/core/src/components/Icon";
  import { TenantVo } from "@mfish/core/src/api/sys/model/SsoTenantModel";
  import SsoTenantModal from "@/views/sys/sso-tenant/SsoTenantModal.vue";
  import { useModal } from "@mfish/core/src/components/Modal";
  import { getUserTenants } from "@mfish/core/src/api/sys/User";
  import { getLocalFileUrl } from "@mfish/core/src/utils/file/FileUtils";
  import { DictTag } from "@mfish/core/src/components/DictTag";
  const AListItem = AList.Item;
  const AListItemMeta = AListItem.Meta;

  const [registerModal, { openModal }] = useModal();
  onMounted(() => {
    getTenant();
  });
  const tenantList = ref<TenantVo[]>([]);

  function getTenant() {
    getUserTenants().then((res) => {
      tenantList.value = res;
    });
  }

  function handleEdit(record: TenantVo) {
    openModal(true, {
      record,
      source: 1,
      isUpdate: true
    });
  }

  function handleQuery(record: TenantVo) {
    openModal(true, {
      record,
      isUpdate: true,
      source: 1,
      disabled: 1
    });
  }

  function handleSuccess() {
    getTenant();
  }
</script>
