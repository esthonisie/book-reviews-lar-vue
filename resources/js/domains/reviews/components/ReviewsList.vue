<script setup>
const showBookData = defineModel();
</script>

<template>
  <div><strong>{{ showBookData.title }}</strong></div>
  <div>{{ showBookData.author?.name }}</div><br />
  <p>Review(s):</p>
  <ul v-for="review in showBookData.reviews">
    <li class="review">{{ review.body }}</li><br />
  </ul>
</template>

<style scoped>
</style>