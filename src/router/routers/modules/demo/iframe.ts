import type { AppRouteModule } from "/@/router/Types";

import { LAYOUT } from "/@/router/Constant";

const IFrame = () => import("/@/views/sys/iframe/FrameBlank.vue");

const iframe: AppRouteModule = {
  path: "/frame",
  name: "Frame",
  component: LAYOUT,
  redirect: "/frame/doc",
  meta: {
    orderNo: 1000,
    icon: "ion:tv-outline",
    title: "项目文档"
  },

  children: [
    {
      path: "swagger",
      name: "Swagger",
      component: IFrame,
      meta: {
        frameSrc: "http://localhost:8888/swagger-ui/index.html",
        title: "接口地址"
      }
    },
    {
      path: "https://github.com/mfish-qf/mfish-nocode",
      name: "Git",
      meta: {
        frameSrc: "",
        title: "Git地址"
      }
    },
    {
      path: "https://2x.antdv.com/docs/vue/introduce-cn/",
      name: "DocExternal",
      meta: {
        title: "AntDesign地址"
      }
    }
  ]
};

export default iframe;
