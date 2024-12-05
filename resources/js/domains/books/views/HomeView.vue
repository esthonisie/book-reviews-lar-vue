<script setup>
import { fetchBooks, getAllBooks } from '../store'

fetchBooks();
const showBooks = getAllBooks;
</script>

<template>
  <ul v-for="(book) in showBooks">
    <li>{{ book.title }}</li>
    <li>{{ book.author.first_name + ' ' + book.author.last_name}}</li>
  </ul>
</template>