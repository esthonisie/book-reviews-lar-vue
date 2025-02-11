<script setup>
import BookTitlesList from '../components/BookTitlesList.vue'
import { requestGetBooks, getBooksByAuthor } from '@/js/domains/books/store'

requestGetBooks();
</script>

<template>
  <BookTitlesList 
    :books="getBooksByAuthor"
  />
</template>