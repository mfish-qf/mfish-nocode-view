import { LAYOUT } from "/@/router/Constant";
import { AppRouteRecordRaw } from "/@/router/Types";

const IFrame = () => import("/@/views/sys/iframe/FrameBlank.vue");

const iframe: AppRouteRecordRaw = {
  path: "/doc",
  name: "Frame",
  component: LAYOUT,
  redirect: "/doc/swagger",
  meta: {
    menuSort: 19,
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
