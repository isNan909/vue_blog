import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import faq from '@/components/faq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/faq',
      name: 'Faq',
      component: faq
    }
  ]
})
