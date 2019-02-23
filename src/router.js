import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/dashboard.vue'
import Document from './views/document.vue'
import Login from './views/login.vue'
import SuccessPage from './views/success.vue'
import Store from './store.js'


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
      component: Dashboard,
      beforeEnter: function (to, from, next) {
        if (Store.state.userToken) {
          next()
        } else {
          next('/')
        }
      }
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
