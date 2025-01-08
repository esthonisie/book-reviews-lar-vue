<script setup>
import BookInfo from '../components/BookInfo.vue'
import { provide } from 'vue'
import { useRoute } from 'vue-router'
import { checkIsLoaded, updateIsLoaded } from '@/js/helpers/loader'
import { requestGetBook, getBook } from '../store'
import { 
  requestGetReviews, 
  getReviews, 
  requestDeleteReview,
} from '@/js/domains/reviews/store'

const route = useRoute();
const bookId = parseInt(route.params.id);

const requestAllData = async (bookId) => {
  updateIsLoaded(false);
  await Promise.all([requestGetBook(bookId), requestGetReviews(bookId)]);
  updateIsLoaded(true);
};

requestAllData(bookId);

// for the nested reviews component
provide('bookId', bookId);
provide('reviews', getReviews);
provide('deleteReview', requestDeleteReview);
</script>

<template>
  <BookInfo 
    :isLoaded="checkIsLoaded"
    :book="getBook"
  />
</template>