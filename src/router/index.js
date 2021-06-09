import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { //首页信息
    path: '/homePage',
    name: 'homePage',
    component: () => import('../views/homeComponents/index.vue')
  },
  { //资讯中心
    path: '/newsList',
    name: 'newsList',
    component: () => import('../views/newsComponents/index.vue')
  },
  { //资讯中心
    path: '/cooperationCases/:id',
    name: 'cooperationCases',
    component: () => import('../views/cooperationCases/index.vue')
  },
  { //关于我们
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import('../views/aboutUs/index.vue')
  },
  { //捐赠我们
    path: '/donateToUs',
    name: 'donateToUs',
    component: () => import('../views/donateToUs/index.vue')
  },
  { //捐赠我们
    path: '/loginOregs',
    name: 'loginOregs',
    component: () => import('../views/loginOregs/index.vue')
  },
  { //路由重定向
    path: '/',
    redirect: '/homePage',
  },
]

const router = new VueRouter({
  routes
})

export default router
