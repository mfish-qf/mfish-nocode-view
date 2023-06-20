<template>
  <div>
    <CollapseContainer title="租户信息" :canExpan="false">
      <List>
        <template v-for="item in tenantList" :key="item.id">
          <ListItem>
            <ListItemMeta>
              <template #avatar>
                <Avatar :src="imageUrl('/storage/file/' + item.logo)" :size="60" class="!mx-auto !block" />
              </template>
              <template #title>
                <div style="display: flex">
                  <Tag
                    v-for="type in tenantType"
                    :key="item.id + type.dictValue"
                    v-show="item.tenantType === type.dictValue"
                    :color="type.color"
                  >
                    {{ type.dictLabel }}
                  </Tag>
                  <Tag v-if="item.master === 1" color="red">管理员</Tag>
                  <div style="font-weight: bold">{{ item.name }}</div>
                </div>
              </template>
              <template #description>
                <div>{{ item.trade }}</div>
                <a :href="item.domain" target="_blank">{{ item.domain }}</a>
              </template>
            </ListItemMeta>
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
          </ListItem>
        </template>
      </List>
    </CollapseContainer>
    <SsoTenantModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { Avatar, List, Button as AButton, Tag } from "ant-design-vue";
  import { defineComponent, onMounted, ref } from "vue";
  import { CollapseContainer } from "/@/components/general/Container";
  import { getUserTenantList } from "/@/api/sys/SsoTenant";
  import { imageUrl } from "/@/utils/FileUtils";
  import { Icon } from "/@/components/general/Icon";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  import { getDictItems } from "/@/api/sys/DictItem";
  import { TenantVo } from "/@/api/sys/model/SsoTenantModel";
  import SsoTenantModal from "/@/views/sys/sso-tenant/SsoTenantModal.vue";
  import { useModal } from "/@/components/general/Modal";

  export default defineComponent({
    components: {
      SsoTenantModal,
      Tag,
      Icon,
      AButton,
      Avatar,
      CollapseContainer,
      List,
      ListItem: List.Item,
      ListItemMeta: List.Item.Meta
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      onMounted(() => {
        getTenant();
        getTenantType();
      });
      const tenantList = ref<TenantVo[]>([]);
      const tenantType = ref<DictItem[]>([]);

      function getTenantType() {
        getDictItems("tenant_corp_type").then((res) => {
          tenantType.value = res;
        });
      }

      function getTenant() {
        getUserTenantList().then((res) => {
          tenantList.value = res;
        });
      }

      function handleEdit(record: TenantVo) {
        openModal(true, {
          record: record,
          source: 1,
          isUpdate: true
        });
      }

      function handleQuery(record: TenantVo) {
        openModal(true, {
          record: record,
          isUpdate: true,
          source: 1,
          disabled: 1
        });
      }

      function handleSuccess() {
        getTenant();
      }

      return {
        tenantList,
        tenantType,
        handleEdit,
        handleQuery,
        registerModal,
        openModal,
        handleSuccess
      };
    },
    methods: { imageUrl }
  });
</script>
