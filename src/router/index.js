import Vue from 'vue'
import VueRouter from 'vue-router'
import ModuleManager from './routers/moduleManager'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    name: '登录',
    component: () => import("../views/login"),
  },
  {
    path: '/',
    name: 'index',
    component: () => import("../views/index"),
    redirect: { path: '/Login'},
    children: [
		...ModuleManager
    ]
  },
	
]


// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// } 

const router = new VueRouter({
  routes
})


export default router
