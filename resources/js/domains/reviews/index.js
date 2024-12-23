import IndexView from './views/IndexView.vue'
import CreateView from './views/CreateView.vue'
import EditView from './views/EditView.vue'

const routes = [
  { 
    path: '/books/:id/reviews', 
    component: IndexView 
  },
  { 
    path: '/books/:id/reviews/create', 
    component: CreateView 
  },
  { 
    path: '/reviews/edit/:id', 
    component: EditView
  },
];

export default routes;