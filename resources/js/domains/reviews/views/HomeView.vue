<script setup>
import { fetchBooks, getAllBooks } from '../../books/store'

fetchBooks();
const showReviews = getAllBooks;
</script>

<template>
  <ul v-for="data in showReviews">
    <li><strong>{{ data.title }}</strong></li>
    <ul v-for="review in data.reviews">
      <li>{{ review.body }}</li><br />
    </ul>
  </ul>
</template>