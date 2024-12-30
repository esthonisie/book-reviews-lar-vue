<script setup>
import { provide } from 'vue';
import { useRoute } from 'vue-router'
import BookInfo from '../components/BookInfo.vue'
import { 
  requestGetBook, 
  getBookValue, 
  checkIsLoaded 
} from '../store'
// for the nested reviews component
import { 
  requestGetReviews, 
  getReviewsValue, 
  requestDeleteReview 
} from '@/js/domains/reviews/store'

const route = useRoute();
const bookId = parseInt(route.params.id);

requestGetBook(bookId);

// for the nested reviews component
provide('reviews', getReviewsValue);
provide('bookId', bookId);
provide('deleteReview', requestDeleteReview);

requestGetReviews(bookId);
</script>

<template>
  <BookInfo 
    :book="getBookValue"
    :isLoaded="checkIsLoaded"
  />
</template>