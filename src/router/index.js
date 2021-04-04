import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const constantRouterMap = [
    {
        name: '首页',
        path: '/',
        component: () => import('@/front/Index')
    },
    {
        name: '登录页',
        path: '/sign',
        component: () => import('@/views/login/Index'),
    },
]

// 创建路由
const createRouter = () => new VueRouter({
    routes: constantRouterMap,
    mode: 'history'
})

// 重置路由
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

const router = createRouter()

export default router
