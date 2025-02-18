<script setup>
import { RouterLink } from 'vue-router';

const authors = defineModel('authors');

const emit = defineEmits(['deleteAuthor'])
</script>

<template>
  <div class="all-authors-container">
    <div class="title-bar">
      <p>Authors:</p>
      <p>TODO - Books in Database: ascending btn / descending btn</p>
    </div>
    <template v-for="author in authors" :key="author.id">
    <div class="author-all-info-container">
      <div class="author-container">
        <p class="author-name">{{ author.name }}</p>
        <div class="links-container">
          <RouterLink :to="`/authors/edit/${author.id}`">edit</RouterLink>
          <p @click="emit('deleteAuthor', author.id)" class="delete-link">x</p>
        </div>
      </div>
      <div class="database-container">
        <p>1</p>
      </div>
    </div>
    </template>
  </div>
</template>

<style scoped>
  .all-authors-container {
    display: flex;
    flex-direction: column;
  }

  .title-bar {
    display: flex;
    justify-content: space-between;
    color: #7a7a7a;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .title-bar p {
    background-color: #fff4e9;
    padding: 8px 20px 10px;
  }
 
  .author-all-info-container {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 700;
  }

  .author-container,
  .database-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffcc8a;
    box-shadow: 2px 4px 6px rgba(0, 0, 255, 0.3);
    padding: 8px 20px 10px;
    margin-bottom: 10px;
  }

  .author-container {
    justify-content: space-between;
    width: 100%;
  }

  .author-container:hover {
    background-color: #ffbf6a;
    box-shadow: 2px 4px 6px rgba(0, 0, 255, 0.4);
    padding: 8px 20px 10px;
  }

  .author-name {
    color: #424242;
    margin-right: 40px;
  }

  .links-container {
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

  .database-container {
    justify-content: center;
    color: #424242;
    width: 90px;
    margin-left: 40px;
  }
</style>