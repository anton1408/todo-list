import Vue from 'vue'
import VueRouter from 'vue-router'

// Layouts
import LayoutMain from '@/layout/LayoutMain'

Vue.use(VueRouter)

// const ifAuthenticated = (to, from, next) => {
//   console.log('ifAuthenticated')
// }

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [{
    path: '/',
    component: LayoutMain,
    // beforeEnter: ifAuthenticated,
    children: [{
      path: '',
      component: () => import('@/views/Home')
    }]
  }]
})

export default router
