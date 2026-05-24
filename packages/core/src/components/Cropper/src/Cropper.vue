<template>
  <div :class="getClass" :style="getWrapperStyle">
    <img ref="imgElRef" :src="src" :alt="alt" :crossorigin="crossorigin" :style="getImageStyle" />
  </div>
</template>
<script lang="ts" setup>
  import type { CSSProperties } from "vue";
  import { computed, nextTick, onMounted, onUnmounted, ref, unref, watch } from "vue";
  import Cropper from "cropperjs";
  import { useDesign } from "@core/hooks";
  import { useDebounceFn } from "@vueuse/shared";
  import type { ElRef, Nullable } from "@mfish/types";

  interface CropperResult {
    imgBase64: string;
    imgInfo: { x: number; y: number; width: number; height: number };
  }

  const props = withDefaults(
    defineProps<{
      src: string;
      alt?: string;
      circled?: boolean;
      realTimePreview?: boolean;
      height?: string | number;
      crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
      imageStyle?: CSSProperties;
      options?: Record<string, any>;
    }>(),
    {
      height: "360px",
      realTimePreview: true
    }
  );

  const emit = defineEmits<{
    cropper: [result: CropperResult];
    ready: [cropper: Cropper];
    cropperError: [];
  }>();

  const imgElRef = ref<ElRef<HTMLImageElement>>();
  const cropper = ref<Nullable<Cropper>>();

  const { prefixCls } = useDesign("cropper-image");
  const debounceRealTimeCroppered = useDebounceFn(croppered, 80);

  const getImageStyle = computed(
    (): CSSProperties => ({
      height: `${props.height}`,
      maxWidth: "100%",
      ...props.imageStyle
    })
  );

  const getClass = computed(() => [
    prefixCls,
    {
      [`${prefixCls}--circled`]: props.circled
    }
  ]);

  const getWrapperStyle = computed(
    (): CSSProperties => ({
      height: `${`${props.height}`.replace(/px/, "")}px`
    })
  );

  function buildTemplate(opts: Record<string, any>) {
    const ar = opts.aspectRatio ?? 1;
    return (
      `<cropper-canvas background style="min-height:${props.height};height:${props.height}">` +
      "<cropper-image rotatable scalable skewable translatable></cropper-image>" +
      "<cropper-shade hidden></cropper-shade>" +
      '<cropper-handle action="select" plain></cropper-handle>' +
      `<cropper-selection initial-coverage="0.8" movable resizable aspect-ratio="${ar}">` +
      '<cropper-grid role="grid" bordered covered></cropper-grid>' +
      "<cropper-crosshair centered></cropper-crosshair>" +
      '<cropper-handle action="move" theme-color="rgba(255, 255, 255, 0.35)"></cropper-handle>' +
      '<cropper-handle action="n-resize"></cropper-handle>' +
      '<cropper-handle action="e-resize"></cropper-handle>' +
      '<cropper-handle action="s-resize"></cropper-handle>' +
      '<cropper-handle action="w-resize"></cropper-handle>' +
      '<cropper-handle action="ne-resize"></cropper-handle>' +
      '<cropper-handle action="nw-resize"></cropper-handle>' +
      '<cropper-handle action="se-resize"></cropper-handle>' +
      '<cropper-handle action="sw-resize"></cropper-handle>' +
      "</cropper-selection>" +
      "</cropper-canvas>"
    );
  }

  function injectShadowStyle(el: Element | null, css: string) {
    if (!el) return;
    const shadow = (el as any).shadowRoot as ShadowRoot | undefined;
    if (!shadow) return;
    const style = document.createElement("style");
    style.textContent = css;
    shadow.appendChild(style);
  }

  function applyCircledStyle(cropperInstance: Cropper) {
    const selection = cropperInstance.getCropperSelection();
    const canvas = cropperInstance.getCropperCanvas();
    if (!selection || !canvas) return;

    // selection 宿主：圆形裁剪
    injectShadowStyle(selection, ":host{border-radius:50%!important;overflow:hidden!important}");

    // move handle（在 selection 内部）：半透明覆盖层也要圆形
    const moveHandle = selection.querySelector("cropper-handle[action=move]");
    injectShadowStyle(moveHandle, ":host{border-radius:50%!important}");

    // select handle（在 canvas 内部，selection 外面）：选择区域也要圆形
    const selectHandle = canvas.querySelector("cropper-handle[action=select]");
    injectShadowStyle(selectHandle, ":host{border-radius:50%!important}");

    // grid：去掉方形边框，网格线在圆形内自然裁剪
    const grid = selection.querySelector("cropper-grid");
    injectShadowStyle(grid, ":host([bordered]){border:none!important}");

    // 隐藏角落的 resize 手柄（圆形下不需要）
    selection.querySelectorAll("cropper-handle[action$=-resize]").forEach((handle) => {
      injectShadowStyle(handle, ":host{display:none!important}");
    });

    // shade（在 canvas 内部）加圆形
    const shade = canvas.querySelector("cropper-shade");
    injectShadowStyle(shade, ":host{border-radius:50%!important;overflow:hidden}");
  }

  function init() {
    const imgEl = unref(imgElRef);
    if (!imgEl) return;

    cropper.value = new Cropper(imgEl, {
      template: buildTemplate(props.options ?? {})
    });

    const selection = cropper.value.getCropperSelection();
    if (selection) {
      selection.addEventListener("change", () => {
        debounceRealTimeCroppered();
      });
    }

    const image = cropper.value.getCropperImage();
    if (image) {
      (image as any).$ready(() => {
        if (props.circled) {
          applyCircledStyle(cropper.value!);
        }
        croppered();
        emit("ready", cropper.value!);
      });
      image.addEventListener("transform", () => {
        debounceRealTimeCroppered();
      });
    }
  }

  onMounted(() => {
    nextTick(() => init());
  });

  onUnmounted(() => {
    cropper.value?.destroy();
  });

  watch(
    () => props.src,
    () => {
      if (cropper.value) {
        cropper.value.destroy();
        nextTick(() => init());
      }
    }
  );

  async function croppered() {
    if (!cropper.value) return;
    const selection = cropper.value.getCropperSelection();
    if (!selection) return;
    try {
      const canvas = await (selection as any).$toCanvas();
      if (!canvas) return;
      const finalCanvas = props.circled ? getRoundedCanvas(canvas) : canvas;
      finalCanvas.toBlob((blob: Blob | null) => {
        if (!blob) return;
        const fileReader = new FileReader();
        fileReader.readAsDataURL(blob);
        fileReader.onloadend = (e) => {
          emit("cropper", {
            imgBase64: (e.target?.result as string) ?? "",
            imgInfo: { x: selection.x, y: selection.y, width: selection.width, height: selection.height }
          });
        };
        fileReader.onerror = () => {
          emit("cropperError");
        };
      }, "image/png");
    } catch {
      emit("cropperError");
    }
  }

  function getRoundedCanvas(sourceCanvas: HTMLCanvasElement) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    const width = sourceCanvas.width;
    const height = sourceCanvas.height;
    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = "destination-in";
    context.beginPath();
    context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
    context.fill();
    return canvas;
  }

  defineExpose({ croppered, cropper });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-cropper-image";

  .@{prefix-cls} {
    line-height: 0;
  }
</style>
