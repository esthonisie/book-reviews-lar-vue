<script setup>
import BooksList from '../components/BooksList.vue'
import { 
  requestGetBooks,
  getBooks,
  getBooksByAuthor,
  checkIsSorted,
  updateIsSorted, 
} from '../storeAllBooks'

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