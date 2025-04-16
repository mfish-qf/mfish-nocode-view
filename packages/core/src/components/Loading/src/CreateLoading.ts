import { createVNode, defineComponent, h, reactive, render, VNode } from "vue";
import type { LoadingProps } from "./Typing";
import Loading from "./Loading.vue";
import { Nullable } from "@mfish/types";

export function createLoading(props?: Partial<LoadingProps>, target?: HTMLElement, wait = false) {
  let vm: Nullable<VNode> = null;
  const data = reactive({
    tip: "",
    loading: true,
    ...props
  });

  const LoadingWrap = defineComponent({
    render() {
      return h(Loading, { ...data });
    }
  });

  vm = createVNode(LoadingWrap);

  if (wait) {
    setTimeout(() => {
      render(vm, document.createElement("div"));
    }, 0);
  } else {
    render(vm, document.createElement("div"));
  }

  function close() {
    if (vm?.el && vm.el.parentNode) {
      vm.el.remove();
    }
  }

  function open(target: HTMLElement = document.body) {
    if (!vm || !vm.el) {
      return;
    }
    target.append(vm.el as HTMLElement);
  }

  if (target) {
    open(target);
  }
  return {
    vm,
    close,
    open,
    setTip: (tip: string) => {
      data.tip = tip;
    },
    setLoading: (loading: boolean) => {
      data.loading = loading;
    },
    get loading() {
      return data.loading;
    },
    get $el() {
      return vm?.el as HTMLElement;
    }
  };
}
