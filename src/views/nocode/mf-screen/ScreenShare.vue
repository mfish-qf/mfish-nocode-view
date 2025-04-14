<!--
 @description: 大屏分享
 @author: mfish
 @date: 2025/4/1
-->
<template>
  <AModal v-model:open="shareOpen" width="400px" :footer="null" :mask="true" :centered="true" @cancel="closeHandle">
    <template #title>
      <div class="share-title">分享 - {{ title }}</div>
    </template>
    <div :class="prefixCls">
      <div class="mb-2">分享时长（小时）</div>
      <div class="mb-2">
        <AInputNumber style="width: 150px" v-model:value="shareTime" min="1" max="360" />
      </div>
      <div class="mb-2">分享到</div>
      <div class="share-group">
        <div class="share-button">
          <AButton type="primary" size="large" @click="shareLink">
            <template #icon>
              <Icon icon="ant-design:link-outlined" />
            </template>
          </AButton>
          复制链接
        </div>
        <div class="share-button">
          <AButton type="primary" size="large" @click="shareQrCode">
            <template #icon>
              <Icon icon="ant-design:qrcode-outlined" />
            </template>
          </AButton>
          生成二维码
        </div>
      </div>
    </div>
  </AModal>
  <QRCodeModal :open="qrCodeOpen" :img="qrCodeImg" :title="title" />
</template>
<script setup lang="ts">
  import { Icon } from "@mfish/core/src/components/Icon";
  import { Modal as AModal, InputNumber as AInputNumber } from "ant-design-vue";
  import { ref, watch, watchEffect } from "vue";
  import { useDesign } from "@mfish/core";
  import { shareMfScreenById, shareMfScreenByQRCode } from "@mfish/nocode";
  import QRCodeModal from "@/views/nocode/mf-screen/QRCodeModal.vue";
  import { useClipboard } from "@vueuse/core";
  import { useMessage } from "@mfish/core/src/hooks/web/UseMessage";
  const props = defineProps({
    open: Boolean,
    title: String,
    screenId: String
  });
  const emit = defineEmits(["close"]);
  const shareOpen = ref<boolean>(false);
  const { prefixCls } = useDesign("screen-share");
  const shareTime = ref<number>(6);
  const qrCodeOpen = ref(false);
  const qrCodeImg = ref<string>("");
  const { copy, copied } = useClipboard({ legacy: true });
  const { createMessage } = useMessage();
  watchEffect(() => {
    shareOpen.value = props.open;
  });

  watch(
    () => copied.value,
    (val) => {
      if (val) {
        createMessage.success("链接已复制");
      }
    }
  );
  function shareLink() {
    if (props.screenId) {
      shareMfScreenById(props.screenId, shareTime.value).then((res) => {
        copy(`${globalThis.location.origin}/low-code/mf-screen/preview/${props.screenId}?shareToken=${res}`);
        shareOpen.value = false;
        emit("close");
      });
    }
  }

  function shareQrCode() {
    if (props.screenId) {
      qrCodeImg.value = "";
      qrCodeOpen.value = false;
      shareMfScreenByQRCode(
        props.screenId,
        `${globalThis.location.origin}/low-code/mf-screen/preview/${props.screenId}`,
        shareTime.value
      ).then((res) => {
        shareOpen.value = false;
        emit("close");
        qrCodeImg.value = res;
        qrCodeOpen.value = true;
      });
    }
  }
  function closeHandle() {
    emit("close");
  }
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-screen-share";
  .@{prefix-cls} {
    padding: 10px;
    font-size: 14px;
    border-radius: 6px;
    color: @screen-item-normal-color-light;
    .share-group {
      display: flex;
      gap: 20px;

      .share-button {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
</style>
