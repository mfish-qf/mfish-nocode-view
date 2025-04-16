import { withInstall } from "@core/utils";
import basicDrawer from "./src/BasicDrawer.vue";

export const BasicDrawer = withInstall(basicDrawer);
export * from "./src/Typing";
export { useDrawer, useDrawerInner } from "./src/UseDrawer";
