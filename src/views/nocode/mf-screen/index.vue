<!--
 @description: 我的大屏信息
 @author: mfish
 @date: 2024-08-07
 @version: V2.4.0
-->
<template>
  <NLayout
    :class="prefixCls"
    :native-scrollbar="false"
    position="absolute"
    @dragover.prevent
    @mousedown="hideShortcutMenu"
  >
    <NLayoutHeader>
      <FrameHeader
        @save-screen="saveScreen"
        @preview-screen="previewScreen"
        @release-screen="screenRelease"
        @share-screen="screenShare"
      >
        <template #leftActions>
          <ScreenResource size="small" shape="round" @clone-screen="(e) => cloneScreen({ id: e, isResource: true })" />
        </template>
      </FrameHeader>
    </NLayoutHeader>
    <NLayoutContent content-style="display: flex;height:calc(100vh - 42px)" @contextmenu.prevent="showShortcutMenu">
      <div style="display: flex">
        <FrameChart :collapsed="screenLayoutStore.getChartCollapsed" @contextmenu.stop />
        <FrameLayer :collapsed="screenLayoutStore.getLayerCollapsed" />
      </div>
      <NLayout has-sider sider-placement="right">
        <NLayoutContent content-style="overflow:hidden;margin-left: 1px;">
          <FrameCanvas :width="width" :height="height" />
        </NLayoutContent>
        <NLayoutSider
          :collapsed-width="0"
          :collapsed="screenLayoutStore.getConfigCollapsed"
          collapse-mode="transform"
          :width="340"
          show-trigger="bar"
          @collapse="collapsedConfig"
          @expand="expandConfig"
          @contextmenu.stop
        >
          <FrameConfig />
        </NLayoutSider>
      </NLayout>
    </NLayoutContent>
    <FrameShortcut ref="frameShortcutRef" :menu-left="menuLeft" :menu-top="menuTop" />
  </NLayout>
  <ScreenShareModal :title="title" :screen-id="screenId" :open="shareOpen" @close="() => (shareOpen = false)" />
  <ScreenReleaseModal :preview="false" @register="registerModal" @success="releaseResourceSuccess" />
