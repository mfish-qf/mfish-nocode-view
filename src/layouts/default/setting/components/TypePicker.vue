<template>
  <div :class="prefixCls">
    <template v-for="item in menuTypeList || []" :key="item.title">
      <Tooltip :title="item.title" placement="bottom">
        <div
          @click="handler(item)"
          :class="[
            `${prefixCls}__item`,
            `${prefixCls}__item--${item.type}`,
            {
              [`${prefixCls}__item--active`]: def === item.type
            }
          ]"
        >
          <div class="mix-sidebar"></div>
        </div>
      </Tooltip>
    </template>
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType } from "vue";
  import { Tooltip } from "ant-design-vue";
  import { useDesign } from "@mfish/core/hooks";
  import { menuTypeList } from "../Enum";

  export default defineComponent({
    name: "MenuTypePicker",
    components: { Tooltip },
    props: {
      menuTypeList: {
        type: Array as PropType<typeof menuTypeList>
      },
      handler: {
        type: Function,
        default: () => ({})
      },
      def: {
        type: String,
        default: ""
      }
    },
    setup() {
      const { prefixCls } = useDesign("setting-menu-type-picker");

      return {
        prefixCls
      };
    }
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-setting-menu-type-picker";

  [data-theme="dark"] {
    .@{prefix-cls} {
      &__item {
        background-color: @black;
        box-shadow: 0 0 2px 0 rgb(255 255 255 / 30%);
      }
    }
  }

  .@{prefix-cls} {
    display: flex;
    justify-content: space-between;

    &__item {
      position: relative;
      width: 65px;
      height: 48px;
      overflow: hidden;
      cursor: pointer;
      background-color: @white;
      border-radius: 6px;
      box-shadow: 0 0 2px 0 rgb(0 0 0 / 15%);

      &::before,
      &::after {
        position: absolute;
        content: "";
      }

      &--sidebar,
      &--light {
        &::before {
          top: 0;
          left: 0;
          z-index: 1;
          width: 33%;
          height: 100%;
          background: @sider-bg-color;
          border-radius: 4px 0 0 4px;
        }

        &::after {
          top: 0;
          left: 0;
          width: 100%;
          height: 25%;
          background: @header-bg-color;
          box-shadow: 0 0 2px 0 rgb(0 0 0 / 20%);
        }
      }

      &--mix {
        &::before {
          top: 0;
          left: 0;
          width: 33%;
          height: 100%;
          background: @sider-bg-color;
          border-radius: 4px 0 0 4px;
        }

        &::after {
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 25%;
          background: @header-bg-color;
          box-shadow: 0 0 2px 0 rgb(0 0 0 / 20%);
        }
      }

      &--top-menu {
        &::after {
          top: 0;
          left: 0;
          width: 100%;
          height: 25%;
          background: @header-bg-color;
          box-shadow: 0 0 2px 0 rgb(0 0 0 / 20%);
        }
      }

      &--mix-sidebar {
        &::before {
          top: 0;
          left: 0;
          z-index: 1;
          width: 20%;
          height: 100%;
          background: @sider-bg-color;
          border-radius: 4px 0 0 4px;
        }

        &::after {
          top: 0;
          left: 0;
          width: 100%;
          height: 15%;
          background: @header-bg-color;
          box-shadow: 0 0 2px 0 rgb(0 0 0 / 20%);
        }
      }

      transition: all 0.2s ease-in;

      &:hover,
      &--active {
        padding: 12px;
        transform: scale(1.05);
        border: 1px solid @button-primary-color;

        &::before,
        &::after {
          border-radius: 0;
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
</style>
