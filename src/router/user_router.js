const userRouterMap = [
  {
    name: '注册用户页',
    path: '/index',
    redirect: '/user',
    component: () => import('@/views/Index'),
    children: [
      {
        name: '云盘操作页',
        path: '/user',
        component: () => import('@/views/drive/Index'),
      },
      {
        name: '文件夹操作页（通过文件夹id选择）',
        path: 'folder/:id',
        component: () => import('@/views/drive/Index'),
      },
    ]
  }
]

export default userRouterMap
