import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from '../domains/dashboard'
import bookRoutes from '../domains/books'
import authorRoutes from '../domains/authors'
import reviewRoutes from '../domains/reviews'

const baseRoutes = [];
const routes = baseRoutes.concat(dashboardRoutes, bookRoutes, authorRoutes, reviewRoutes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router