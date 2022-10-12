import { withInstall } from "/@/utils";
import "./src/index.less";
import basicModal from "./src/BasicModal.vue";

export const BasicModal = withInstall(basicModal);
export { useModalContext } from "./src/hooks/UseModalContext";
export { useModal, useModalInner } from "./src/hooks/UseModal";
export * from "./src/Typing";
