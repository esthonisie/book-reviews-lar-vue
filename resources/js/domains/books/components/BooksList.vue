<script setup>
import { RouterLink } from 'vue-router'

const showBooks = defineModel();
</script>

<template>
  <div v-for="(book) in showBooks">
    <p><strong>{{ book.title }}</strong></p>
    <p>{{ book.author.name }}</p>
    <RouterLink :to="`/books/${book.id}/reviews`">show reviews</RouterLink>
    <br /><br />
  </div>
</template>