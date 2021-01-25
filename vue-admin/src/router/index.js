import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue')
  }
]

const router = new VueRouter({
  routes
});


router.beforeEach((to,from,next)=>{
  console.log(from)
  if (to.path === '/'||store.state.status===1) {
    next()
  } else {
    next("/")
  }
})



export default router
