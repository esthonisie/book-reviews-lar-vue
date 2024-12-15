<script setup>
import { fetchAuthors, getAllAuthors } from '../store'

fetchAuthors();
const showAuthors = getAllAuthors;
</script>

<template>
  <ul v-for="author in showAuthors">
    <li><strong>{{ author.name }}</strong></li>
    <ul v-for="book in author.books">
      <li>{{ book.title }}</li>
    </ul>
  </ul>
</template>