</template>
<script lang="ts" setup>
  import FrameHeader from "@/components/nocode/screen/frame/FrameHeader/index.vue";
  import { createAsyncComponent } from "@mfish/core/utils/factory/CreateAsyncComponent";
  import { NLayout, NLayoutContent, NLayoutHeader, NLayoutSider } from "naive-ui";
  import { useDesign, useMessage } from "@mfish/core/hooks";
  import { computed, nextTick, onBeforeMount, onMounted, onUnmounted, ref, useTemplateRef } from "vue";
  import {
    clearChartResource,
    FrameShortcut,
    getMfScreenById,
    insertMfScreen,
    listenGlobalKeyboard,
    preSaveScreen,
    SCREEN_SAVE,
    updateMfScreen,
    useScreenEditStore,
    useScreenLayoutStore,
    useScreenShortcut,
    useScreenShortcutStore
  } from "@mfish/nocode";
  import { useRoute } from "vue-router";
  import { router } from "@mfish/core/router";
  import { debounce } from "lodash-es";
  import html2canvas from "html2canvas";
  import { dataURLtoBlob } from "@mfish/core/utils/file/Base64Convert";
  import { uploadApi } from "@mfish/core/api";
  import { useOutsideOpen } from "@mfish/core/utils/OutsideOpenUtils";
  import ScreenResource from "@/views/nocode/screen-resource/ScreenResource.vue";
  import ScreenShareModal from "@/views/nocode/mf-screen/ScreenShareModal.vue";
  import ScreenReleaseModal from "@/views/nocode/mf-screen/ScreenReleaseModal.vue";
  import { useModal } from "@mfish/core/components/Modal";
  import "@/components/nocode/screen/custom-components/register";

  const screenUrl = "/low-code/mf-screen/config";

  const FrameChart = createAsyncComponent(() => import("./frame/FrameChart.vue"), {
    loading: true,
    size: "large"
  });
  const FrameLayer = createAsyncComponent(() => import("./frame/FrameLayer.vue"), {
    loading: true,
    size: "large"
  });
  const FrameCanvas = createAsyncComponent(() => import("./frame/FrameCanvas.vue"), {
    loading: true,
    size: "large"
  });
  const FrameConfig = createAsyncComponent(() => import("./frame/FrameConfig.vue"), {
    loading: true,
    size: "large"
  });
  const screenLayoutStore = useScreenLayoutStore();
  const screenEditStore = useScreenEditStore();
  const { prefixCls } = useDesign("screen");
  const width = computed(() => Number(screenEditStore.getCanvasConfig.width) + 5000);
  const height = computed(() => Number(screenEditStore.getCanvasConfig.height) + 4000);
  const screenShortcutStore = useScreenShortcutStore();
  const menuTop = ref();
  const menuLeft = ref();
  const { createMessage } = useMessage();
  let folderId: string | undefined;
  const frameShortcutRef = useTemplateRef<any>("frameShortcutRef");
  const { query } = useRoute();
  const { open, end } = useOutsideOpen(SCREEN_SAVE);
  const shareOpen = ref<boolean>(false);
  const [registerModal, { openModal }] = useModal();
  const title = computed(() => screenEditStore.getCanvasConfig?.screenName);
  const screenId = computed(() => screenEditStore.getId);

  function collapsedConfig() {
    screenLayoutStore.setConfigCollapsed(true);
  }

  function expandConfig() {
    screenLayoutStore.setConfigCollapsed(false);
  }

  onBeforeMount(async () => {
    folderId = query.folderId as string;
    screenEditStore.setId(query.id as string);
    screenEditStore.setIsResource(query.isResource === "true");
  });
  let globalKeyboard: any;
  onMounted(async () => {
    screenLayoutStore.initCache();
    globalKeyboard = listenGlobalKeyboard(useScreenShortcut(useScreenEditStore(), useScreenShortcutStore()));
    await screenEditStore.loadingScreen();
    //如果有目录id，且有id，则为克隆
    if (folderId !== undefined && screenEditStore.getId) {
      screenEditStore.cloneScreen();
    }
  });
  onUnmounted(() => {
    globalKeyboard.removeGlobalKeyboard();
  });

  function showShortcutMenu(e: MouseEvent) {
    menuLeft.value = e.x + 1;
    menuTop.value = e.y + 1;
    screenShortcutStore.setShowMenu(true);
    nextTick(() => {
      menuTop.value = calcTop(e.y);
    });
  }

  //计算菜单位置，超过半屏菜单向上弹出，否则向下弹出
  function calcTop(y: number) {
    const screenHeight = window.innerHeight;
    const frameShortcut = frameShortcutRef.value;
    if (frameShortcut && y > Math.round(screenHeight / 2) && frameShortcut.getBoundingClientRect()) {
      return menuTop.value - frameShortcut.getBoundingClientRect().height - 1;
    }
    return menuTop.value + 1;
  }

  function hideShortcutMenu(e: MouseEvent) {
    if (e.buttons === 1) {
      screenShortcutStore.setShowMenu(false);
    }
  }

  const saveScreen = debounce(async (callback) => {
    screenEditStore.clearCache();
    screenEditStore.cleanCurComponent();
    if (!screenEditStore.getCanvasConfig.screenName) {
      createMessage.warning("请输入大屏名称");
      callback(false);
      return;
    }
    try {
      const res = await saveImage();
      const screen = preSaveScreen(screenEditStore.getComponentList, screenEditStore.getCanvasConfig);
      if (folderId === undefined) {
        await updateMfScreen({
          id: screenEditStore.getId,
          name: screenEditStore.getCanvasConfig.screenName,
          thumbnail: res?.fileKey ?? undefined,
          remark: screenEditStore.getCanvasConfig.screenDesc,
          ...screen
        });
      } else {
        const result = await insertMfScreen({
          folderId,
          name: screenEditStore.getCanvasConfig.screenName,
          remark: screenEditStore.getCanvasConfig.screenDesc,
          thumbnail: res?.fileKey ?? undefined,
          ...screen
        });
        //保存成功后设置为非资源拷贝模式
        clearChartResource(screenEditStore.getComponentList);
        screenEditStore.setIsResource(false);
        router.replace({ query: { id: result.id } });
        folderId = undefined;
        screenEditStore.setId(result.id as string);
      }
      end();
    } finally {
      callback(false);
    }
  }, 200);

  async function saveImage() {
    if (!screenEditStore.getScreenCanvas) {
      return;
    }
    const { width, height } = screenEditStore.getScreenCanvas.getBoundingClientRect();
    const ignoreClass = new Set(["contain-point", "mfish-near-line", "mfish-select-area"]);
    // 截图前捕获所有iframe内容为图片
    const iframeSnapshots = await captureIframes(screenEditStore.getScreenCanvas as HTMLElement);
    const canvas = await html2canvas(screenEditStore.getScreenCanvas as HTMLElement, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      ignoreElements: (element) => {
        return ignoreClass.has(element.className);
      },
      width,
      height,
      scale: 0.4,
      onclone: (clonedDoc) => {
        // 在克隆的DOM中，用截图替换iframe
        const clonedCanvas =
          clonedDoc.querySelector(
            screenEditStore.getScreenCanvas!.id ? `#${screenEditStore.getScreenCanvas!.id}` : ".mfish-screen-canvas"
          ) || clonedDoc.body;
        const clonedIframes = clonedCanvas.querySelectorAll("iframe");
        clonedIframes.forEach((iframe, index) => {
          if (iframeSnapshots[index]) {
            const img = clonedDoc.createElement("img");
            img.src = iframeSnapshots[index];
            img.style.width = iframe.style.width || `${iframe.offsetWidth}px`;
            img.style.height = iframe.style.height || `${iframe.offsetHeight}px`;
            img.style.position = iframe.style.position || "static";
            img.style.objectFit = "fill";
            iframe.parentNode?.replaceChild(img, iframe);
          }
        });
      }
    });
    const dataURL = canvas.toDataURL("image/png");
    const file = dataURLtoBlob(dataURL);
    return await uploadApi({
      file,
      fileName: screenEditStore.getCanvasConfig.screenName,
      path: "screen/thumbnail"
    });
  }

  /**
   * 捕获画布中所有iframe的内容为base64图片
   * 同源iframe通过html2canvas直接截取contentDocument
   * 跨域iframe无法截取，返回空字符串
   */
  async function captureIframes(container: HTMLElement): Promise<string[]> {
    const iframes = container.querySelectorAll("iframe");
    const snapshots: string[] = [];
    for (const iframe of iframes) {
      let snapshot = "";
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc?.body) {
          const iframeCanvas = await html2canvas(doc.body, {
            useCORS: true,
            allowTaint: true,
            backgroundColor: null,
            width: iframe.clientWidth,
            height: iframe.clientHeight,
            scale: 0.4,
            windowWidth: iframe.clientWidth,
            windowHeight: iframe.clientHeight
          });
          snapshot = iframeCanvas.toDataURL("image/png");
        }
      } catch {
        // 跨域iframe无法访问contentDocument，跳过
      }
      snapshots.push(snapshot);
    }
    return snapshots;
  }

  function previewScreen() {
    const routeData = router.resolve({
      name: "ScreenPreview",
      params: {
        id: screenEditStore.getId
      }
    });
    window.open(routeData.href, "_blank");
  }

  function screenShare() {
    shareOpen.value = true;
  }

  async function screenRelease() {
    if (!screenEditStore.getId) return;
    const screen = await getMfScreenById(screenEditStore.getId);
    openModal(true, {
      sourceId: screenEditStore.getId,
      name: screen?.name,
      remark: screen?.remark,
      picKey: screen?.thumbnail,
      price: 0
    });
  }

  function cloneScreen(data) {
    const routeData = router.resolve({
      path: screenUrl,
      query: { folderId, id: data.id, isResource: data.isResource }
    });
    open(routeData);
  }
  function releaseResourceSuccess() {
    screenEditStore.setIsReleased(true);
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-screen";
  .@{prefix-cls} {
    .n-layout-toggle-bar {
      left: -25px !important;
    }
  }
</style>
