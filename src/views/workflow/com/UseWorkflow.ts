/**
 * @description: 工作流操作
 * @author: mfish
 * @date: 2025/10/20
 */
import ScreenReleaseAudit from "@/views/nocode/mf-screen/ScreenReleaseAudit.vue";

export interface AuditComponent {
  component: any;
  width: number;
}
export function useWorkflow() {
  const getAuditComponent = (key: string | undefined): AuditComponent | undefined => {
    if (key === "screen_release") {
      return { component: ScreenReleaseAudit, width: 800 };
    }
  };
  return { getAuditComponent };
}
