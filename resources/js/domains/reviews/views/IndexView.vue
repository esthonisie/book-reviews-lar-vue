<script setup>
import ReviewsList from '../components/ReviewsList.vue'
import { fetchReviews, getAllReviews, checkIsLoaded } from '../store'
import { useRoute } from 'vue-router'

const route = useRoute();
const bookId = parseInt(route.params.id);
const url = `/api/books/${bookId}/reviews`;

fetchReviews(url);
</script>

<template>
  <ReviewsList 
    v-model:reviews="getAllReviews"
    v-model:isloaded="checkIsLoaded"
  />
</template>