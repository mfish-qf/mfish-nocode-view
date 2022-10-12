/**
 * Configure and register global directives
 */
import type { App } from 'vue';
import { setupPermissionDirective } from './Permission';
import { setupLoadingDirective } from './Loading';

export function setupGlobDirectives(app: App) {
  setupPermissionDirective(app);
  setupLoadingDirective(app);
}
