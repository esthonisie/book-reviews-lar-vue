<script setup>
import ReviewForm from '../components/ReviewForm.vue'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { requestUpdateReview, requestGetReview, getReview } from '../store'

const router = useRouter();

const route = useRoute();
const reviewId = parseInt(route.params.id);

const reviewText = ref();

onMounted(async () => {
  await requestGetReview(reviewId);
  const review = Object.assign({}, getReview.value);
  reviewText.value = review.body;
});

const submitForm = async () => {
  if (reviewText.value) {
    await requestUpdateReview(reviewText.value, reviewId);
    router.back();
  }
};

const btnText = "edit";
</script>

<template>
  <ReviewForm 
    v-model:reviewText="reviewText"
    @submit="submitForm()" 
  >{{ btnText }}
  </ReviewForm>
</template>