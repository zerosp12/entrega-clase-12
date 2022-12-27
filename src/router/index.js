import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/InicioView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/ver/:id',
    name: 'ver',
    component: () => import('../views/VerArticulolView.vue')
  }
]
const router = new VueRouter({
  routes
})

export default router
