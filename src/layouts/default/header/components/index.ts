import { createAsyncComponent } from "@/utils/factory/CreateAsyncComponent";

export const TenantDropDown = createAsyncComponent(() => import("./tenant-dropdown/index.vue"), {
  loading: true
});

export const UserDropDown = createAsyncComponent(() => import("./user-dropdown/index.vue"), {
  loading: true
});

export const LayoutBreadcrumb = createAsyncComponent(() => import("./Breadcrumb.vue"));

export const Notify = createAsyncComponent(() => import("./notify/index.vue"));

export const ErrorAction = createAsyncComponent(() => import("./ErrorAction.vue"));

export { default as FullScreen } from "./FullScreen.vue";
