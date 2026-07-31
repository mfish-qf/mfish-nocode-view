/**
 * @description: 全局表格刷新事件总线（通用能力）
 *   useTable hook 在内部自动调用 onTableRefresh 注册 reload，所有 BasicTable 页面自动支持刷新，
 *   无需业务页面单独改动。外部调用 triggerTableRefresh(path) 即可触发对应路由页面表格重新查询数据。
 *
 *   keep-alive 下列表页被缓存，reload 闭包持续有效，监听持续响应刷新事件。
 * @author: mfish
 */
import { onUnmounted } from "vue";

/** 刷新回调：兼容 useTable 的 reload（返回 Promise<any[]>）等任意无参/可省参函数 */
type RefreshCallback = () => any | Promise<any>;

/** key: 路由 path（'*' 表示全局，接收所有刷新事件）；value: 该 path 下的回调集合 */
const listeners = new Map<string, Set<RefreshCallback>>();

const GLOBAL_KEY = "*";

/**
 * 触发表格刷新
 * @param path 指定要刷新的列表页路由路径；不传则刷新所有已注册监听的列表页
 */
export function triggerTableRefresh(path?: string) {
  const target = path?.trim();
  if (!target) {
    listeners.forEach((set) => {
      set.forEach((cb) => safeCall(cb));
    });
    return;
  }
  const set = listeners.get(target);
  set?.forEach((cb) => safeCall(cb));
  if (target !== GLOBAL_KEY) {
    const globalSet = listeners.get(GLOBAL_KEY);
    globalSet?.forEach((cb) => safeCall(cb));
  }
}

/**
 * 监听表格刷新事件（由 useTable 内部自动调用，业务层一般无需手动调用）
 * @param callback 刷新回调（通常是 useTable 返回的 reload）
 * @param path 当前列表页路由路径；不传则注册为全局监听者（接收所有刷新事件）
 * @returns off 函数，调用后移除监听（组件 onUnmounted 时也会自动移除）
 */
export function onTableRefresh(callback: RefreshCallback, path?: string) {
  const key = path?.trim() || GLOBAL_KEY;
  let set = listeners.get(key);
  if (!set) {
    set = new Set();
    listeners.set(key, set);
  }
  set.add(callback);

  const off = () => {
    const s = listeners.get(key);
    if (!s) return;
    s.delete(callback);
    if (s.size === 0) {
      listeners.delete(key);
    }
  };

  onUnmounted(off);

  return off;
}

async function safeCall(cb: RefreshCallback) {
  try {
    await cb();
  } catch (error) {
    console.error("[TableRefresh] 刷新回调执行出错:", error);
  }
}
