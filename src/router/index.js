import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home'
import User from '@/views/User/User'
import Note from '@/views/Note/Note'
import Shopping from '@/views/Shopping/Shopping'
import Search from '@/views/Search'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/note',
    component: Note
  },
  {
    path: '/shopping',
    component: Shopping
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
