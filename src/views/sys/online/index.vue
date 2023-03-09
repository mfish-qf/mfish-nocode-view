<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ion:power-outline',
                popConfirm: {
                  title: '是否确认退出',
                  placement: 'left',
                  confirm: handleLogout.bind(null, record),
                },
                auth: 'sys:online:revoke',
                tooltip: '强制退出'
              }
            ]"
          />
        </template>
        <template v-if="column.key === 'loginMode'">
          <Tag v-for="item in reqLoginMode" v-show="record.loginMode === item.dictValue" :color="item.color">
            {{ item.dictLabel }}
          </Tag>
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { Tag } from "ant-design-vue";
import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
import { columns } from "./online.data";
import { usePermission } from "/@/hooks/web/UsePermission";
import { getOnlineList, logoutUser } from "/@/api/sys/User";
import { DictItem } from "/@/api/sys/model/DictItemModel";
import { getDictItems } from "/@/api/sys/DictItem";
import { OnlineUser } from "/@/api/sys/model/UserModel";

export default {
  name: "OnlineManagement",
  components: { BasicTable, TableAction, Tag },
  setup() {
    const { hasPermission } = usePermission();
    const [registerTable, { reload }] = useTable({
      api: getOnlineList,
      columns,
      useSearchForm: false,
      showTableSetting: true,
      bordered: true,
      showIndexColumn: false,
      actionColumn: {
        width: 60,
        title: "操作",
        dataIndex: "action",
        fixed: undefined
      }
    });
    let reqLoginMode = ref<DictItem[]>([]);

    onMounted(() => {
      getLoginMode();
    });

    function getLoginMode() {
      getDictItems("sys_login_mode").then((res) => {
        reqLoginMode.value = res;
      });
    }

    function handleLogout(record: OnlineUser) {
      logoutUser(record.token).then(() => {
        reload();
      });
    }

    return {
      handleLogout,
      registerTable,
      hasPermission,
      reqLoginMode
    };
  }
};
</script>
