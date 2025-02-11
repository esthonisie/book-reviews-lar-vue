import IndexView from './views/IndexView.vue'
import CreateView from './views/CreateView.vue'
import EditView from './views/EditView.vue'
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
  { 
      path: '/books/edit/:id', 
      component: EditView
    },
];

export default routes;