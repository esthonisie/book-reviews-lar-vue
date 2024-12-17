<script setup>
import { fetchAuthors, getAllAuthors } from '../store'
import { RouterLink } from 'vue-router'

fetchAuthors();
const showAuthors = getAllAuthors;
</script>

<template>
  <div v-for="author in showAuthors">
    <p><strong>{{ author.name }}</strong></p>
    <div v-for="book in author.books">
      <p>{{ book.title }}</p>
      <RouterLink :to="`/books/${book.id}/reviews`">show reviews</RouterLink>
    </div>
    <br />
  </div>
</template>