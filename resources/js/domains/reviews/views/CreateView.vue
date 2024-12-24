<script setup>
import ReviewForm from '../components/ReviewForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { sendPostRequest } from '../store'
import { useRoute } from 'vue-router'

const router = useRouter();

const route = useRoute();
const bookId = parseInt(route.params.id);

const reviewText = ref();

const submitForm = () => {
  const submitReviewText = reviewText.value;
  if (submitReviewText) {
    sendPostRequest(submitReviewText, bookId);
    router.push(`/books/${bookId}/reviews`);
  }
};

const btnText = "add";
</script>

<template>
  <ReviewForm 
    v-model:reviewText="reviewText"
    @submit="submitForm()" 
  >{{ btnText }}
  </ReviewForm>
</template>