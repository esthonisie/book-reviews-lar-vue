import EditView from './views/EditView.vue'

const routes = [
  { 
    path: '/authors/edit/:id', 
    component: EditView,
    name: 'author.edit',
  },
];

export default routes;