<template>
  <div :class="prefixCls" class="relative">
    <InputPassword
      v-if="showInput"
      v-bind="$attrs"
      allow-clear
      :value="innerValueRef"
      @change="handleChange"
      :disabled="disabled"
    >
      <template #[item]="data" v-for="item in Object.keys($slots)">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </InputPassword>
    <div :class="`${prefixCls}-bar`">
      <div :class="`${prefixCls}-bar--fill`" :data-score="getPasswordStrength"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref, unref, watch, watchEffect } from "vue";
  import { Input } from "ant-design-vue";
  import { zxcvbn } from "@zxcvbn-ts/core";
  import { useDesign } from "@core/hooks";
  import { propTypes } from "@core/utils/PropTypes";

  export default defineComponent({
    name: "StrengthMeter",
    components: { InputPassword: Input.Password },
    props: {
      value: propTypes.string,
      showInput: propTypes.bool.def(true),
      disabled: propTypes.bool
    },
    emits: ["score-change", "change"],
    setup(props, { emit }) {
      const innerValueRef = ref("");
      const { prefixCls } = useDesign("strength-meter");

      const getPasswordStrength = computed(() => {
        const { disabled } = props;
        if (disabled) return -1;
        const innerValue = unref(innerValueRef);
        const score = innerValue ? zxcvbn(unref(innerValueRef)).score : -1;
        emit("score-change", score);
        return score;
      });

      function handleChange(e: any) {
        innerValueRef.value = e.target.value;
      }

      watchEffect(() => {
        innerValueRef.value = props.value || "";
      });

      watch(
        () => unref(innerValueRef),
        (val) => {
          emit("change", val);
        }
      );

      return {
        getPasswordStrength,
        handleChange,
        prefixCls,
        innerValueRef
      };
    }
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-strength-meter";
  [data-theme="dark"] {
    .@{prefix-cls} {
      &-bar {
        background-color: rgba(255, 255, 255, 0.1);

        &::before,
        &::after {
          border-color: @black;
        }
      }
    }
  }

  .@{prefix-cls} {
    &-bar {
      position: relative;
      height: 6px;
      margin: 10px auto 6px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 6px;

      &::before,
      &::after {
        position: absolute;
        z-index: 10;
        display: block;
        width: 20%;
        height: inherit;
        background-color: transparent;
        border-color: @white;
        border-style: solid;
        border-width: 0 5px;
        content: "";
      }

      &::before {
        left: 20%;
      }

      &::after {
        right: 20%;
      }

      &--fill {
        position: absolute;
        width: 0;
        height: inherit;
        background-color: transparent;
        border-radius: inherit;
        transition:
          width 0.5s ease-in-out,
          background 0.25s;

        &[data-score="0"] {
          width: 20%;
          background-color: darken(@error-color, 10%);
        }

        &[data-score="1"] {
          width: 40%;
          background-color: @error-color;
        }

        &[data-score="2"] {
          width: 60%;
          background-color: @warning-color;
        }

        &[data-score="3"] {
          width: 80%;
          background-color: fade(@success-color, 50%);
        }

        &[data-score="4"] {
          width: 100%;
          background-color: @success-color;
        }
      }
    }
  }
</style>
