import type { ComputedRef, InjectionKey, Ref } from "vue";
import { createContext, useContext } from "@core/hooks";

export interface PageContextProps {
  contentHeight: ComputedRef<number>;
  pageHeight: Ref<number>;
  setPageHeight: (height: number) => Promise<void>;
}

const key: InjectionKey<PageContextProps> = Symbol("page-context");

export function createPageContext(context: PageContextProps) {
  return createContext<PageContextProps>(context, key, { native: true });
}

export function usePageContext() {
  return useContext<PageContextProps>(key);
}
