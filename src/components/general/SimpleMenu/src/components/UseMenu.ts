import { computed, ComponentInternalInstance, unref } from "vue";
import type { CSSProperties } from "vue";

export function useMenuItem(instance: ComponentInternalInstance | null) {
  const MFISH_MENU = "MfishMenu";
  const SUB_MENU = "SubMenu";
  const getParentMenu = computed(() => {
    return findParentMenu([MFISH_MENU, SUB_MENU]);
  });

  const getParentRootMenu = computed(() => {
    return findParentMenu([MFISH_MENU]);
  });

  const getParentSubMenu = computed(() => {
    return findParentMenu([SUB_MENU]);
  });

  const getItemStyle = computed((): CSSProperties => {
    let parent = instance?.parent;
    if (!parent) return {};
    const indentSize = (unref(getParentRootMenu)?.props.indentSize as number) ?? 20;
    let padding = indentSize;

    if (unref(getParentRootMenu)?.props.collapse) {
      padding = indentSize;
    } else {
      while (parent && parent.type.name !== MFISH_MENU) {
        if (parent.type.name === SUB_MENU) {
          padding += indentSize;
        }
        parent = parent.parent;
      }
    }
    return { paddingLeft: padding + "px" };
  });

  function findParentMenu(name: string[]) {
    let parent = instance?.parent;
    if (!parent) return null;
    while (parent && name.indexOf(parent.type.name!) === -1) {
      parent = parent.parent;
    }
    return parent;
  }

  function getParentList() {
    let parent = instance;
    if (!parent)
      return {
        uidList: [],
        list: []
      };
    const ret: any[] = [];
    while (parent && parent.type.name !== MFISH_MENU) {
      if (parent.type.name === SUB_MENU) {
        ret.push(parent);
      }
      parent = parent.parent;
    }
    return {
      uidList: ret.map((item) => item.uid),
      list: ret
    };
  }

  function getParentInstance(instance: ComponentInternalInstance, name = SUB_MENU) {
    let parent = instance.parent;
    while (parent) {
      if (parent.type.name !== name) {
        return parent;
      }
      parent = parent.parent;
    }
    return parent;
  }

  return {
    getParentMenu,
    getParentInstance,
    getParentRootMenu,
    getParentList,
    getParentSubMenu,
    getItemStyle,
    MFISH_MENU
  };
}
