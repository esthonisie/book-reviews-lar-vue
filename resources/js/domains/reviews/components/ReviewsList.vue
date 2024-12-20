<script setup>
import { summary } from '@/js/domains/books/helpers/summary'

const showBookData = defineModel('reviews');
const isLoaded = defineModel('isloaded');

const getImageUrl = (name) => {
  return new URL(`/public/img/${name}`, import.meta.url).href;
};
</script>

<template>
  <div v-if="isLoaded" class="main-container">
    <div class="book-info-container">
      <p class="title">{{ showBookData.title }}</p>
      <p class="author">{{ showBookData.author?.name }}</p>
      <img :src="getImageUrl(showBookData.cover_img)" class="book-cover" />
      <div class="summary">
        <p>summary:</p>
        <div>{{ summary }}</div>
      </div>
    </div>
    <div class="reviews-container">
      <template v-for="review in showBookData.reviews">
        <div class="review-container">
          <p>somehuman2222 &#x2022; 16 august 2042</p>
          <div>{{ review.body }}</div>
        </div>
      </template>
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

.review-container {
  background-color: #ffcc8a;
  box-shadow: 2px 4px 6px rgba(0, 0, 255, 0.35);
  padding: 20px;
  margin: 0 12px 24px;
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

.summary {
  margin-top: 30px;
}

.summary div {
  color: #252525;
  font-size: 18px;
}

.review-container p,
.summary p {
  color: #555;
  font-size: 14px;
  text-transform: uppercase;
}

.review-container div {
  color: #252525;
  font-family: 'Gentium Book Plus', serif;
}
</style>