<script setup>
import { fetchAuthors, getAllAuthors } from '../store'

fetchAuthors();
const showAuthors = getAllAuthors;
</script>

<template>
  <ul v-for="(author) in showAuthors">
    <li>{{ author.first_name + ' ' + author.last_name}}</li>
  </ul>
</template>