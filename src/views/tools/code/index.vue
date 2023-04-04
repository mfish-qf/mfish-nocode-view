<!--
 @description:代码生成
 @author: mfish
 @date: 2023/3/31 20:17
-->
<template>
  <PageWrapper contentFullHeight fixedHeight contentClass="flex">
    <DBTree ref="dbTree" class="m-4" :showIcon="true" @select="changeSelect" @search="changeSearch" />
    <ScrollContainer class="m-4">
      <a-row v-if="curNode?.dbName">
        <a-col :xs="{span:24}" :md="{span:8}" :lg="{span:5}" v-for="(item,index) in getTableList" :key="index" :class="`${prefixCls}-card`">
          <div :class="`${prefixCls}-card-item`" @click="">
            <Icon class="icon img" icon="ant-design:table-outlined" :color="color" />
            <div :class="`${prefixCls}-card-item-info`">
              <Tooltip :title="item.tableName">
                {{ item.tableName }}
              </Tooltip>
              <Tooltip :title="item.tableComment">
                {{ item.tableComment }}
              </Tooltip>
            </div>
          </div>
        </a-col>
      </a-row>
      <TableDetail v-else :cur-node="curNode"></TableDetail>
    </ScrollContainer>
  </PageWrapper>
</template>

<script lang="ts">
import { ref, unref, onBeforeMount, computed, toRaw } from "vue";
import { PageWrapper } from "/@/components/general/Page";
import { ScrollContainer } from "/@/components/general/Container";
import DBTree from "./DBTree.vue";
import { Icon } from "/@/components/general/Icon/index";
import { Tooltip, Row, Col } from "ant-design-vue";
import { TableInfo } from "/@/api/sys/model/DbConnectModel";
import { useDesign } from "/@/hooks/web/UseDesign";
import { useAppStore } from "/@/store/modules/App";
import TableDetail from "/@/views/tools/code/TableDetail.vue";

export default {
  name: "codeBuild",
  components: {
    TableDetail,
    DBTree, PageWrapper, Icon, ScrollContainer, Tooltip, [Row.name]: Row,
    [Col.name]: Col
  },
  setup() {
    let tableList = ref<TableInfo[]>([]);
    const dbTree = ref();
    const { prefixCls } = useDesign("code-build");
    const appStore = useAppStore();
    const color = computed(() => appStore.getProjectConfig.themeColor);
    const startSearch = ref(false);
    const searchTable = ref<TableInfo[]>([]);
    const curNode = ref({});

    async function changeSelect(record) {
      curNode.value = toRaw(record);
      //如果是数据库节点，构建下面表信息
      if (record.dbName) {
        if (record.children) {
          tableList.value = record.children;
          return;
        }
        dbTree.value.buildTableTree(record.id).then((res) => {
            tableList.value = res;
          }
        );
        return;
      }

    }

    function changeSearch(search, value) {
      if (!search) {
        startSearch.value = false;
        return;
      }
      startSearch.value = true;
      let tables: TableInfo[] = [];
      toRaw(value).forEach((item) => {
        if (item.children) {
          tables.push(...item.children);
        }
      });
      searchTable.value = tables;
    }

    const getTableList = computed((): TableInfo[] =>
      startSearch.value ? unref(searchTable) : unref(tableList)
    );

    onBeforeMount(() => {

    });
    return {
      changeSelect,
      changeSearch,
      getTableList,
      dbTree,
      prefixCls,
      color,
      curNode
    };
  }

};
</script>
<style scoped lang="less">
@prefix-cls: ~'@{namespace}-code-build';
[data-theme='dark'] {
  .@{prefix-cls}-card-item {
    background: #212121;
  }
}

.@{prefix-cls}-card {
  margin: 2px 10px 10px 5px;

  &-item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;

    &:hover {
      border: 1px solid #e5e7eb;
      cursor: pointer;
    }

    .img {
      width: 15px;
      height: 14px;
      margin: 0 12px 0 12px;
    }

    &-info {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>