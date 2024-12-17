<script setup>
import AuthorsList from '../components/AuthorsList.vue'
import { fetchAuthors, getAllAuthors } from '../store'

fetchAuthors();
</script>

<template>
  <AuthorsList v-model="getAllAuthors" />
</template>