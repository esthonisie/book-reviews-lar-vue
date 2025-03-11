<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router';

//data
const authors = defineModel('authors');

// functions
const deleteAuthor = inject('deleteAuthor');
</script>

<template>
  <template v-for="author in authors" :key="author.id">
  <div class="single-row">
    <div class="author-box">
      <p class="author-name">{{ author.name }}</p>
      <div class="links-box">
        <RouterLink :to="`/authors/edit/${author.id}`">edit</RouterLink>
        <p @click="deleteAuthor(author.id)" class="delete-link">x</p>
      </div>
    </div>
    <div class="database-box">
      <p>{{ author.books_count }}</p>
    </div>
  </div>
  </template>
</template>

<style scoped>
  .single-row {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 700;
  }

  .author-box,
  .database-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffcc8a;
    box-shadow: 2px 4px 6px rgba(0, 0, 255, 0.3);
    padding: 8px 20px 10px;
    margin-bottom: 10px;
  }

  .author-box {
    justify-content: space-between;
    width: 100%;
  }

  .author-box:hover {
    background-color: #ffbf6a;
    box-shadow: 2px 4px 6px rgba(0, 0, 255, 0.4);
    padding: 8px 20px 10px;
  }

  .author-name {
    color: #424242;
    margin-right: 40px;
  }

  .links-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 140px;
  }

  a {
    color: #329f96;
    font-size: 14px;
    text-transform: uppercase;
  }

  .delete-link {
    color: #e46464;
    font-size: 20px;
    margin-top: -4px;
    cursor: pointer;
  }

  .database-box {
    justify-content: center;
    color: #424242;
    width: 90px;
    margin-left: 40px;
  }
</style>