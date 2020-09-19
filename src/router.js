import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/monster_slayer', 
        name: 'Monster Slayer',
        component: () => import('./components/monster_slayer/App.vue')
    },
    { 
        path: '/server_components', 
        name: 'Server Components',
        component: () => import('./components/server_components/src/App.vue')
    }
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;
