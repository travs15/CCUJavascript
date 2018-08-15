import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'
import About from './components/About.vue'
import mapa from './components/mapa.vue'
import Conclusion from './components/Conclusion.vue'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path:'/about',
      name: 'about',
      component: About
    },
    {
      path:'/mapa',
      name: 'mapa',
      component: mapa
    },
    {
      path:'/conclusion',
      name: 'conclusion',
      component: Conclusion
    }
  ]
})
