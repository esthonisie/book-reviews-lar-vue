import { createRouter, createWebHistory } from 'vue-router'
import bookRoutes from '../domains/books'
import authorRoutes from '../domains/authors'

const baseRoutes = [];
const routes = baseRoutes.concat(bookRoutes, authorRoutes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router