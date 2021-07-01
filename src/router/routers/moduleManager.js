// 配置路由
let ModuleManager = [

  {
    path: '/systemManage',
    name: '创新管理制度',
    component: () => import("@/views/systemManage/index"),
  },
  // {
  //   path: '/publicity_update',
  //   name: '宣传报道-修改',
  //   meta: {
  //     title: '宣传报道-修改',
  //     activeMenu: '/publicity'
  //   },
  //   component: () => import("@/views/publicity/publicity_update"),
  // },
  
]
export default ModuleManager;
