import Vue from 'vue'
import VueRouter from 'vue-router'
import userRouterMap from "@/router/user_router"
import local from "@/store/local"

Vue.use(VueRouter)

const constantRouterMap = [
  {
    name: '首页',
    path: '/',
    component: () => import('@/front/Index'),
  },
  {
    name: '登录页',
    path: '/sign',
    component: () => import('@/views/login/Index'),
  },
]

// 初始化路由
function storeRouter(router) {
  if (local.getUserInfo() && local.getToken()) {
    let role = local.getUserInfo().type
    if (role === '00') {
      // 注册用户路由
      router.addRoutes(userRouterMap)
    } else if (role === '01') {
      // 管理员用户路由
      router.addRoutes(userRouterMap)
    }
  }
}

// 创建路由
const createRouter = () => {
  const router = new VueRouter({
    routes: constantRouterMap,
    mode: 'history',
  })
  storeRouter(router)
  return router
}

// 重置路由
export function resetRouter() {
  const newRouter = createRouter()
  storeRouter(newRouter)
  router.matcher = newRouter.matcher
}

const router = createRouter()

export default router
