<template>
  <div v-if="showFrame">
    <template v-for="frame in getFramePages" :key="frame.path">
      <FramePage
        v-if="frame.meta.frameSrc && hasRenderFrame(frame.name)"
        v-show="showIframe(frame)"
        :frame-src="frame.meta.frameSrc"
      />
    </template>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, unref } from "vue";
  import FramePage from "@/views/sys/iframe/index.vue";
  import { useFrameKeepAlive } from "./UseFrameKeepAlive";

  export default defineComponent({
    name: "FrameLayout",
    components: { FramePage },
    setup() {
      const { getFramePages, hasRenderFrame, showIframe } = useFrameKeepAlive();
      const showFrame = computed(() => unref(getFramePages).length > 0);
      return { getFramePages, hasRenderFrame, showIframe, showFrame };
    }
  });
</script>
