import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/calprice',
    name: 'Calprice',
    component: () => import('./views/CalPrice.vue')
  },
  {
    path: '/register_user',
    name: 'Register',
    component: () => import('./views/RegisterUser.vue')
  },
  {
    path: '/register_riders',
    name: 'Register',
    component: () => import('./views/RegisterRiders.vue')
  },
  {
    path: '/register_van',
    name: 'Register',
    component: () => import('./views/RegisterVan.vue')
  },
  {
    path: '/login_user',
    name: 'Login',
    component: () => import('./views/LoginUser.vue')
  },
  {
    path: '/login_riders',
    name: 'Login',
    component: () => import('./views/LoginRiders.vue')
  },
  {
    path: '/login_van',
    name: 'Login',
    component: () => import('./views/LoginVan.vue')
  },
  {
    path: '/googlemap',
    name: 'googlemap',
    component: () => import('./views/GoogleMap.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router