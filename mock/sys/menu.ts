/**
 * @description: 菜单测试接口
 * @author: mfish
 * @date: 2022/11/2 17:48
 */
import { resultSuccess, resultError, getRequestToken, requestParams } from "../_util";
import { MockMethod } from "vite-plugin-mock";

// single
const dashboardRoute = {
  path: "/dashboard",
  name: "Dashboard",
  component: "LAYOUT",
  redirect: "/dashboard/analysis",
  meta: {
    title: "routes.dashboard.dashboard",
    hideChildrenInMenu: true,
    icon: "bx:bx-home"
  },
  children: [
    {
      path: "analysis",
      name: "Analysis",
      component: "/dashboard/analysis/index",
      meta: {
        hideMenu: true,
        hideBreadcrumb: true,
        title: "routes.dashboard.analysis",
        currentActiveMenu: "/dashboard",
        icon: "bx:bx-home"
      }
    },
    {
      path: "workbench",
      name: "Workbench",
      component: "/dashboard/workbench/index",
      meta: {
        hideMenu: true,
        hideBreadcrumb: true,
        title: "routes.dashboard.workbench",
        currentActiveMenu: "/dashboard",
        icon: "bx:bx-home"
      }
    }
  ]
};

const backRoute = {
  path: "back",
  name: "PermissionBackDemo",
  meta: {
    title: "routes.demo.permission.back"
  },

  children: [
    {
      path: "page",
      name: "BackAuthPage",
      component: "/demo/permission/back/index",
      meta: {
        title: "routes.demo.permission.backPage"
      }
    },
    {
      path: "btn",
      name: "BackAuthBtn",
      component: "/demo/permission/back/Btn",
      meta: {
        title: "routes.demo.permission.backBtn"
      }
    }
  ]
};

const authRoute = {
  path: "/permission",
  name: "Permission",
  component: "LAYOUT",
  redirect: "/permission/front/page",
  meta: {
    icon: "carbon:user-role",
    title: "routes.demo.permission.permission"
  },
  children: [backRoute]
};

const levelRoute = {
  path: "/level",
  name: "Level",
  component: "LAYOUT",
  redirect: "/level/menu1/menu1-1",
  meta: {
    icon: "carbon:user-role",
    title: "routes.demo.level.level"
  },

  children: [
    {
      path: "menu1",
      name: "Menu1Demo",
      meta: {
        title: "Menu1"
      },
      children: [
        {
          path: "menu1-1",
          name: "Menu11Demo",
          meta: {
            title: "Menu1-1"
          },
          children: [
            {
              path: "menu1-1-1",
              name: "Menu111Demo",
              component: "/demo/level/Menu111",
              meta: {
                title: "Menu111"
              }
            }
          ]
        },
        {
          path: "menu1-2",
          name: "Menu12Demo",
          component: "/demo/level/Menu12",
          meta: {
            title: "Menu1-2"
          }
        }
      ]
    },
    {
      path: "menu2",
      name: "Menu2Demo",
      component: "/demo/level/Menu2",
      meta: {
        title: "Menu2"
      }
    }
  ]
};

const sysRoute = {
  path: "/system",
  name: "System",
  component: "LAYOUT",
  redirect: "/system/account",
  meta: {
    icon: "ion:settings-outline",
    title: "routes.demo.system.moduleName"
  },
  children: [
    {
      path: "account",
      name: "AccountManagement",
      meta: {
        title: "routes.demo.system.account",
        ignoreKeepAlive: true
      },
      component: "/demo/system/account/index"
    },
    {
      path: "account_detail/:id",
      name: "AccountDetail",
      meta: {
        hideMenu: true,
        title: "routes.demo.system.account_detail",
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: "/system/account"
      },
      component: "/demo/system/account/AccountDetail"
    },
    {
      path: "role",
      name: "RoleManagement",
      meta: {
        title: "routes.demo.system.role",
        ignoreKeepAlive: true
      },
      component: "/demo/system/role/index"
    },

    {
      path: "menu",
      name: "MenuManagement",
      meta: {
        title: "routes.demo.system.menu",
        ignoreKeepAlive: true
      },
      component: "/demo/system/menu/index"
    },
    {
      path: "org",
      name: "DeptManagement",
      meta: {
        title: "routes.demo.system.org",
        ignoreKeepAlive: true
      },
      component: "/demo/system/org/index"
    },
    {
      path: "changePassword",
      name: "ChangePassword",
      meta: {
        title: "routes.demo.system.password",
        ignoreKeepAlive: true
      },
      component: "/demo/system/password/index"
    }
  ]
};

