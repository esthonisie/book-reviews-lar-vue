<script setup>
import { RouterLink } from 'vue-router'

const reviewText = defineModel('reviewText');
const bookId = defineModel('bookId');
</script>

<template>
  <form @submit.prevent="submitForm">
    <label for="body">your review:</label>
    <textarea id="body" name="body" v-model="reviewText"></textarea>
    <div>
      <button type="submit"><slot>submit</slot></button>
      <!-- 
      temp ugly fix of problem first review (after start running server) 
      not showing on page after router.push redirect
      -->
      <RouterLink :to="`/books/${bookId}/reviews`">go back to reviews</RouterLink>
      <!-- temp ugly fix -->
    </div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  background-color: #ffcc8a;
  box-shadow: 2px 4px 6px rgba(0, 0, 255, 0.35);
  padding: 20px;
  width: fit-content;
  margin: 0 auto;
}

label {
  color: #555;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

textarea {
  color: #252525;
  background-color: #fff4e9;
  font-family: 'Gentium Book Plus', serif;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #b2b2b2;
  width: 320px;
  height: 180px;
}

textarea:focus {
  outline: 1px solid #7ee1cf;
}

/* textarea::placeholder {
} */

/* textarea::-ms-input-placeholder {
} */

button {
  color: #329f96;
  background-color: #fff4e9;
  box-shadow: 2px 4px 6px rgba(49, 49, 129, 0.35);
  text-transform: uppercase;
  text-align: center;
  border-radius: 4px;
  width: fit-content;
  padding: 8px 12px;
  margin-top: 10px;
}

a {
  color: #329f96;
  margin-left: 20px;
}
</style>