<script setup>
import ReviewsList from '../components/ReviewsList.vue'
import { sendGetRequest, getAllReviews, checkIsLoaded } from '../store'
import { sendDeleteRequest } from '../store'
import { useRoute } from 'vue-router'

const route = useRoute();
const bookId = parseInt(route.params.id);

sendGetRequest(bookId);
</script>

<template>
  <ReviewsList 
    :reviews="getAllReviews"
    :isloaded="checkIsLoaded"
    @deleteReview="(id) => sendDeleteRequest(id)"
  />
</template>