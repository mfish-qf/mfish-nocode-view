<!--
 @description: 大屏资源发布审批
 @author: mfish
 @date: 2025-10-20
 @version: V2.2.0
-->
<template>
  <Description v-show="screenResourceData" style="min-height: 350px" @register="registerDesc" />
</template>
<script lang="ts" setup>
  import { h, ref, watch } from "vue";
  import { getScreenResourceById, ScreenResource } from "@mfish/nocode";
  import { DescItem, Description, useDescription } from "@mfish/core/components/Description";
  import { Image as AImage } from "ant-design-vue";
  import { getLocalFileUrl, imageUrl } from "@mfish/core/utils/file/FileUtils";
  import { queryCategoryListById } from "@mfish/core/api";

  defineOptions({ name: "ScreenReleaseAudit" });
  const props = defineProps({
    businessKey: {
      type: String,
      default: ""
    }
  });
  class ScreenResourceDesc {
    viewSchema: DescItem[] = [
      {
        label: "id",
        field: "id",
        show: () => false
      },
      {
        field: "sourceId",
        label: "来源id",
        show: () => false
      },
      {
        field: "category",
        label: "分类"
      },
      {
        field: "name",
        label: "名称"
      },
      {
        field: "price",
        label: "价格",
        render: (val: number) => {
          return val === undefined ? "" : `${val.toFixed(2)}元`;
        }
      },
      {
        field: "remark",
        label: "描述"
      },
      {
        field: "picKey",
        label: "缩略图",
        render: (val: string) => {
          if (val) {
            const img = imageUrl(getLocalFileUrl(val));
            return h(AImage, {
              width: 200,
              src: img
            });
          }
          return "";
        }
      }
    ];
  }
  const screenResourceDesc = new ScreenResourceDesc();
  const screenResourceData = ref<ScreenResource>();
  watch(
    () => props.businessKey,
    async (id) => {
      if (id) {
        screenResourceData.value = await getScreenResourceById(id);
        if (!screenResourceData.value) {
          return;
        }
        queryCategoryListById(screenResourceData.value?.category || "", "current").then((res) => {
          if (screenResourceData.value) {
            screenResourceData.value.category = res[0]?.categoryName || "";
          }
        });
      }
    },
    { immediate: true }
  );

  const [registerDesc] = useDescription({
    data: screenResourceData,
    schema: screenResourceDesc.viewSchema,
    column: 1
  });
</script>
