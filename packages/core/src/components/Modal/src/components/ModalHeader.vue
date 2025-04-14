<template>
  <BasicTitle :help-message="helpMessage">
    {{ title }}
  </BasicTitle>
</template>
<script lang="ts">
  import type { PropType } from "vue";
  import { defineComponent } from "vue";
  import { BasicTitle } from "../../../Basic";

  export default defineComponent({
    name: "BasicModalHeader",
    components: { BasicTitle },
    props: {
      helpMessage: {
        type: [String, Array] as PropType<string | string[]>
      },
      title: { type: String }
    },
    emits: ["dblclick"]
  });
</script>
