<script setup>
import { RouterLink } from 'vue-router'
import { summary } from '@/js/domains/books/helpers/summary'

const showBookData = defineModel('reviews');
const isLoaded = defineModel('isloaded');
const deleteReview = defineModel('deleteReview');

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
      <div class="summary-container">
        <p>summary:</p>
        <div>{{ summary }}</div>
      </div>
    </div>
    <div>
      <div class="review-container add-review-container">
        <p v-if="showBookData.reviews.length === 0">
          There seem to be no reviews yet.<br />
          Would you like to share your thoughts about this book?<br />
          &#8594; Leave a review <RouterLink :to="`/books/${showBookData.id}/reviews/create`">here</RouterLink>
        </p>
        <p v-else>
          Would you also like to share your thoughts about this book?<br />
          &#8594; Leave a review <RouterLink :to="`/books/${showBookData.id}/reviews/create`">here</RouterLink>
        </p>
      </div>
      <template v-for="(review, index) in showBookData.reviews" :key="review.id">
        <div class="review-container">
          <div class="review-header-container">
            <p>somehuman2222 &#x2022; 16 august 2042</p>
            <div class="review-links-container">
              <RouterLink 
                :to="`/reviews/edit/${review.id}`" 
                class="edit-review-link">edit
              </RouterLink>
              <p>|</p>
              <p @click="deleteReview(review.id, index)" class="delete-review-link">delete</p>
            </div>
          </div>
          <div class="review-body">{{ review.body }}</div>
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

/* -------------- */

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

/* -------------- */

.review-container {
  background-color: #ffcc8a;
  box-shadow: 2px 4px 6px rgba(0, 0, 255, 0.35);
  padding: 20px;
  margin: 0 12px 24px;
}

.review-header-container,
.add-review-container {
  color: #555;
  font-size: 14px;
  text-transform: uppercase;
}

.add-review-container a,
.edit-review-link {
  color: #329f96;
}

.delete-review-link {
  color: #e46464;
  cursor: pointer;
}

.review-header-container,
.review-links-container {
  display: flex;
}

.review-links-container {
  justify-content: space-between;
  width: 100px;
  margin-left: 40px;
}

.review-body {
  color: #252525;
  font-family: 'Gentium Book Plus', serif;
}
</style>