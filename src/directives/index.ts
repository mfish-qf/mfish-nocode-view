import type { App } from "vue";
import { setupPermissionDirective } from "./Permission";
import { setupLoadingDirective } from "./Loading";

/**
 * Configure and register global directives
 */
export function setupGlobDirectives(app: App) {
  setupPermissionDirective(app);
  setupLoadingDirective(app);
}
