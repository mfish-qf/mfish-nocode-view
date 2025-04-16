/**
 * Global authority directive
 * Used for fine-grained control of component permissions
 * @Example
 */
import type { App, Directive, DirectiveBinding } from "vue";
import { usePermission } from "@core/hooks";

function isAuth(el: Element, binding: any) {
  const { hasPermission } = usePermission();
  const value = binding.value;
  if (!value) return;
  if (!hasPermission(value)) {
    el.remove();
  }
}

const mounted = (el: Element, binding: DirectiveBinding) => {
  isAuth(el, binding);
};

const authDirective: Directive = {
  mounted
};

export function setupPermissionDirective(app: App) {
  app.directive("auth", authDirective);
}

export default authDirective;
