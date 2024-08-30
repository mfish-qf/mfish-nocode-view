摸鱼低代码开发平台（前端）
======================================
当前最新版本： V1.3.1

[![Author](https://img.shields.io/badge/Author-mfish-orange.svg)](http://www.mfish.com.cn)
[![Blog](https://img.shields.io/badge/Blog-个人博客-yellow.svg)](http://www.mfish.com.cn)
[![Version](https://img.shields.io/badge/version-1.2.0-brightgreen.svg)](https://github.com/mfish-qf/mfish-nocode-view/releases/tag/v1.2.0)
[![License](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg)](https://github.com/mfish-qf/mfish-nocode-view/blob/main/LICENSE)

[![GitHub watches](https://img.shields.io/github/watchers/mfish-qf/mfish-nocode-view.svg?style=social&label=Watch)](https://github.com/mfish-qf/mfish-nocode-view)
[![GitHub stars](https://img.shields.io/github/stars/mfish-qf/mfish-nocode-view.svg?style=social&label=Stars)](https://github.com/mfish-qf/mfish-nocode-view)
[![GitHub forks](https://img.shields.io/github/forks/mfish-qf/mfish-nocode-view.svg?style=social&label=Fork)](https://github.com/mfish-qf/mfish-nocode-view)

## 项目介绍

摸鱼低代码前端采用 Vue3.4、Vite5.0、 Ant-Design-Vue4.0.X、TypeScript 等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。
是在Vben-Admin基础上进行优化研发的适合于摸鱼低代码平台的前端解决方案，目前已是稳定版本，可用于生产项目。

* 后端基于SpringBoot3, Spring Cloud Alibaba，实现微服务、单体服务代码一体化架构
* 注册中心、配置中心采用nacos(作为单体服务时无需使用注册中心)
* 支持oauth2统一认证接入，支持多种登录方式（账号密码登录、手机短信登录、微信扫码登录）
* 支持租户切换，租户可以自己管理自己的人员、组织、角色
* 支持可视化配置查询API接口，后端自动生成SQL执行
* 支持注解方式进行数据权限控制，与业务代码完全解耦

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
├─低代码
│  ├─数据源
│  ├─代码生成
│  ├─自助API
│  └─自助大屏(开发中...)
├─系统管理
│  ├─菜单管理
│  ├─组织管理
│  ├─角色管理
│  ├─帐号管理
│  ├─字典管理
│  ├─分类管理
│  ├─日志管理
│  ├─文件管理
│  ├─在线用户
│  ├─应用管理
│  └─数据库
├─租户管理
│  ├─租户配置
│  ├─个人信息
│  ├─租户信息
│  ├─租户组织
│  ├─租户角色
│  ├─租户人员
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
├─图形编辑器
├─引导页
├─关于
└─其他模块 
   └─更多功能开发中...
```

#### 项目截图

<table>
    <tr>
      <td><img src="https://mfish-pic.pages.dev/login.png" alt='login'/></td>
      <td><img src="https://mfish-pic.pages.dev/menu.png" alt='menu'/></td>
    </tr>
    <tr>
      <td><img src="https://mfish-pic.pages.dev/api.png"  alt="api"/></td>
      <td><img src="https://mfish-pic.pages.dev/flow.png" alt="flow" /></td>
    </tr>
    <tr>
      <td><img src="https://mfish-pic.pages.dev/datasource.png" alt='datasource'/></td>
      <td><img src="https://mfish-pic.pages.dev/codebuild.png" alt='codebuild'/></td>
    </tr>
    <tr>
      <td><img src="https://mfish-pic.pages.dev/org.png" alt='org'/></td>
      <td><img src="https://mfish-pic.pages.dev/role.png" alt='role'/></td>
    </tr>
    <tr>
      <td><img src="https://mfish-pic.pages.dev/dict.png" alt='dict'/></td>
      <td><img src="https://mfish-pic.pages.dev/category.png" alt='category'/></td>
    </tr>
    <tr>
      <td><img src="https://mfish-pic.pages.dev/account.png" alt='account'/></td>
      <td><img src="https://mfish-pic.pages.dev/tenant.png" alt='tenant'/></td>
    </tr>
    <tr>
      <td><img src="https://mfish-pic.pages.dev/schedule.png" alt='schedule'/></td>
      <td><img src="https://mfish-pic.pages.dev/monitor.png" alt='monitor'/></td>
    </tr>
    <tr>
      <td><img src="https://mfish-pic.pages.dev/file.png" alt='file'/></td>
      <td><img src="https://mfish-pic.pages.dev/log.png" alt='log'/></td>
    </tr>
</table>

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
