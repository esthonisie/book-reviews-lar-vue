<script setup>
import ReviewForm from '../components/ReviewForm.vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { requestPostReview } from '../store'

const router = useRouter();

const route = useRoute();
const bookId = parseInt(route.params.id);

const reviewText = ref();

const submitForm = async () => {
  const submitReviewText = reviewText.value;
  if (submitReviewText) {
    await requestPostReview(submitReviewText, bookId);
    router.back();
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