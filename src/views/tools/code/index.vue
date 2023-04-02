<!--
 @description:代码生成
 @author: mfish
 @date: 2023/3/31 20:17
-->
<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <DBTree class="w-1/4 xl:w-1/5" :showIcon="true" @select="changeSelect" />
    <a-list class="w-3/4 xl:w-4/5">
      <a-row :gutter="16">
        <template v-for="item in tableList" :key="item.tableName">
          <a-col :span="6">
            <a-list-item>
              <a-card :hoverable="true">
                <div>
                  <Icon class="icon" icon="ant-design:table-outlined" />
                  {{ item.tableName }}
                </div>
                <div>
                  {{ item.tableComment }}
                </div>
              </a-card>
            </a-list-item>
          </a-col>
        </template>
      </a-row>
    </a-list>
  </PageWrapper>
</template>

<script lang="ts">
import { ref, onBeforeMount } from "vue";
import { PageWrapper } from "/@/components/general/Page";
import DBTree from "./DBTree.vue";
import { getTableList } from "/@/api/sys/DbConnect";
import { Icon } from "/@/components/general/Icon/index";
import { Card, Row, Col, List } from "ant-design-vue";

export default {
  name: "codeBuild",
  components: {
    DBTree, PageWrapper, Icon, [Card.name]: Card,
    [List.name]: List,
    [List.Item.name]: List.Item,
    [Row.name]: Row,
    [Col.name]: Col
  },
  setup() {
    let tableList = ref([]);

    async function changeSelect(connectId) {
      const result = await getTableList({ connectId: connectId, pageNum: 1, pageSize: 10000 });
      if (result) {
        tableList.value = result.list;
      }
    }

    onBeforeMount(() => {

    });


    return {
      changeSelect,
      tableList
    };
  }

};
</script>

<style scoped>

</style>