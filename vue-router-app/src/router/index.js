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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/other/:id',
    name:'other',
    component:()=>import('../components/other.vue'),
    props:true
  },
  {
    path: '/404',
    name: 'notfoundpage',
    component:() => import('../components/notfoundpage.vue'),
  },
  {
    path:'*',
    redirect:'/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
