<!--
 @description: 大屏资源列表
 @author: mfish
 @date: 2025/3/26
-->
<template>
  <div :class="prefixCls">
    <div class="header">
      <ATabs v-model:active-key="activeCategory" @change="tabChange">
        <ATabs.TabPane v-for="(item, index) in category" :key="index" :tab="item.categoryName" />
        <template #rightExtra>
          <InputSearch placeholder="输入资源名称" @search="onSearch" style="width: 180px" allow-clear />
        </template>
      </ATabs>
    </div>
    <ScrollContainer :style="`height: ${height}px`">
      <AList :grid="{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }" :data-source="data">
        <template #renderItem="{ item }">
          <ACard class="resource-card" hoverable :body-style="{ cursor: 'text' }">
            <template #cover>
              <div class="thumbnail" @click="cardClick(item)">
                <img class="img" alt="thumbnail" :src="imageUrl(getLocalFileUrl(item.picKey))" />
              </div>
            </template>
            <ACard.Meta style="height: 80px" :title="item.name">
              <template #avatar>
                <Avatar :src="imageUrl(getLocalFileUrl(item.headImgUrl))" />
              </template>
              <template #description>
                <div class="description over">{{ item.remark }}</div>
                <div style="display: flex; justify-content: space-between; gap: 20px">
                  <span class="description flex-1 over">
                    {{ item.createBy }}
                  </span>
                  <span class="description">{{ formatToDate(item.createTime) }}</span>
                </div>
              </template>
            </ACard.Meta>
          </ACard>
        </template>
      </AList>
    </ScrollContainer>
    <div class="flex justify-end m-2">
      <Pagination class="flex" v-bind="paginationProp" />
    </div>
    <PreviewModal @register="registerPreviewModal" @clone-screen="cloneScreen" />
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, onUnmounted, PropType, ref, watch } from "vue";
  import InputSearch from "@mfish/core/components/InputSearch";
  import { Avatar, Card as ACard, List as AList, Pagination, Tabs as ATabs } from "ant-design-vue";
  import { usePagination } from "@mfish/core/utils/PageUtils";
  import { useDesign, useRootSetting } from "@mfish/core/hooks";
  import { getScreenResourceList } from "@mfish/nocode";
  import { getLocalFileUrl, imageUrl } from "@mfish/core/utils/file/FileUtils";
  import { formatToDate } from "@mfish/core/utils/DateUtil";
  import { DictCategory } from "@mfish/core/api";
  import { useModal } from "@mfish/core/components/Modal";
  import PreviewModal from "@/views/nocode/screen-folder/PreviewModal.vue";
  import { ScrollContainer } from "@mfish/core/components/Container";
  import { setDarkTheme } from "@mfish/core/logics/InitAppConfig";

  defineOptions({ name: "ScreenResourceList" });
  const props = defineProps({
    category: {
      type: Array as PropType<DictCategory[]>,
      default: []
    }
  });
  const emit = defineEmits(["cloneScreen"]);
  const data = ref();
  const { paginationProp, setCurrentPage, getPageNum, getPageSize, setTotal } = usePagination(pageRefresh);
  const [registerPreviewModal, { openModal: openPreviewModal }] = useModal();
  const { prefixCls } = useDesign("screen-resource-list");
  const listKey = ref<number>(1);
  const activeCategory = ref();
  const height = ref<number>(400);
  const { setDarkMode } = useRootSetting();
  watch(
    () => props.category,
    () => {
      setCurrentPage(1);
      activeCategory.value = 0;
      pageRefresh();
    }
  );

  function messageHandler(e: MessageEvent) {
    if (e.data?.theme) {
      //跳转iframe中主题样式
      const theme = e.data.theme;
      const main = document.querySelector("#mainHtml");
      if (main && theme) {
        //@ts-ignore 忽略主题设置
        main.dataset.theme = theme;
        setDarkMode(theme);
        setDarkTheme(theme);
      }
    }
  }

  const updateHeight = () => {
    height.value = Math.max(window.innerHeight - 140, 200);
  };
  onMounted(() => {
    //当前组件嵌入到iframe中会出现滚动条，设置当前body不可滚动
    // globalThis.document.body.style.overflow = "hidden";
    // globalThis.document.body.style.backgroundColor = "transparent";
    window.addEventListener("message", messageHandler);
    updateHeight();
    window.addEventListener("resize", updateHeight);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateHeight);
    window.removeEventListener("message", messageHandler);
  });

  function pageRefresh() {
    fetch(props.category[activeCategory.value]?.id);
  }

  function onSearch(val) {
    if (val) {
      fetch(props.category[activeCategory.value]?.id, val);
      return;
    }
    fetch(props.category[activeCategory.value]?.id);
  }

  async function fetch(category?: string, name?: string) {
    const result = await getScreenResourceList({
      category,
      name,
      pageNum: getPageNum(),
      pageSize: getPageSize()
    });
    data.value = result.list;
    setTotal(result.total);
    listKey.value++;
  }

  function tabChange(e) {
    setCurrentPage(1);
    fetch(props.category[e]?.id);
  }

  function cardClick(item) {
    openPreviewModal(true, { id: item.sourceId, isResource: true });
  }

  function cloneScreen(e) {
    emit("cloneScreen", e);
  }
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-screen-resource-list";
  [data-theme="dark"] {
    .@{prefix-cls} {
      .resource-card {
        background-color: @screen-header-color-dark;

        &:hover {
          box-shadow: 0 0 8px 4px rgba(255, 255, 255, 0.1);
        }

        .description {
          color: @screen-item-normal-color;
        }
      }
    }
  }

  .@{prefix-cls} {
    margin: 2px;

    .ant-list-header {
      border-block-end: none !important;
    }

    .header {
      margin: 0 10px 0 10px;
    }

    .resource-card {
      background-color: @screen-header-color-light;
      border-radius: 8px;
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.05);
      transition: all 0.25s ease-in;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin: 10px;
      height: 34vh;
      min-height: 258px;

      &:hover {
        box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
        transform: scale(1.01);
      }

      .thumbnail {
        display: flex;
        align-items: center;
        justify-content: center;

        .img {
          object-fit: contain;
          width: 100%;
          height: 100%;
          opacity: 90%;
          border-radius: 8px;
        }
      }

      .description {
        font-size: 12px;
        height: 20px;
        color: @screen-item-normal-color-light;
      }

      .over {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
<style lang="less">
  @prefix-cls: ~"@{namespace}-screen-resource-list";
  [data-theme="dark"] {
    .@{prefix-cls} {
      .ant-card-body {
        background-color: @screen-header-color-dark-hover;
      }
    }
  }

  .@{prefix-cls} {
    .ant-card-cover {
      flex: 1;
      display: flex;
      align-items: flex-start;
      overflow: hidden;
      margin: 16px 16px 0 16px;
      border-radius: 8px;
    }

    .ant-list-header {
      border-block-end: none !important;
    }

    .ant-card-body {
      border-radius: 0 0 6px 6px;
      background-color: @screen-header-color-light-hover;
      padding: 12px;
    }

    .ant-list-header {
      padding: 0;
    }

    .ant-tabs-nav {
      margin: 0;
    }
  }
</style>
