<script setup>
import { RouterLink } from 'vue-router'

const books = defineModel('books');
</script>

<template>
  <template v-for="book in books" :key="book.id">
  <div class="book-container">
    <div>
      <p class="title">{{ book.title }}</p>
      <p class="written-by">written by:</p>
      <p class="author">{{ book.author.name }}</p>
      <RouterLink :to="`/books/${book.id}`">
        &#8594; info &#38; reviews
      </RouterLink>
    </div>
    <!-- <div>edit | delete</div> -->
  </div>
  </template>
</template>

<style scoped>
.book-container {
  display: flex;
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