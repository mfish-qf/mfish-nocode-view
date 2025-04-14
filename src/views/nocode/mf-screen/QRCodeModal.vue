<!--
 @description: 分享二维码
 @author: mfish
 @date: 2025/3/7
-->
<template>
  <AModal v-model:open="openModal" width="300px" :footer="null" :mask="true" :centered="true">
    <div :class="prefixCls">
      <div class="title" :title="title">{{ title }}</div>
      <div class="tip">扫一扫二维码打开</div>
      <img class="qrcode-img" :src="img" alt="分享二维码" />
      <AButton type="primary" @click="saveQrCode">
        <template #icon>
          <Icon icon="ant-design:save-outlined" />
        </template>
        保存到电脑
      </AButton>
    </div>
  </AModal>
</template>
<script setup lang="ts">
  import { Modal as AModal } from "ant-design-vue";
  import { ref, watchEffect } from "vue";
  import { useDesign } from "@mfish/core";
  import { Icon } from "@mfish/core/src/components/Icon";

  const props = defineProps({
    title: { type: String, default: "分享二维码" },
    open: { type: Boolean, default: false },
    img: { type: String, default: "" }
  });
  const { prefixCls } = useDesign("qrCode-modal");
  const openModal = ref<boolean>(false);
  watchEffect(() => {
    openModal.value = props.open;
  });

  function saveQrCode() {
    const aLink = document.createElement("a");
    aLink.href = props.img;
    aLink.download = `${props.title ?? "大屏分享"}.png`;
    aLink.click();
  }
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-qrCode-modal";
  [data-theme="dark"] {
    .@{prefix-cls} {
      .tip {
        color: @screen-item-normal-color-light;
      }
      .qrcode-img {
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
      }
    }
  }
  .@{prefix-cls} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px 25px 10px 25px;
    .title {
      width: 100%;
      font-size: 16px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
    }
    .tip {
      color: @screen-item-normal-color;
      margin-bottom: 12px;
    }
    .qrcode-img {
      border-radius: 8px;
      background-color: @white;
      padding: 12px;
      width: 240px;
      height: 240px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      margin-bottom: 12px;
    }
  }
</style>
