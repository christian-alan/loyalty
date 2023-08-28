import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AuthGuard from '../functions/patronAuthentication.function';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        requiresAuth: true,
        enterClass:'animate__animated animate__slideInUp',
      }
    },
    {
      path: '/:id/:status',
      name: 'coupon',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CouponDescriptionView.vue'),
      meta:{
        requiresAuth: true,
        enterClass:'animate__animated animate__slideInUp',
        
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/registerBusiness',
      name: 'registerBusiness',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/RegisterBusinessView.vue')
    }
  ]
});

router.beforeEach(AuthGuard.authGuard);

export default router
