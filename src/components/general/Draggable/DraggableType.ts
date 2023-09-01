/**
 * @description: 拖动类型
 * @author: mfish
 * @date: 2023/8/22
 */
export interface DraggableType {
  name?: string;
  //是否自己挂载组件
  slot?: boolean;
}

export interface DragMenu<T> {
  name: string;
  value: T;
  icon: string;
  color?: string;
}
