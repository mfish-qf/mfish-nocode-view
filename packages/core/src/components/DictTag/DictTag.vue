<!--
 @description: 字典标签
 @author: mfish
 @date: 2024/3/22
-->
<script lang="tsx">
  import { defineComponent, PropType } from "vue";
  import { Tag } from "ant-design-vue";
  import { useDictStore } from "@mfish/stores/modules";

  export default defineComponent({
    name: "DictTag",
    props: {
      code: {
        type: String,
        require: true
      },
      value: {
        type: [String, Number, Boolean] as PropType<string | number | boolean>
      }
    },
    setup(props) {
      const store = useDictStore();
      return () => {
        if (!props.code) return;
        const dict = store.getDict(props.code);
        if (!dict) return;
        for (const status of dict.value) {
          if (props.value === status.dictValue) {
            return (
              <Tag
                color={status.color === "primary" ? "processing" : status.color}
                key={status.dictCode + status.dictValue}
              >
                {status.dictLabel}
              </Tag>
            );
          }
        }
        return <Tag></Tag>;
      };
    }
  });
</script>
<style scoped lang="less"></style>
