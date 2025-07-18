import { PropType } from "vue";

export const buttonProps = {
  color: {
    type: String
  },
  loading: { type: Boolean },
  disabled: { type: Boolean },
  /**
   * Text before icon.
   */
  preIcon: { type: String },
  /**
   * Text after icon.
   */
  postIcon: { type: String },
  /**
   * preIcon and postIcon icon size.
   * @default: 14
   */
  iconSize: { type: Number, default: 16 },
  iconColor: { type: String },
  onClick: { type: [Function, Array] as PropType<(() => any) | (() => any)[]>, default: null },
  text: { type: String }
};
