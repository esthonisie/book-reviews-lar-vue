<script setup>
import ReviewsList from '../components/ReviewsList.vue'
import { sendGetRequest, getAllReviews, checkIsLoaded } from '../store'
import { sendDeleteRequest, removeFromArray } from '../store'
import { useRoute } from 'vue-router'

const deleteReview = (id, index) => { 
  sendDeleteRequest(id);
  removeFromArray(index);
}

const route = useRoute();
const bookId = parseInt(route.params.id);
const url = `/api/books/${bookId}/reviews`;

sendGetRequest(url);
</script>

<template>
  <ReviewsList 
    v-model:reviews="getAllReviews"
    v-model:isloaded="checkIsLoaded"
    v-model:deleteReview="deleteReview"
  />
</template>