import IndexView from './views/IndexView.vue'
import MainView from './views/MainView.vue'
import BooksView from './views/BooksView.vue'
import AuthorsView from './views/AuthorsView.vue'

const routes = [
  { 
    path: '/dashboard', 
    component: IndexView,
    name: 'dashboard.index',
    children: [
      {
        path: '',
        component: MainView,
        name: 'dashboard.main'
      },
      {
        path: 'books',
        component: BooksView,
        name: 'dashboard.books'
      },
      {
        path: 'authors',
        component: AuthorsView,
        name: 'dashboard.authors'
      },
    ] 
  },
];

export default routes;