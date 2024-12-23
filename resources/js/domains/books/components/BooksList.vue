<script setup>
import { RouterLink } from 'vue-router'

const showBooks = defineModel();
</script>

<template>
  <div  class="main-container">
    <template v-for="book in showBooks" :key="book.id">
    <div class="book-container">
      <p class="title">{{ book.title }}</p>
      <p class="written-by">written by:</p>
      <p class="author">{{ book.author.name }}</p>
      <RouterLink :to="`/books/${book.id}/reviews`">
        &#8594; info &#38; reviews
      </RouterLink>
    </div>
    </template>
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
}

.book-container {
  background-color: #ffcc8a;
  box-shadow: 2px 4px 6px rgba(0, 0, 255, 0.35);
  min-height: 200px;
  padding: 20px;
  margin: 0 12px 24px;
}

.title {
  color: #424242;
  font-size: 18px;
  font-weight: 700;
}

.written-by {
  color: #555;
  font-size: 14px;
}

.author {
  color: #555;
}

a {
  color: #329f96;
  font-size: 14px;
  text-transform: uppercase;
}
</style>