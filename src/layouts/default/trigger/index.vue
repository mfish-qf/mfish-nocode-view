<template>
  <SiderTrigger v-if="sider" />
  <HeaderTrigger v-else :theme="theme" />
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import { createAsyncComponent } from "@mfish/core/utils/factory/CreateAsyncComponent";
  import { propTypes } from "@mfish/core/utils/PropTypes";
  import HeaderTrigger from "./HeaderTrigger.vue";

  export default defineComponent({
    name: "LayoutTrigger",
    components: {
      SiderTrigger: createAsyncComponent(() => import("./SiderTrigger.vue")),
      HeaderTrigger
    },
    props: {
      sider: propTypes.bool.def(true),
      theme: propTypes.oneOf(["light", "dark"])
    }
  });
</script>
