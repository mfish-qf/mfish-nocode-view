<!--
 @description:连接池配置项
 @author: mfish
 @date: 2023/3/14 21:36
-->
<template>
  <BasicForm @register="registerForm" @submit="handleSubmit" />
</template>

<script lang="ts">
import { BasicForm, useForm } from "/@/components/general/Form/index";

export default {
  name: "PoolConfig",
  props: {
    options: { type: String, default: "" }
  },
  components: { BasicForm },
  setup(props) {
    const schema = ()=>{
      const options = JSON.parse(props.options);
      Object.keys(options).forEach((key)=>{

      })
    }
    const [registerForm, { }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 24 },
      // schemas: schema,
      showActionButtonGroup: false
    });
    return {
      registerForm
    };
  }
};
</script>

<style scoped>

</style>