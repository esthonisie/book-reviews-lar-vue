<script setup>
import AuthorsList from '../components/AuthorsList.vue'
import { provide } from 'vue'
import { 
  requestGetAuthors, 
  getAuthors, 
  getAuthorsByQuantityDesc,
  checkIsSorted,
  updateIsSorted,
  requestDeleteAuthor 
} from '@/js/domains/authors/store'

requestGetAuthors();

// for the nested AuthorsListBlock component
provide('deleteAuthor', requestDeleteAuthor);
</script>

<template>
  <AuthorsList 
    :authors="getAuthors"
    :authorsByQuantityDesc="getAuthorsByQuantityDesc"
    :checkIsSorted="checkIsSorted"
    @updateIsSorted="(boolean) => updateIsSorted(boolean)"
  />
</template>