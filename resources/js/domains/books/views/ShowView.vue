<script setup>
import { provide } from 'vue';
import { useRoute } from 'vue-router'
import BookInfo from '../components/BookInfo.vue'
import { 
  requestGetBook, 
  getBook, 
  checkIsLoaded 
} from '../storeSingleBook'
// for the nested reviews component
import { 
  requestGetReviews, 
  getReviews, 
  requestDeleteReview 
} from '@/js/domains/reviews/store'

const route = useRoute();
const bookId = parseInt(route.params.id);

requestGetBook(bookId);

// for the nested reviews component
provide('reviews', getReviews);
provide('bookId', bookId);
provide('deleteReview', requestDeleteReview);

requestGetReviews(bookId);
</script>

<template>
  <BookInfo 
    :book="getBook"
    :isLoaded="checkIsLoaded"
  />
</template>