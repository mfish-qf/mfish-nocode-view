<script lang="tsx">
import { defineComponent, watch, nextTick } from "vue";
import { fileListProps } from "./Props";
import { useModalContext } from "/@/components/general/Modal/src/hooks/UseModalContext";
import { Table } from "ant-design-vue";

export default defineComponent({
  name: "FileList",
  props: fileListProps,
  components: { Table },
  setup(props, {}) {
    const modalFn = useModalContext();
    watch(
      () => props.dataSource,
      () => {
        nextTick(() => {
          modalFn?.redoModalHeight?.();
        });
      }
    );
    return () => {
      const { columns, actionColumn, dataSource } = props;
      const columnList = [...columns, actionColumn];
      const scroll = { x: 800 };
      return (
        <Table columns={columnList as any} data-source={dataSource} pagination={false} scroll={scroll} bordered />
      );
    };
  }
});
</script>
<style lang="less">
.file-table {
  width: 100%;
  border-collapse: collapse;

  .center {
    text-align: center;
  }

  .left {
    text-align: left;
  }

  .right {
    text-align: right;
  }

  &-th,
  &-td {
    padding: 12px 8px;
  }

  thead {
    background-color: @background-color-light;
  }

  table,
  td,
  th {
    border: 1px solid @border-color-base;
  }
}
</style>
