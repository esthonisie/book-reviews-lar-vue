<script setup>
import ReviewsList from '@/js/domains/reviews/components/ReviewsList.vue'
import { summary } from './summaryText'

defineProps({
  book: Object,
  isLoaded: Boolean,
});
</script>

<template>
  <div v-if="isLoaded" class="main-container">
    <div class="book-info-container">
      <p class="title">{{ book.title }}</p>
      <p class="author">{{ book.author?.name }}</p>
      <img :src="`/img/${book?.cover_img}`" class="book-cover" />
      <div class="summary-container">
        <p>summary:</p>
        <div>{{ summary }}</div>
      </div>
    </div>
    <div>
      <ReviewsList />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 2fr 5fr;
  width: 100%;
}

.book-info-container {
  background-color: #fff4e9;
  height: fit-content;
  padding: 20px 20px 26px;
  margin-left: 12px;
}

.title {
  color: #424242;
  font-size: 22px;
  font-weight: 700;
}

.author {
  color: #555;
  font-size: 18px;
  text-transform: uppercase;
  border-bottom: 1px solid #555;
  padding-bottom: 4px;
}

.book-cover {
  margin-top: 20px;
  margin-left: -4px;
}

.summary-container {
  margin-top: 30px;
}

.summary-container p {
  color: #555;
  font-size: 14px;
  text-transform: uppercase;
}

.summary-container div {
  color: #252525;
  font-size: 18px;
}
</style>