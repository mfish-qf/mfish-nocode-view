import { InjectionKey } from "vue";
import { createContext, useContext } from "@core/hooks";

export interface ModalContextProps {
  redoModalHeight: () => void;
}

const key: InjectionKey<ModalContextProps> = Symbol("modal-context");

export function createModalContext(context: ModalContextProps) {
  return createContext<ModalContextProps>(context, key);
}

export function useModalContext() {
  return useContext<ModalContextProps>(key);
}
