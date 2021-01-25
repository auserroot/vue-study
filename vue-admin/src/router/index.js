import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/index',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
  }
]

const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
});

//全局守卫
router.beforeEach((to,from,next)=>{
  // console.log(from)
  // console.log(store)
  // console.log(to)
  if (store.state.status === 1||to.path === '/') {
    next()
  } else {
    next("/")
  }
})



export default router
