<script setup>
import ReviewForm from '../components/ReviewForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addNewReview, sendPostRequest } from '../store'
import { useRoute } from 'vue-router'

const router = useRouter();

const route = useRoute();
const bookId = parseInt(route.params.id);

const reviewText = ref();

const submitForm = () => {
  const submitReviewText = reviewText.value;
  if (submitReviewText) {
    addNewReview(submitReviewText, bookId);
    sendPostRequest();
    // router.push(`/books/${bookId}/reviews`);
  }
};

const btnText = ref("add");
</script>

<template>
  <ReviewForm 
    v-model:reviewText="reviewText"
    v-model:bookId="bookId"
    @submit="submitForm()" 
  >{{ btnText }}
  </ReviewForm>
</template>