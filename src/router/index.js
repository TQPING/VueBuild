import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Toggle from '@/components/Toggle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/Home',
      name: 'Home',
      component: Home
    },{
      path: '/Toggle',
      name: 'Toggle',
      component: Toggle
    }
  ]
})
