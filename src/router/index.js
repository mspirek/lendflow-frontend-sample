import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Organization from '@/views/Organization.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/org/:login/details',
    name: 'Organization',
    component: Organization,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
