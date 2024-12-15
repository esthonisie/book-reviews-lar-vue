import { createRouter, createWebHistory } from 'vue-router'
import homepageRoutes from '../domains/homepage'
import bookRoutes from '../domains/books'
import authorRoutes from '../domains/authors'
import reviewRoutes from '../domains/reviews'

const baseRoutes = [];
const routes = baseRoutes.concat(homepageRoutes, bookRoutes, authorRoutes, reviewRoutes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router