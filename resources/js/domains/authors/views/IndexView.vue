<script setup>
import BooksList from '@/js/domains/books/components/BooksList.vue'
import { fetchAuthors, getAllAuthors } from '../store'

fetchAuthors();
</script>

<template>
  <BooksList v-model="getAllAuthors" />
</template>