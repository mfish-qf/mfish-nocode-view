<!--
 @description: 自助API
 @author: mfish
 @date: 2023/8/4
-->
<template>
  <div @click="handlerClick">aaa</div>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import { API_SAVE } from "/@/views/nocode/api-folder/apiFolder.data";

  const count = ref(1);
  function handlerClick() {
    localStorage.setItem(API_SAVE, (count.value++).toString());
  }
</script>
<style scoped lang="less"></style>
