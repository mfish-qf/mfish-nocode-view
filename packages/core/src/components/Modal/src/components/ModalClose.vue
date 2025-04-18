<template>
  <div :class="getClass">
    <slot name="customIcon"></slot>
    <template v-if="canFullscreen">
      <Tooltip :title="t('component.modal.restore')" placement="bottom" v-if="fullScreen">
        <FullscreenExitOutlined @click="handleFullScreen" />
      </Tooltip>
      <Tooltip :title="t('component.modal.maximize')" placement="bottom" v-else>
        <FullscreenOutlined @click="handleFullScreen" />
      </Tooltip>
    </template>
    <Tooltip :title="t('component.modal.close')" placement="bottom">
      <CloseOutlined @click="handleCancel" />
    </Tooltip>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent } from "vue";
  import { CloseOutlined, FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons-vue";
  import { useDesign, useI18n } from "@core/hooks";
  import { Tooltip } from "ant-design-vue";

  export default defineComponent({
    name: "ModalClose",
    components: { Tooltip, FullscreenExitOutlined, FullscreenOutlined, CloseOutlined },
    props: {
      canFullscreen: { type: Boolean, default: true },
      fullScreen: { type: Boolean }
    },
    emits: ["cancel", "fullscreen"],
    setup(props, { emit }) {
      const { prefixCls } = useDesign("basic-modal-close");
      const { t } = useI18n();

      const getClass = computed(() => {
        return [
          prefixCls,
          `${prefixCls}--custom`,
          {
            [`${prefixCls}--can-full`]: props.canFullscreen
          }
        ];
      });

      function handleCancel(e: Event) {
        emit("cancel", e);
      }

      function handleFullScreen(e: Event) {
        e?.stopPropagation();
        e?.preventDefault();
        emit("fullscreen");
      }

      return {
        t,
        getClass,
        prefixCls,
        handleCancel,
        handleFullScreen
      };
    }
  });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-basic-modal-close";
  .@{prefix-cls} {
    display: flex;
    height: 95%;
    align-items: center;

    > span {
      margin-left: 6px;
      font-size: 16px;
    }

    &--can-full {
      > span {
        margin-left: 6px;
      }
    }

    &:not(&--can-full) {
      > span:nth-child(1) {
        &:hover {
          font-weight: 700;
        }
      }
    }

    & span:nth-child(n-1) {
      display: flex;
      align-items: center;
      padding: 4px;

      &:hover {
        color: @main-color;
      }
    }

    & span:last-child {
      &:hover {
        color: @error-color;
      }
    }
  }
</style>
