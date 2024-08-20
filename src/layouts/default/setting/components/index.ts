import { createAsyncComponent } from "@/utils/factory/CreateAsyncComponent";

export const TypePicker = createAsyncComponent(() => import("./TypePicker.vue"));
export const ThemeColorPicker = createAsyncComponent(() => import("./ThemeColorPicker.vue"));
export const SettingSave = createAsyncComponent(() => import("./SettingSave.vue"));
export const SwitchItem = createAsyncComponent(() => import("./SwitchItem.vue"));
export const SelectItem = createAsyncComponent(() => import("./SelectItem.vue"));
export const InputNumberItem = createAsyncComponent(() => import("./InputNumberItem.vue"));
export const Animation = createAsyncComponent(() => import("./Animation.vue"));
