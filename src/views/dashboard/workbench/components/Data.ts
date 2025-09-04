import { formatToDate } from "@mfish/core/utils/DateUtil";

interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
  url?: string;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
  url?: string;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

export const navItems: NavItem[] = [
  {
    title: "低代码",
    icon: "ant-design:code-outlined",
    color: "#1fdaca",
    url: "/low-code"
  },
  {
    title: "系统管理",
    icon: "ion:settings-outline",
    color: "#3fb27f",
    url: "/system"
  },
  {
    title: "租户管理",
    icon: "ion:home-outline",
    color: "#bf0c2c",
    url: "/tenant"
  },
  {
    title: "项目文档",
    icon: "ion:book-outline",
    color: "#e18525",
    url: "/doc"
  },
  {
    title: "使用样例",
    icon: "ant-design:read-outlined",
    color: "#4daf1bc9",
    url: "/demo"
  },
  {
    title: "任务调度",
    icon: "ion:calendar-outline",
    color: "#00d8ff",
    url: "/scheduler"
  }
];

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    avatar: "svg:dynamic-avatar-1",
    name: "mfish",
    date: "刚刚",
    desc: `在 <a target='_blank' href='https://gitee.com/qiufeng9862/mfish-nocode'>gitee</a> 发布了V2.1.1最新版本后端<a target='_blank' href='https://gitee.com/qiufeng9862/mfish-nocode'>mfish-nocode</a>`
  },
  {
    avatar: "svg:dynamic-avatar-3",
    name: "克里斯",
    date: "刚刚",
    desc: `在 <a target='_blank' href='https://gitee.com/qiufeng9862/mfish-nocode-view'>gitee</a> 发布了V2.1.1最新版本前端<a target='_blank' href='https://gitee.com/qiufeng9862/mfish-nocode-view'>mfish-nocode-view</a>`
  },
  {
    avatar: "svg:dynamic-avatar-4",
    name: "Mfish",
    date: "刚刚",
    desc: `在 <a target='_blank' href='https://github.com/mfish-qf/mfish-nocode-view'>github</a> 发布了V2.1.1最新版本前端<a target='_blank' href='https://github.com/mfish-qf/mfish-nocode-view'>mfish-nocode-view</a>`
  },
  {
    avatar: "svg:dynamic-avatar-2",
    name: "mfish",
    date: "刚刚",
    desc: `在 <a target='_blank' href='https://github.com/mfish-qf/mfish-nocode'>github</a> 发布了V2.1.1最新版本后端<a target='_blank' href='https://github.com/mfish-qf/mfish-nocode'>mfish-nocode</a>`
  },
  {
    avatar: "svg:dynamic-avatar-5",
    name: "皮特",
    date: "3天前",
    desc: `回复了 <a>杰克</a> 的问题 <a>如何进行项目优化？</a>`
  },
  {
    avatar: "svg:dynamic-avatar-6",
    name: "杰克",
    date: "1周前",
    desc: `关闭了问题 <a>如何运行项目</a> `
  },
  {
    avatar: "svg:dynamic-avatar-1",
    name: "威廉",
    date: "1周前",
    desc: `发布了 <a>个人动态</a> `
  },
  {
    avatar: "svg:dynamic-avatar-1",
    name: "威廉",
    date: "2021-04-01 20:00",
    desc: `推送了代码到 <a>Github</a>`
  }
];

export const groupItems: GroupItem[] = [
  {
    title: "Github后端",
    icon: "ant-design:github-outlined",
    color: "",
    desc: "不要等待机会，而要创造机会。",
    group: "开源组",
    date: formatToDate(),
    url: "https://github.com/mfish-qf/mfish-nocode"
  },
  {
    title: "Github前端",
    icon: "ant-design:github-outlined",
    color: "",
    desc: "摸鱼也会成长，摸鱼也能成功。",
    group: "开源组",
    date: formatToDate(),
    url: "https://github.com/mfish-qf/mfish-nocode-view"
  },
  {
    title: "Gitee后端",
    icon: "simple-icons:gitee",
    color: "#bf0c2c",
    desc: "上班摸鱼不如来学习下摸鱼低代码",
    group: "开源组",
    date: formatToDate(),
    url: "https://gitee.com/qiufeng9862/mfish-nocode"
  },
  {
    title: "Gitee前端",
    icon: "simple-icons:gitee",
    color: "#bf0c2c",
    desc: "热情和欲望可以突破一切难关。",
    group: "开源组",
    date: formatToDate(),
    url: "https://gitee.com/qiufeng9862/mfish-nocode-view"
  },
  {
    title: "来摸鱼啊",
    icon: "ion:fish-outline",
    color: "#e18525",
    desc: "没有什么才能比努力更重要。",
    group: "上班摸鱼",
    date: formatToDate(),
    url: "https://www.mfish.com.cn"
  },
  {
    title: "Vue",
    icon: "carbon:logo-vue",
    color: "#3fb27f",
    desc: "易学易用，性能出色，适用场景丰富的Web框架。",
    group: "前端框架",
    date: formatToDate(),
    url: "https://cn.vuejs.org/"
  },

  {
    title: "AntDesign",
    icon: "ant-design:ant-design-outlined",
    color: "#5183f4",
    desc: "Ant Design致力于提供给程序员愉悦的开发体验。",
    group: "小蚂蚁们",
    date: formatToDate(),
    url: "https://www.antdv.com/docs/vue/introduce-cn/"
  },
  {
    title: "Vben",
    icon: "ion:social-vimeo-outline",
    color: "#00d8ff",
    desc: "Vben一个开源的VUE前端脚手架。",
    group: "前端框架",
    date: formatToDate(),
    url: "https://github.com/vbenjs/vue-vben-admin"
  },
  {
    title: "Js",
    icon: "ion:logo-javascript",
    color: "#4daf1bc9",
    desc: "路是走出来的，而不是空想出来的。",
    group: "架构组",
    date: formatToDate(),
    url: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide"
  }
];
