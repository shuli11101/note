import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/addNew',
      component: () => import('@/views/AddNew.vue')
    },
    {
      path: '/todoItem',
      component: () => import('@/views/TodoItem.vue')
    }
  ]
})

export default router