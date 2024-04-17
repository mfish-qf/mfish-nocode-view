摸鱼低代码开发平台（前端）
======================================
当前最新版本： V1.2.0

[![Author](https://img.shields.io/badge/Author-mfish-orange.svg)](http://www.mfish.com.cn)
[![Blog](https://img.shields.io/badge/Blog-个人博客-yellow.svg)](http://www.mfish.com.cn)
[![Version](https://img.shields.io/badge/version-1.2.0-brightgreen.svg)](https://github.com/mfish-qf/mfish-nocode-view/releases/tag/v1.2.0)
[![License](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg)](https://github.com/mfish-qf/mfish-nocode-view/blob/main/LICENSE)

[![GitHub watches](https://img.shields.io/github/watchers/mfish-qf/mfish-nocode-view.svg?style=social&label=Watch)](https://github.com/mfish-qf/mfish-nocode-view)
[![GitHub stars](https://img.shields.io/github/stars/mfish-qf/mfish-nocode-view.svg?style=social&label=Stars)](https://github.com/mfish-qf/mfish-nocode-view)
[![GitHub forks](https://img.shields.io/github/forks/mfish-qf/mfish-nocode-view.svg?style=social&label=Fork)](https://github.com/mfish-qf/mfish-nocode-view)

## 项目介绍

mfish-nocode-view采用 Vue3.4、Vite5.0、 Ant-Design-Vue4.0.X、TypeScript 等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。
是在Vben-Admin基础上进行优化研发的适合于摸鱼低代码平台的前端解决方案，目前已是稳定版本，可用于生产项目。

## 后端源码地址

[![github](https://img.shields.io/badge/后端地址-github-red.svg)](https://github.com/mfish-qf/mfish-nocode)
[![gitee](https://img.shields.io/badge/后端地址-gitee-lightgrey.svg)](https://gitee.com/qiufeng9862/mfish-nocode)

## 文档地址

+ [文档地址](http://www.mfish.com.cn)
+ [在线预览](http://app.mfish.com.cn:11119)

## 平台交流

### 微信:

![](https://oscimg.oschina.net/oscnet/up-aaf63a91b96c092ad240b2e9755d926ba62.png)

### QQ群:

[![加入QQ群](https://img.shields.io/badge/522792773-blue.svg)](https://jq.qq.com/?_wv=1027&k=0A2bxoZX)
点击链接加入群聊【摸鱼低代码交流群】

#### 项目说明

| 项目名                 | 说明             | 
|---------------------|----------------|
| `mfish-nocode-view` | Vue3.4+Vite5前端 | 
| `mfish-nocode`      | JAVA后台（微服务架构）  |  

## 技术文档

### 安装与使用

> 环境要求: Node.js版本要求16.x以上。

- Get the project code

```bash
git clone https://github.com/mfish-qf/mfish-nocode-view.git
```

- Installation dependencies

```bash
cd mfish-nocode-view

pnpm install

```

- 配置后台接口地址

```bash
.env.development
```

- run

```bash
pnpm run dev
```

- build

```bash
pnpm run build
```

- 访问前台

http://localhost:5281

## 功能模块

```
├─ChatGpt
│  ├─聊天
├─驾驶舱
│  ├─工作台
├─系统管理
│  ├─菜单管理
│  ├─组织管理
│  ├─角色管理
│  ├─帐号管理
│  ├─字典管理
│  ├─日志管理
│  ├─文件管理
│  ├─在线用户
│  ├─数据库
│  └─数据源
├─租户管理
│  ├─租户配置
│  ├─租户信息
│  │  ├─租户组织
│  │  ├─租户角色
│  │  ├─租户人员
│  ├─个人信息
├─系统监控
│  ├─监控中心
├─任务调度
│  ├─任务管理
│  ├─任务日志
├─项目文档
│  ├─接口地址
│  ├─Github地址
│  ├─Gitee地址
│  ├─AntDesign文档
│  └─Vben文档
├─多级目录
├─系统工具
│  ├─代码生成
├─图形编辑器
├─引导页
├─关于
└─其他模块 
   └─更多功能开发中。。

```

#### 项目截图

![](https://oscimg.oschina.net/oscnet/up-7b8b53019b36fb12f5a0388491f7cedb06a.png)

![](https://oscimg.oschina.net/oscnet/up-cb060c85cfc867df4ea6c1be4ac65d64d74.png)

![](https://oscimg.oschina.net/oscnet/up-93645a610cf9dd0266580e0870ff497b946.png)

![](https://oscimg.oschina.net/oscnet/up-4f34924c18c4f5df0fb7823feef7431227d.png)

![](https://oscimg.oschina.net/oscnet/up-57d93c91b93340387c44d5d30e984e914d7.png)

![](https://oscimg.oschina.net/oscnet/up-0ff2d7b640896b9a9156af832baebcb313f.png)

![](https://oscimg.oschina.net/oscnet/up-81d9f856cdd794843d172c47874b69ff503.png)

![](https://oscimg.oschina.net/oscnet/up-c26c5a79214ed2e242512d0f5f4accca63b.png)

![](https://oscimg.oschina.net/oscnet/up-36d63fb4e8dd0a0844ff64a8f4c28682296.png)

![](https://oscimg.oschina.net/oscnet/up-434781fa769d2da21e396bfccbbe13c8f15.png)

![](https://oscimg.oschina.net/oscnet/up-7b2eeb5e679f75d889a841de61f9845c026.png)

![](https://oscimg.oschina.net/oscnet/up-c413a81f353a0175bbbd09cc32a7fb8d5bf.png)

![](https://oscimg.oschina.net/oscnet/up-736398ce5030ce21b6dda45ba9f24af4a72.png)

## 入门必备

本项目需要一定前端基础知识，请确保掌握 Vue 的基础知识，以便能处理一些常见的问题。
建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:

* [Vue3 文档](https://v3.vuejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vue-router](https://next.router.vuejs.org/)
* [Ant-Design-Vue](https://www.antdv.com/components/overview-cn)
* [Vben文档](https://doc.vvbin.cn/)
* [Es6](https://es6.ruanyifeng.com/)
* [Vitejs](https://vitejs.dev/)
* [Pinia(vuex替代方案)](https://pinia.esm.dev/introduction.html)
* [Vue-RFCS](https://github.com/vuejs/rfcs)
* [Vue2 迁移到 3](https://v3.vuejs.org/guide/migration/introduction.html)
* [Unocss](https://uno.antfu.me/)

## 浏览器支持

**本地开发**推荐使用`Chrome 最新版`浏览器，**不支持**`Chrome 80`以下版本。

**生产环境**支持现代浏览器，不支持 IE。

| [![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png)](http://godban.github.io/browsers-support-badges/)IE | [![ Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/)Edge | [![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/)Firefox | [![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/)Chrome | [![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/)Safari |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| not support                                                                                                                                                                                   | last 2 versions                                                                                                                                        | last 2 versions                                                                                                                                                   | last 2 versions                                                                                                                                               | last 2 versions                                                                                                                                               |
