import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/portal'
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('@/components/layout/index.vue'),
      children: [
        {
          path: '/portal',
          name: 'portal',
          component: () => import('@/views/portal/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    }
  ]
})

export default router
