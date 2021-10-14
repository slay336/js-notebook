import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Notes',
    component: () => import("../views/Notes.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router
