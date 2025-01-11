<script setup>
import BooksList from '../components/BooksList.vue'
import { provide } from 'vue'
import { 
  requestGetBooks,
  requestDeleteBook,
  getBooks,
  getBooksByAuthor,
  checkIsSorted,
  updateIsSorted, 
} from '../store'

requestGetBooks();

// for the nested BooksListBlock component
provide('deleteBook', requestDeleteBook);
</script>

<template>
  <BooksList 
    :books="getBooks"
    :booksByAuthor="getBooksByAuthor"
    :checkIsSorted="checkIsSorted"
    @updateIsSorted="(boolean) => updateIsSorted(boolean)"
  />
</template>