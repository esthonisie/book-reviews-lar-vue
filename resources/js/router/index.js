import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from '../domains/dashboard'
import bookRoutes from '../domains/books'
import reviewRoutes from '../domains/reviews'
// import authorRoutes from '../domains/authors'

const baseRoutes = [];
const routes = baseRoutes.concat(dashboardRoutes, bookRoutes, reviewRoutes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router