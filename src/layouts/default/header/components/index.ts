import { createAsyncComponent } from "/@/utils/factory/CreateAsyncComponent";
import FullScreen from "./FullScreen.vue";

export const TenantDropDown = createAsyncComponent(() => import("./tenant-dropdown/index.vue"), {
  loading: true
});

export const UserDropDown = createAsyncComponent(() => import("./user-dropdown/index.vue"), {
  loading: true
});

export const LayoutBreadcrumb = createAsyncComponent(() => import("./Breadcrumb.vue"));

export const Notify = createAsyncComponent(() => import("./notify/index.vue"));

export const ErrorAction = createAsyncComponent(() => import("./ErrorAction.vue"));

export { FullScreen };
