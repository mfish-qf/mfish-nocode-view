<!--
 @description: 大屏资源信息
 @author: mfish
 @date: 2025-03-19
 @version: V2.2.0
-->
<template>
  <div :class="prefixCls">
    <div class="header">
      <div class="tag-group">
        <span
          class="tag"
          :class="item.checked ? 'checked' : ''"
          v-for="(item, index) in tagGroup"
          :key="index"
          @click="checkHandle(index)"
        >
          <Icon :icon="item.icon" size="16px" />
          {{ item.name }}
        </span>
      </div>
      <Avatar :src="avatar" :load-error="errorAvatarHandle" />
    </div>
    <ScreenResourceList :category="curCategory" @clone-screen="cloneScreen" />
  </div>
</template>
<script lang="ts" setup>
  import { useDesign } from "@mfish/core/hooks";
  import ScreenResourceList from "@/views/nocode/screen-resource/ScreenResourceList.vue";
  import { Avatar, theme } from "ant-design-vue";
  import { computed, onMounted, ref } from "vue";
  import { Icon } from "@mfish/core/components/Icon";
  import { DictCategory, queryCategoryTreeByCode } from "@mfish/core/api";
  import { getLocalFileUrl, imageUrl } from "@mfish/core/utils/file/FileUtils";
  import logo from "@mfish/core/assets/images/logo.png";
  import { useUserStore } from "@mfish/stores/modules";

  defineOptions({ name: "ScreenResourceManagement" });
  const emit = defineEmits(["cloneScreen"]);
  const { prefixCls } = useDesign("screen-resource");
  const { token } = theme.useToken();
  const bgColor = computed(() => token.value.colorInfoBg);
  const tagGroup = ref<any[]>([]);
  const curCategory = computed(() => {
    return tagGroup.value.find((item) => item.checked)?.children || [];
  });
  const isError = ref(false);
  const avatar = computed(() => {
    if (isError.value) {
      return logo;
    }
    const imgUrl = useUserStore().getUserInfo?.headImgUrl;
    if (imgUrl) {
      return imageUrl(getLocalFileUrl(imgUrl));
    }
    return logo;
  });

  const errorAvatarHandle = (): boolean => {
    isError.value = true;
    return false;
  };
  onMounted(() => {
    queryCategoryTreeByCode("screen_resource", "down").then((res) => {
      if (res.length > 0 && res[0].children?.length > 0) {
        res[0].children.forEach((item: DictCategory, index: number) => {
          const children = item.children || [];
          children.unshift({
            categoryName: "所有",
            categoryCode: item.categoryCode,
            id: item.id
          });
          tagGroup.value.push({
            icon: item.icon,
            name: item.categoryName,
            checked: index === 0,
            children
          });
        });
      }
    });
  });

  function checkHandle(index: number) {
    tagGroup.value.forEach((item, i) => {
      item.checked = i === index;
    });
  }

  function cloneScreen(id: string) {
    emit("cloneScreen", id);
    window.parent.postMessage({ cloneScreen: id }, "/");
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-screen-resource";
  [data-theme="dark"] {
    .@{prefix-cls} {
      background-color: #1f1f1f;
      .header {
        .tag-group {
          .tag {
            box-shadow: 0 0 4px rgba(255, 255, 255, 0.15);

            &:hover {
              box-shadow: 0 2px 8px rgba(255, 255, 255, 0.15);
            }
          }
        }
      }
    }
  }

  .@{prefix-cls} {
    height: 100%;
    padding: 4px;
    .header {
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: space-between;
      padding-right: 10px;

      .tag-group {
        margin: 12px;
        display: flex;
        gap: 12px;

        .tag {
          border-radius: 4px;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
          background-color: v-bind(bgColor);
          padding: 6px 10px;
          font-size: 14px;
          cursor: pointer;
          transition: scale 0.2s ease-in-out;

          &:hover {
            scale: 1.02;
            color: @main-color;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }

          &.checked {
            scale: 1;
            border: 1px solid @main-color;
            box-shadow: 0 0 2px @main-color;
            color: @main-color;
          }
        }
      }
    }
  }
</style>
