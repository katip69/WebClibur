// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './Views/Home.vue';
import Empleo from './Views/Empleo.vue'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Empleo',
    name:'Empleo',
    component:Empleo
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
