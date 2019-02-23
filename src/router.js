import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/dashboard.vue'
import Document from './views/document.vue'
import Login from './views/login.vue'
import SuccessPage from './views/success.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/editDocument',
      name: 'document',
      component: Document
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessPage
    }
  ]
})
