<script setup>
import BooksList from '../components/BooksList.vue'
import { 
  requestGetBooksByTitle,
  requestGetBooksByAuthor,
  getBooksValueByTitle,
  getBooksValueByAuthor,
  checkIsSorted,
  updateIsSorted, 
} from '../store'

requestGetBooksByTitle();
requestGetBooksByAuthor();
</script>

<template>
  <BooksList 
    :booksSortedByTitle="getBooksValueByTitle"
    :booksSortedByAuthor="getBooksValueByAuthor"
    :checkIsSorted="checkIsSorted"
    @updateIsSorted="(boolean) => updateIsSorted(boolean)"
  />
</template>