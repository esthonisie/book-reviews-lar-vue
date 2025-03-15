<script setup>
import BooksListBlock from './BooksListBlock.vue'

defineProps({
  books: Array,
  booksByAuthor: Array,
  checkIsSorted: Boolean,
});

const emit = defineEmits(['updateIsSorted']);
</script>

<template>
  <div  class="main-container">
    <div class="sortby-container">
      <p class="title">sort by:</p>
      <div class="button-container">
        <button @click="emit('updateIsSorted', false)"
          :class="checkIsSorted ? 'btn-inactive' : 'btn-active'"
          id="btn-title">title
        </button>
        <button @click="emit('updateIsSorted', true)" 
          :class="checkIsSorted ? 'btn-active' : 'btn-inactive'"
          id="btn-author">author
        </button>
      </div>
    </div>
    <template v-if="checkIsSorted">
      <BooksListBlock :books="booksByAuthor" />
    </template>
    <template v-else>
      <BooksListBlock :books="books" />
    </template>
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
}

.sortby-container {
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
  padding: 8px 12px;
  margin-top: 10px;
}

#btn-title {
  width: 65px;
}

#btn-author {
  width: 90px;
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
</style>