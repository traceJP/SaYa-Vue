export const userRouterMap = [
    {
        name: '注册用户页',
        path: '/index',
        redirect: '/drive',
        component: () => import('@/views/Index'),
        children: [
            {
                name: '云盘页',
                path: '/drive',
                component: () => import('@/views/drive/Index')
            },
        ]
    }
]



