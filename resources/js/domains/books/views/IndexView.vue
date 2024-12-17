<script setup>
import BooksList from '../components/BooksList.vue'
import { fetchBooks, getAllBooks } from '../store'

fetchBooks();
</script>

<template>
  <BooksList v-model="getAllBooks" />
</template>