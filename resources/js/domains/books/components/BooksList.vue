<script setup>
import { RouterLink } from 'vue-router'

const books = defineModel('books');
const booksByAuthor = defineModel('booksByAuthor');
const checkIsSorted = defineModel('checkIsSorted');
const emit = defineEmits(['updateIsSorted']);
</script>

<template>
  <div  class="main-container">
    <div class="book-container">
      <p class="title">sort by:</p>
      <div class="button-container">
        <button @click="emit('updateIsSorted', false)"
          :class="checkIsSorted ? 'btn-inactive' : 'btn-active'">title
        </button>
        <button @click="emit('updateIsSorted', true)" 
          :class="checkIsSorted ? 'btn-active' : 'btn-inactive'">author
        </button>
      </div>
    </div>
    <template v-if="checkIsSorted">
    <template v-for="book in booksByAuthor" :key="book.id">
    <div class="book-container">
      <p class="title">{{ book.title }}</p>
      <p class="written-by">written by:</p>
      <p class="author">{{ book.author.name }}</p>
      <RouterLink :to="`/books/${book.id}`">
        &#8594; info &#38; reviews
      </RouterLink>
    </div>
    </template>
    </template>
    <template v-else>
    <template v-for="book in books" :key="book.id">
    <div class="book-container">
      <p class="title">{{ book.title }}</p>
      <p class="written-by">written by:</p>
      <p class="author">{{ book.author.name }}</p>
      <RouterLink :to="`/books/${book.id}`">
        &#8594; info &#38; reviews
      </RouterLink>
    </div>
    </template>
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

.button-container {
  display: flex;
  flex-direction: column;
}

button {
  color: #329f96;
  background-color: #fff4e9;
  text-transform: uppercase;
  text-align: center;
  border-radius: 4px;
  width: fit-content;
  padding: 8px 12px;
  margin-top: 10px;
}

.btn-active {
  box-shadow: 2px 4px 6px rgba(49, 49, 129, 0.35);
}

.btn-inactive {
  opacity: 0.6;
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