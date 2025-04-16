<template>
  <span class="thumb">
    <AImage v-if="fileUrl" :src="fileUrl" :width="60" />
  </span>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import { propTypes } from "@core/utils/PropTypes";
  import { Image } from "ant-design-vue";

  export default defineComponent({
    components: { AImage: Image },
    props: {
      fileUrl: propTypes.string.def(""),
      fileName: propTypes.string.def("")
    }
  });
</script>
<style lang="less">
  .thumb {
    img {
      position: static;
      display: block;
      cursor: zoom-in;
      border-radius: 4px;
      object-fit: cover;
    }
  }
</style>
