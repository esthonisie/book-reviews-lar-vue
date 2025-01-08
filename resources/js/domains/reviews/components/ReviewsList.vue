<script setup>
import { inject } from 'vue'

// data
const bookId = inject('bookId');
const reviews = inject('reviews');

// functions
const deleteReview = inject('deleteReview');
</script>

<template>
  <div class="review-container add-review-container">
    <p v-if="reviews.length === 0">
      There seem to be no reviews yet.<br />
      Would you like to share your thoughts about this book?<br />
      &#8594; Leave a review <RouterLink :to="`/books/${bookId}/reviews/create`">here</RouterLink>
    </p>
    <p v-else>
      Would you also like to share your thoughts about this book?<br />
      &#8594; Leave a review <RouterLink :to="`/books/${bookId}/reviews/create`">here</RouterLink>
    </p>
  </div>
  <template v-for="(review) in reviews" :key="review.id">
  <div class="review-container">
    <div class="review-header-container">
      <p>somehuman2222 &#x2022; 16 august 2042</p>
      <div class="review-links-container">
        <RouterLink 
          :to="`/reviews/edit/${review.id}`" 
          class="edit-review-link">edit
        </RouterLink>
        <p>|</p>
        <p @click="deleteReview(review.id)" class="delete-review-link">delete</p>
      </div>
    </div>
    <div class="review-body">{{ review.body }}</div>
  </div>
  </template>  
</template>

<style scoped>
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