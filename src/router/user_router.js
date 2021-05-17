const userRouterMap = [
  {
    name: 'index',
    path: '/index',
    redirect: '/drive',
    component: () => import('@/views/Index'),
    children: [
      {
        name: 'drive',
        path: '/drive',
        component: () => import('@/views/drive/Index'),
      },
      {
        name: 'folder',
        path: '/folder/:id?',
        component: () => import('@/views/folder/Index'),
      },
      {
        name: 'starred',
        path: '/starred',
        component: () => import('@/views/starred/Index'),
      },
      {
        name: 'recyclebin',
        path: '/recyclebin',
        component: () => import('@/views/recyclebin/Index'),
      },
    ]
  }
]

export default userRouterMap
