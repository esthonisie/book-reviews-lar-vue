<script setup>
import ReviewsList from '../components/ReviewsList.vue'
import { fetchReviews, getAllReviews } from '../store'
import { useRoute } from 'vue-router'

const route = useRoute();
const bookId = parseInt(route.params.id);
const url = `/api/books/${bookId}/reviews`;

fetchReviews(url);
</script>

<template>
  <ReviewsList v-model="getAllReviews" />
</template>