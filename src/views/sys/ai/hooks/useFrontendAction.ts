/**
 * @description: 前端动作执行器 —— 处理后端通过 FRONTEND_ACTION 事件下发的操作指令
 *   - navigate:    路由跳转（直接使用 router.push，可 await 跳转完成）
 *   - click:       模拟点击（通过 selector 定位 DOM 元素后 click）
 *   - fill:        表单填充（通过 selector 定位 input/textarea，使用原生 setter 触发 Vue 响应式更新）
 *   - refresh:     刷新列表数据（通过全局事件总线触发目标页表格 reload 重新查询，而非刷新路由；
 *                  keep-alive 下列表页缓存，reload 闭包持续有效）
 *   - openModal:   打开模态框（项目 useModal 是注册式的，无法跨组件打开，这里通过触发对应按钮 click 实现）
 * @author: mfish
 */
import { useMessage } from "@mfish/core/hooks";
import { router } from "@mfish/core/router";
import { triggerTableRefresh } from "@mfish/core/components/Table";

/** 后端返回的前端动作类型 */
export type FrontendActionType = "navigate" | "click" | "fill" | "refresh" | "openModal";

/** 后端 FRONTEND_ACTION 事件 content JSON 解析后的结构 */
export interface FrontendAction {
  /** 动作类型 */
  action: FrontendActionType;
  /** 操作描述（展示给用户） */
  description?: string;
  /** 动作参数：fill 时为 { value } ，其他动作可选 */
  params?: Record<string, any>;
  /**
   * 目标：
   *   - navigate   → 路由路径，如 "/demo/demo-leave-apply"
   *   - refresh    → 可选，指定刷新目标页面路径（不传则刷新当前页）
   *   - click/fill/openModal → CSS selector，如 ".ant-btn-primary"
   */
  target?: string;
}

/** 动作执行结果 */
export interface FrontendActionResult {
  success: boolean;
  message: string;
  /** 原始 action（便于上层记录展示） */
  action: FrontendAction;
}

export function useFrontendAction() {
  const { createMessage } = useMessage();

  /**
   * 执行一个前端动作
   * @param action 动作对象
   * @returns 执行结果
   */
  async function executeAction(action: FrontendAction): Promise<FrontendActionResult> {
    const { action: type, description, params = {}, target } = action;
    const fallback = description || `执行 ${type} 操作`;
    try {
      switch (type) {
        case "navigate": {
          if (!target) return fail(action, "缺少 target 路径");
          // 直接使用 router.push 并 await，确保路由跳转完成后再执行后续 action
          await router.push(target);
          createMessage.success(description || `已跳转到 ${target}`);
          return ok(action, description || `跳转到 ${target}`);
        }
        case "refresh": {
          // 如果 target 存在且与当前路由不同，先跳转到 target 再刷新
          // 这样即使 navigate 没成功，refresh 也能确保在正确页面执行
          const currentPath = router.currentRoute.value.path;
          if (target && target !== currentPath) {
            await router.push(target);
          }
          // 通过全局事件总线触发目标页表格的 reload 重新查询数据
          // 不刷新路由：keep-alive 下列表页缓存，刷新路由不会重新查询；reload 才是真正的数据刷新
          // 优先用 target 指定路径，否则刷新当前路径；target 为空时触发所有监听者
          const refreshPath = target || currentPath;
          triggerTableRefresh(refreshPath);
          createMessage.success(description || "已刷新列表数据");
          return ok(action, description || "刷新列表数据");
        }
        case "click": {
          const el = queryElement(target);
          if (!el) return fail(action, `未找到元素：${target}`);
          (el as HTMLElement).click();
          createMessage.success(description || "已点击元素");
          return ok(action, description || `点击 ${target}`);
        }
        case "fill": {
          const el = queryElement(target) as HTMLInputElement | HTMLTextAreaElement | null;
          if (!el) return fail(action, `未找到元素：${target}`);
          // 优先取 params.value，兼容 params.content
          const value = params.value ?? params.content ?? "";
          // 直接赋值 el.value 不会触发 Vue 的响应式更新，需要使用原生 setter + dispatch input/change 事件
          const proto = el.tagName === "TEXTAREA" ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
          const nativeSetter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
          if (nativeSetter) {
            nativeSetter.call(el, String(value));
          } else {
            (el as HTMLInputElement).value = String(value);
          }
          el.dispatchEvent(new Event("input", { bubbles: true }));
          el.dispatchEvent(new Event("change", { bubbles: true }));
          createMessage.success(description || "已填充表单");
          return ok(action, description || `填充 ${target}`);
        }
        case "openModal": {
          // 项目 useModal 是注册式的（useModal + useModalInner + BasicModal），无法跨组件直接 openModal
          // 这里通过触发对应按钮（target 为 selector）的 click 事件来打开模态框
          // 后端约定：target 指向页面上能触发模态框打开的按钮 selector
          const el = queryElement(target);
          if (!el) return fail(action, `未找到元素：${target}`);
          (el as HTMLElement).click();
          createMessage.success(description || "已打开模态框");
          return ok(action, description || `打开模态框`);
        }
        default: {
          return fail(action, `不支持的操作类型：${type}`);
        }
      }
    } catch (error: any) {
      console.error("[FrontendAction] 执行出错:", error);
      createMessage.error(`${fallback} 失败：${error?.message || error}`);
      return fail(action, `操作失败：${error?.message || error}`);
    }
  }

  /** 解析 FRONTEND_ACTION 事件的 content JSON 字符串 */
  function parseAction(content?: string | null): FrontendAction | null {
    if (!content) return null;
    try {
      const obj = typeof content === "string" ? JSON.parse(content) : content;
      if (!obj || typeof obj !== "object" || !obj.action) return null;
      return obj as FrontendAction;
    } catch (error) {
      console.error("[FrontendAction] 解析失败:", content, error);
      return null;
    }
  }

  /** 通过 selector 查询 DOM 元素，找不到时返回 null */
  function queryElement(selector?: string): Element | null {
    if (!selector) return null;
    try {
      return document.querySelector(selector);
    } catch {
      // selector 语法非法时 querySelector 会抛错
      return null;
    }
  }

  function ok(action: FrontendAction, message: string): FrontendActionResult {
    return { success: true, message, action };
  }
  function fail(action: FrontendAction, message: string): FrontendActionResult {
    return { success: false, message, action };
  }

  return { executeAction, parseAction };
}
