import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PageButton',
    name: 'PageButton',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageButton.vue')
  },
  {
    path: '/PageDivider',
    name: 'PageDivider',
    component: () => import(/* webpackChunkName: "about" */ '../views/PageDivider.vue')
  },
  {
    path: '/PageSlider',
    name: 'PageSlider',
    component: () => import(/* webpackChunkName: "about" */ '../views/PageSlider.vue')
  },
  {
    path: '/PageHeadline',
    name: 'PageHeadline',
    component: () => import(/* webpackChunkName: "about" */ '../views/PageHeadline.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
