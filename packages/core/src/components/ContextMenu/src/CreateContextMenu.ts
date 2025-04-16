import contextMenuVue from "./ContextMenu.vue";
import { isClient } from "../../../utils/Is";
import { ContextMenuProps, CreateContextOptions } from "./Typing";
import { createVNode, render } from "vue";
import { Fn } from "@mfish/types";

const menuManager: {
  domList: Element[];
  resolve: Fn;
} = {
  domList: [],
  resolve: () => {}
};

export const createContextMenu = function (options: CreateContextOptions) {
  const { event } = options || {};

  event && event?.preventDefault();

  if (!isClient) {
    return;
  }
  return new Promise((resolve) => {
    const body = document.body;

    const container = document.createElement("div");
    const propsData: Partial<ContextMenuProps> = {};
    if (options.styles) {
      propsData.styles = options.styles;
    }

    if (options.items) {
      propsData.items = options.items;
    }

    if (options.event) {
      propsData.customEvent = event;
      propsData.axis = { x: event.clientX, y: event.clientY };
    }

    const vm = createVNode(contextMenuVue, propsData);
    render(vm, container);

    const handleClick = function () {
      menuManager.resolve("");
    };

    menuManager.domList.push(container);

    const remove = function () {
      menuManager.domList.forEach((dom: Element) => {
        try {
          dom && body.removeChild(dom);
        } catch {}
      });
      body.removeEventListener("click", handleClick);
      body.removeEventListener("scroll", handleClick);
    };

    menuManager.resolve = function (arg: any) {
      remove();
      resolve(arg);
    };
    remove();
    body.append(container);
    body.addEventListener("click", handleClick);
    body.addEventListener("scroll", handleClick);
  });
};

export const destroyContextMenu = function () {
  if (menuManager) {
    menuManager.resolve("");
    menuManager.domList = [];
  }
};
