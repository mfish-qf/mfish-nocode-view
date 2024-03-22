<!--
 @description: 字典标签
 @author: qiufeng
 @date: 2024/3/22
-->
<script lang="tsx">
  import { defineComponent, onBeforeMount, PropType, ref } from "vue";
  import { Tag } from "ant-design-vue";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  import { getDictItems } from "/@/api/sys/DictItem";

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
      const dict = ref<DictItem[]>([]);
      onBeforeMount(() => {
        getDictList();
      });

      function getDictList() {
        getDictItems(props.code).then((res) => {
          dict.value = res;
        });
      }
      return () => {
        for (const status of dict.value) {
          if (props.value === status.dictValue) {
            return (
              <Tag color={status.color} key={status.dictCode + status.dictValue}>
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
