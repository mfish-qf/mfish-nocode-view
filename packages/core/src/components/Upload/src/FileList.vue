<script lang="tsx">
  import { defineComponent, nextTick, watch } from "vue";
  import { fileListProps } from "./Props";
  import { useModalContext } from "@core/components/Modal";
  import { Table as ATable } from "ant-design-vue";

  export default defineComponent({
    name: "FileList",
    components: { ATable },
    props: fileListProps,
    setup(props) {
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
          <ATable columns={columnList as any} data-source={dataSource} pagination={false} scroll={scroll} bordered />
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
