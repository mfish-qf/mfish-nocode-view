/**
 * @description: 工作流操作
 * @author: mfish
 * @date: 2025/10/20
 */
import ScreenReleaseAudit from "@/views/nocode/mf-screen/ScreenReleaseAudit.vue";
import DemoLeaveApplyAudit from "@/views/demo/demo-leave-apply/DemoLeaveApplyAudit.vue";

export interface AuditComponent {
  component: any;
  width?: number;
}
export function useWorkflow() {
  const getAuditComponent = (key: string | undefined): AuditComponent | undefined => {
    switch (key) {
      case "screen_release": {
        return { component: ScreenReleaseAudit, width: 800 };
      }
      case "demo_leave_apply_release": {
        return { component: DemoLeaveApplyAudit };
      }
    }
  };
  return { getAuditComponent };
}
