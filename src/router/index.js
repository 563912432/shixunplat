import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue'),
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          requiredLogin: true
        },
        component: () => import('../views/Index.vue')
      },
      {
        path: 'video',
        name: 'v-video',
        meta: {
          requiredLogin: true
        },
        component: () => import('../views/Video.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
