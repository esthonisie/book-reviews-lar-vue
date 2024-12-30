import IndexView from './views/IndexView.vue'
import CreateView from './views/CreateView.vue'
import ShowView from './views/ShowView.vue';

const routes = [
  { 
    path: '/books', 
    component: IndexView 
  },
  { 
    path: '/books/:id', 
    component: ShowView 
  },
  { 
    path: '/books/create', 
    component: CreateView 
  },
];

export default routes;