const linkRoute = {
  path: "/link",
  name: "Link",
  component: "LAYOUT",
  meta: {
    icon: "ion:tv-outline",
    title: "routes.demo.iframe.frame"
  },
  children: [
    {
      path: "doc",
      name: "Doc",
      meta: {
        title: "routes.demo.iframe.doc",
        frameSrc: "https://vvbin.cn/doc-next/"
      }
    },
    {
      path: "https://vvbin.cn/doc-next/",
      name: "DocExternal",
      component: "LAYOUT",
      meta: {
        title: "routes.demo.iframe.docExternal"
      }
    }
  ]
};

const menuTree = (() => {
  const result: any[] = [];
  for (let index = 0; index < 3; index++) {
    result.push({
      id: `${index}`,
      menuIcon: ['ion:layers-outline', 'ion:git-compare-outline', 'ion:tv-outline'][index],
      component: 'LAYOUT',
      menuType: '0',
      menuName: ['Dashboard', '权限管理', '功能'][index],
      permissions: '',
      menuSort: index + 1,
      createTime: '@datetime',
      'isVisible|1': ['0', '0', '1'],
      children: (() => {
        const children: any[] = [];
        for (let j = 0; j < 4; j++) {
          children.push({
            id: `${index}-${j}`,
            menuType: '1',
            menuName: ['菜单1', '菜单2', '菜单3', '菜单4'][j],
            menuIcon: 'ion:document',
            permissions: ['menu1:view', 'menu2:add', 'menu3:update', 'menu4:del'][index],
            component: [
              '/dashboard/welcome/index',
              '/dashboard/analysis/index',
              '/dashboard/workbench/index',
              '/dashboard/test/index',
            ][j],
            menuSort: j + 1,
            createTime: '@datetime',
            'isVisible|1': ['0', '1'],
            parentId: `${index}`,
            children: (() => {
              const children: any[] = [];
              for (let k = 0; k < 4; k++) {
                children.push({
                  id: `${index}-${j}-${k}`,
                  menuType: '2',
                  menuName: '按钮' + (j + 1) + '-' + (k + 1),
                  menuIcon: '',
                  permissions:
                    ['menu1:view', 'menu2:add', 'menu3:update', 'menu4:del'][index] +
                    ':btn' +
                    (k + 1),
                  component: [
                    '/dashboard/welcome/index',
                    '/dashboard/analysis/index',
                    '/dashboard/workbench/index',
                    '/dashboard/test/index',
                  ][j],
                  menuSort: j + 1,
                  createTime: '@datetime',
                  'isVisible|1': ['0', '1'],
                  parentId: `${index}-${j}`,
                  children: undefined,
                });
              }
              return children;
            })(),
          });
        }
        return children;
      })(),
    });
  }
  return result;
})();

export default [
  {
    url: "/api/oauth2/menu/route",
    timeout: 1000,
    method: "get",
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) {
        return resultError("Invalid token!");
      }
      // const checkUser = createFakeUserList().find((item) => item.token === token);
      // if (!checkUser) {
      //   return resultError("Invalid user token!");
      // }
      // const id = checkUser.userId;
      const id = "1";
      let menu: Object[];
      switch (id) {
        case "1":
          dashboardRoute.redirect = dashboardRoute.path + "/" + dashboardRoute.children[0].path;
          menu = [dashboardRoute, authRoute, levelRoute, sysRoute, linkRoute];
          break;
        // case "2":
        //   dashboardRoute.redirect = dashboardRoute.path + "/" + dashboardRoute.children[1].path;
        //   menu = [dashboardRoute, authRoute, levelRoute, linkRoute];
        //   break;
        default:
          menu = [];
      }

      return resultSuccess(menu);
    }
  },
  {
    url: '/api/oauth2/menu/tree',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(menuTree);
    },
  },
] as MockMethod[];
