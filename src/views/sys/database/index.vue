<!--
 @description:代码生成
 @author: mfish
 @date: 2023/3/31 20:17
-->
<template>
  <PageWrapper contentFullHeight fixedHeight contentClass="flex" class="mt-3 ml-3 mr-3">
    <DBTree
      ref="dbTree"
      class="xs:w-1/2 s:w-1/4 xl:w-1/5"
      :showIcon="true"
      @select="changeSelect"
      @search="changeSearch"
    />
    <div class="bg-white xs:w-1/2 s:w-3/4 xl:w-4/5" :class="prefixCls" style="display: flex; flex-direction: column">
      <a-breadcrumb separator=">" class="m-3">
        <a-breadcrumb-item v-for="(item, index) in breadList" :key="index">
          <Icon :icon="item.icon" />
          <a @click="setSelect(item.key)" class="fw-bold text-decoration-none">{{ item.title }}</a>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <ScrollContainer v-if="curNode?.dbName">
        <a-row class="ml-3">
          <a-col
            :xs="{ span: 24 }"
            :md="{ span: 8 }"
            :lg="{ span: 5 }"
            v-for="(item, index) in getTableList"
            :key="index"
            :class="`${prefixCls}-card`"
          >
            <div :class="`${prefixCls}-card-item`" @click="setSelect(item.key)">
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
      </ScrollContainer>
      <TableDetail v-else :cur-node="curNode">
        <template #[item]="data" v-for="item in Object.keys($slots)">
          <slot :name="item" v-bind="data || {}"></slot>
        </template>
      </TableDetail>
    </div>
  </PageWrapper>
</template>

<script lang="ts">
  import { ref, unref, onBeforeMount, computed, toRaw } from "vue";
  import { PageWrapper } from "/@/components/general/Page";
  import { ScrollContainer } from "/@/components/general/Container";
  import DBTree from "./DBTree.vue";
  import { Icon } from "/@/components/general/Icon";
  import { Tooltip, Row, Col, Breadcrumb, BreadcrumbItem } from "ant-design-vue";
  import { TableInfo } from "/@/api/sys/model/DbConnectModel";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import { useAppStore } from "/@/store/modules/App";
  import TableDetail from "/@/views/sys/database/TableDetail.vue";
  import { TreeItem } from "/@/components/general/Tree";

  export default {
    name: "CodeBuild",
    components: {
      TableDetail,
      DBTree,
      PageWrapper,
      Icon,
      ScrollContainer,
      Tooltip,
      [Row.name]: Row,
      [Breadcrumb.name]: Breadcrumb,
      [BreadcrumbItem.name]: BreadcrumbItem,
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
      const curNode = ref<TreeItem>();
      const parentNode = ref<TreeItem>();

      async function changeSelect(record, parent) {
        curNode.value = toRaw(record);
        if (parent) {
          parentNode.value = toRaw(parent);
        } else {
          parentNode.value = undefined;
        }
        //如果是数据库节点，构建下面表信息
        if (record.dbName) {
          if (record.children) {
            tableList.value = record.children;
            return;
          }
          dbTree.value.buildTableTree(record.id).then((res) => {
            tableList.value = res;
          });
          return;
        }
      }

      const breadList = computed(() => {
        const list: any[] = [];
        if (parentNode.value) {
          list.push({
            icon: parentNode.value.icon,
            title: parentNode.value.dbTitle,
            key: parentNode.value.key
          });
          if (curNode.value) {
            list.push({
              icon: curNode.value.icon,
              title: curNode.value.tableName,
              key: curNode.value.key
            });
          }
          return list;
        }
        if (curNode.value) {
          list.push({
            icon: curNode.value.icon,
            title: curNode.value.dbTitle,
            key: curNode.value.key
          });
        }
        return list;
      });

      function setSelect(key) {
        dbTree.value.setSelect(key);
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

      const getTableList = computed((): TableInfo[] => (startSearch.value ? unref(searchTable) : unref(tableList)));

      onBeforeMount(() => {});
      return {
        changeSelect,
        setSelect,
        changeSearch,
        getTableList,
        dbTree,
        prefixCls,
        color,
        curNode,
        breadList
      };
    }
  };
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-code-build";
  [data-theme="dark"] {
    .@{prefix-cls}-card-item {
      background: #212121;
    }
  }
  [data-theme="dark"] {
    .@{prefix-cls}{
      border-left: 1px solid #303030
    }
  }
  .@{prefix-cls} {
    //padding: 0 0 0 5px;
    border-left: 1px solid #d9d9d9;
  }

  .@{prefix-cls}-card {
    margin: 5px 10px 10px 0px;

    &-item {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 70px;
      background: #ffffff;
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
