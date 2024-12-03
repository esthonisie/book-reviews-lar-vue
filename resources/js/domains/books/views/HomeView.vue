<script setup>
import { fetchBooks, getAllBooks } from './store'

fetchBooks();
const showBooks = getAllBooks;
</script>

<template>
  <ul v-for="(book) in showBooks">
    <li>{{ book.title }}</li>
  </ul>
</template>