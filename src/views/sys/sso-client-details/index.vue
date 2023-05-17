<!--
 @description: 客户端信息
 @author: mfish
 @date: 2023-05-12
 @version: V1.0.0
-->
<template>
  <div :class="prefixCls">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:ssoClientDetails:insert')">新增
        </a-button>
        <a-button type="error" @click="handleExport" v-if="hasPermission('sys:ssoClientDetails:export')">导出</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:ssoClientDetails:update',
                tooltip: '修改',
              },
              {
                icon: 'ant-design:reload-outlined',
                popConfirm: {
                  title: '是否确认重置',
                  placement: 'left',
                  confirm: handleReset.bind(null, record),
                },
                auth: 'sys:ssoClientDetails:update',
                tooltip: '重置密钥',
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                auth: 'sys:ssoClientDetails:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
        <template v-else-if="column.key === 'clientSecret'">
          <div class="secret">
            <TableAction v-if="record.clientSecret.startsWith('**********')"
                         :actions="[
              {
                icon: 'ant-design:eye-outlined',
                onClick: showSecret.bind(null, record),
                auth: 'sys:ssoClientDetails:query',
                tooltip: '显示密钥',
              }]" />
            <div>{{ record.clientSecret }}</div>
          </div>
        </template>
      </template>
    </BasicTable>
    <SsoClientDetailsModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
import {
  deleteSsoClientDetails,
  exportSsoClientDetails, getSecret,
  getSsoClientDetailsList,
  resetSecret
} from "/@/api/sys/SsoClientDetails";
import { useModal } from "/@/components/general/Modal";
import SsoClientDetailsModal from "./SsoClientDetailsModal.vue";
import { columns, searchFormSchema } from "./ssoClientDetails.data";
import { usePermission } from "/@/hooks/web/UsePermission";
import { ReqSsoClientDetails, SsoClientDetails } from "/@/api/sys/model/SsoClientDetailsModel";
import { getDictItems } from "/@/api/sys/DictItem";
import Icon from "/@/components/general/Icon/src/Icon.vue";
import { useDesign } from "/@/hooks/web/UseDesign";

export default {
  name: "SsoClientDetailsManagement",
  components: { Icon, BasicTable, SsoClientDetailsModal, TableAction },
  setup() {
    const { hasPermission } = usePermission();
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload, getForm }] = useTable({
      title: "客户端信息列表",
      api: getSsoClientDetailsList,
      columns,
      formConfig: {
        name: "search_form_item",
        labelWidth: 100,
        schemas: searchFormSchema,
        autoSubmitOnEnter: true
      },
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      showIndexColumn: false,
      actionColumn: {
        width: 120,
        title: "操作",
        dataIndex: "action"
      }
    });
    const grantTypes = ref<string[]>([]);
    const { prefixCls } = useDesign("client-details");

    function showSecret(ssoClientDetails: SsoClientDetails) {
      getSecret(ssoClientDetails.id).then((res) => {
        ssoClientDetails.clientSecret = res;
      });
    }

    /**
     * 新建
     */
    function handleCreate() {
      openModal(true, {
        record: { grantTypeGroup: grantTypes },
        isUpdate: false
      });
    }

    onMounted(() => {
      getDictItems("sso_grant_type").then((res) => {
        if (res && res.length > 0) {
          res.forEach((item) => {
            grantTypes.value.push(item.dictValue);
          });
        }
      });
    });

    /**
     *  导出
     */
    function handleExport() {
      exportSsoClientDetails(getForm().getFieldsValue() as ReqSsoClientDetails);
    }

    /**
     * 修改
     * @param
     */
    function handleEdit(ssoClientDetails: SsoClientDetails) {
      if (ssoClientDetails.grantTypes) {
        ssoClientDetails.grantTypeGroup = ssoClientDetails.grantTypes.split(",");
      }
      openModal(true, {
        record: ssoClientDetails,
        isUpdate: true
      });
    }

    function handleReset(ssoClientDetails: SsoClientDetails) {
      resetSecret(ssoClientDetails.id).then(res => {
        ssoClientDetails.clientSecret = res;
      });
    }

    /**
     * 删除
     * @param
     */
    function handleDelete(ssoClientDetails: SsoClientDetails) {
      deleteSsoClientDetails(ssoClientDetails.id).then(() => {
        handleSuccess();
      });
    }

    /**
     * 处理完成
     */
    function handleSuccess() {
      reload();
    }

    return {
      registerTable,
      registerModal,
      handleCreate,
      handleEdit,
      handleReset,
      handleDelete,
      handleExport,
      handleSuccess,
      hasPermission,
      prefixCls,
      showSecret
    };
  }
};
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-client-details';
.@{prefix-cls} {
  .secret {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>
