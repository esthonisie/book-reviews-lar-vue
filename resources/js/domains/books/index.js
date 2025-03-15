import IndexView from './views/IndexView.vue'
import CreateView from './views/CreateView.vue'
import EditView from './views/EditView.vue'
import ShowView from './views/ShowView.vue';

const routes = [
  { 
    path: '/books', 
    component: IndexView,
    name: 'books.index', 
  },
  { 
    path: '/books/:id', 
    component: ShowView,
    name: 'book.show', 
  },
  { 
    path: '/books/create', 
    component: CreateView,
    name: 'book.create', 
  },
  { 
    path: '/books/edit/:id', 
    component: EditView,
    name: 'book.edit',
  },
];

export default routes;