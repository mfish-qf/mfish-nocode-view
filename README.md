摸鱼低代码开发平台（前端）
======================================
当前最新版本： 1.0.0


## 简介
mfish-nocode-view采用 Vue3.0、Vite4.0、 Ant-Design-Vue、TypeScript 等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。
是在 Vben-Admin 基础上研发的，适合于mfish低代码平台的VUE3版前端解决方案，目前已是稳定版本，可用于生产项目。

##  后端源码地址
* *[后端----github地址](https://github.com/mfish-qf/mfish-nocode)*
* *[后端----gitee地址](https://gitee.com/qiufeng9862/mfish-nocode)*
## 演示环境
* *[demo地址](http://app.mfish.com.cn:11119)*

##### 项目说明

| 项目名                 | 说明                     | 
|---------------------|------------------------|
| `mfish-nocode-view` | Vue3版前端代码 | 
| `mfish-nocode`      | JAVA后台（支持微服务）        |  

## 技术文档


## 安装与使用


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

## 功能模块（开发中...）
> vue3版本已经实现了系统管理、系统监控、各种组件、权限、GUI代码生成、完全可以用于生产环境。

```
├─驾驶舱
│  ├─工作台
├─系统管理
│  ├─菜单管理
│  ├─组织管理
│  ├─角色管理
│  ├─帐号管理
│  ├─字典管理
│  ├─个人管理
│  └─日志管理
├─系统监控
│  ├─监控中心
├─项目文档
│  ├─接口地址
│  ├─Git地址
│  ├─AntDesign文档
│  ├─Vben文档
├─多级目录
├─引导页
├─关于
└─其他模块 
   └─更多功能开发中。。 
   
```

##   系统效果
系统后台

流程设计&表单设计

报表设计

大屏模板




## 入门必备

本项目需要一定前端基础知识，请确保掌握 Vue 的基础知识，以便能处理一些常见的问题。 建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:

*   [Vue3 文档](https://v3.vuejs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Vue-router](https://next.router.vuejs.org/)
*   [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)
*   [Vben文档](https://doc.vvbin.cn/)
*   [Es6](https://es6.ruanyifeng.com/)
*   [Vitejs](https://vitejs.dev/)
*   [Pinia(vuex替代方案)](https://pinia.esm.dev/introduction.html)
*   [Vue-RFCS](https://github.com/vuejs/rfcs)
*   [Vue2 迁移到 3](https://v3.vuejs.org/guide/migration/introduction.html)
*   [~~WindiCss~~](https://windicss.netlify.app/)


##   浏览器支持

**本地开发**推荐使用`Chrome 最新版`浏览器，**不支持**`Chrome 80`以下版本。

**生产环境**支持现代浏览器，不支持 IE。

| [![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png)](http://godban.github.io/browsers-support-badges/)IE | [![ Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/)Edge | [![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/)Firefox | [![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/)Chrome | [![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/)Safari |
| --- | --- | --- | --- | --- |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |
