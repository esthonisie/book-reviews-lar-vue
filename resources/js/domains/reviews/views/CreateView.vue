<script setup>
import ReviewForm from '../components/ReviewForm.vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { requestPostReview } from '../store'

const router = useRouter();

const route = useRoute();
const bookId = parseInt(route.params.id);

const reviewText = ref();

const submitForm = () => {
  const submitReviewText = reviewText.value;
  if (submitReviewText) {
    requestPostReview(submitReviewText, bookId);
    setTimeout(() => {
      router.push(`/books/${bookId}`);
    }, 100);
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