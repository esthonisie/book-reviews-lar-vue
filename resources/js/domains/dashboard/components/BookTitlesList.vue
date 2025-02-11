<script setup>
import { RouterLink } from 'vue-router';

const books = defineModel('books');
</script>

<template>
  <div class="all-titles-container">
    <template v-for="book in books" :key="book.id">
      <RouterLink :to="`/books/edit/${book.id}`" class="title-container">
        <p class="title">{{ book.title }}</p>
        <p class="author">{{ book.author.name }}</p>
      </RouterLink>
    </template>
  </div>
</template>

<style scoped>
  .all-titles-container {
    display: flex;
    flex-direction: column;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    background-color: #ffcc8a;
    box-shadow: 2px 4px 6px rgba(0, 0, 255, 0.3);
    padding: 8px 20px 10px;
    margin-bottom: 10px;
  }

  .title-container:hover {
    background-color: #ffbf6a;
    box-shadow: 2px 4px 6px rgba(0, 0, 255, 0.4);
    padding: 8px 20px 10px;
  }

  .title {
    color: #424242;
    font-weight: 700;
    margin-right: 40px;
  }

  .author {
    color: #636363;
  }
</style>