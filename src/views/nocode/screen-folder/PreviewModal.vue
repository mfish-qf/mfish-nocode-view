<!--
 @description: 预览弹窗
 @author: mfish
 @date: 2025/3/20
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="title" @cancel="clearData">
    <template #customIcon>
      <ATooltip title="预览" placement="bottom">
        <Icon icon="ant-design:eye-outlined" size="20" @click="previewScreen" />
      </ATooltip>
    </template>
    <template #centerFooter>
      <AButton pre-icon="ant-design:eye-outlined" type="primary" shape="round" size="small" @click="previewScreen">
        预览
      </AButton>
      <AButton pre-icon="ant-design:copy-outlined" type="primary" shape="round" size="small" @click="cloneScreen">
        克隆
      </AButton>
    </template>
    <ScreenPreview border-radius="6px" :fix-scale="0.6" />
  </BasicModal>
</template>
<script setup lang="ts">
  import { BasicModal, useModalInner } from "@mfish/core/src/components/Modal";
  import { ScreenPreview, useScreenEditStore } from "@mfish/nocode";
  import { computed, ref } from "vue";
  import { Icon } from "@mfish/core/src/components/Icon";
  import { Tooltip as ATooltip } from "ant-design-vue";
  import { router } from "@mfish/core/src/router";

  const emit = defineEmits(["cloneScreen", "submit", "register"]);
  const screenEditStore = useScreenEditStore();
  const screenId = ref();
  const isResource = ref();
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    screenId.value = data.id;
    isResource.value = data.isResource;
    setModalProps({
      confirmLoading: false,
      width: "1200px",
      cancelText: "关闭",
      destroyOnClose: true,
      showOkBtn: false,
      showCancelBtn: false,
      canFullscreen: false,
      buttonPosition: "center"
    });
    screenEditStore.setId(data.id as string);
    screenEditStore.setIsResource(data.isResource);
  });
  const title = computed(() => screenEditStore.getCanvasConfig.screenName);
  function previewScreen() {
    closeModal();
    clearData();
    setTimeout(() => {
      const routeData = router.resolve({
        name: "ScreenPreview",
        params: { id: screenId.value },
        query: { isResource: isResource.value }
      });
      window.open(routeData.href, "_blank");
    }, 1);
  }
  function clearData() {
    screenEditStore.setId("");
    screenEditStore.setIsResource(false);
    screenEditStore.setComponentList([]);
  }
  function cloneScreen() {
    closeModal();
    clearData();
    emit("cloneScreen", screenId.value);
  }
</script>
<style scoped lang="less"></style>
