import CreateView from './views/CreateView.vue'
import EditView from './views/EditView.vue'

const routes = [
  { 
    path: '/books/:id/reviews/create', 
    component: CreateView,
    name: 'review.create', 
  },
  { 
    path: '/reviews/edit/:id', 
    component: EditView,
    name: 'review.edit',
  },
];

export default routes;