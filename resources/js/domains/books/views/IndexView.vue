<script setup>
import BooksList from '../components/BooksList.vue'
import { 
  requestGetBooks,
  getBooks,
  getBooksByAuthor,
  checkIsSorted,
  updateIsSorted, 
} from '../store'

requestGetBooks();
</script>

<template>
  <BooksList 
    :books="getBooks"
    :booksByAuthor="getBooksByAuthor"
    :checkIsSorted="checkIsSorted"
    @updateIsSorted="(boolean) => updateIsSorted(boolean)"
  />
</template>