<script setup>
import AuthorsList from '../components/AuthorsList.vue'
import { 
  requestGetAuthors, 
  getAuthors, 
  requestDeletAuthor 
} from '@/js/domains/authors/store'

requestGetAuthors();
</script>

<template>
  <AuthorsList 
    :authors="getAuthors"
    @deleteAuthor="(id) => requestDeletAuthor(id)"
  />
</template>