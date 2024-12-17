import IndexView from './views/IndexView.vue'
import CreateView from './views/CreateView.vue'

const routes = [
  { 
    path: '/books', 
    component: IndexView 
  },
  { 
    path: '/books/create', 
    component: CreateView 
  },
];

export default routes;