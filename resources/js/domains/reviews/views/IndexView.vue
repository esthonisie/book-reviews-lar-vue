<script setup>
import { fetchReviews, getAllReviews } from '../store'
import { useRoute } from 'vue-router'

const route = useRoute();
const bookId = parseInt(route.params.id);
const url = `/api/books/${bookId}/reviews`;

fetchReviews(url);
const showBookData = getAllReviews;
</script>

<template>
  <div><strong>{{ showBookData.title }}</strong></div>
  <div>{{ showBookData.author.name }}</div><br />
  <p>Review(s):</p>
  <ul v-for="review in showBookData.reviews">
    <li>{{ review.body }}</li><br />
  </ul>
</template>