<script setup>
import AuthorForm from '@/js/domains/authors/components/AuthorForm.vue'

const firstName = defineModel('firstName');
const lastName = defineModel('lastName');

const authors = defineModel('authors');
const authorId = defineModel('authorId');
const bookTitle = defineModel('bookTitle');
</script>

<template>
  <div class="main-container">
    <p>
      If your author of choice does not yet exist in the list <span>'choose author'</span>, 
      please submit the author's name first. Thank you.
    </p>
    <div class="forms-container">
      <AuthorForm v-model:firstName="firstName" v-model:lastName="lastName" />
      <form @submit.prevent="submitBook">
        <label for="author">choose author:</label>
        <!-- <input id="author" list="authors">
        <datalist id="authors">
          <option v-for="author in authors">{{ author.name }}</option>
        </datalist> -->
        <select id="author" v-model="authorId">
          <option v-for="author in authors" :value="author.id">{{ author.name }}</option>
        </select>
        <label for="title">booktitle:</label>
        <input id="title" v-model="bookTitle">
        <button type="submit"><slot>submit</slot></button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto;
}

.forms-container {
  display: flex;
}

p {
  color: #505050;
  text-align: center;
  width: 500px;
  margin-bottom: 14px;
}

p span {
  font-style: italic;
}

form {
  display: flex;
  flex-direction: column;
  background-color: #ffcc8a;
  box-shadow: 2px 4px 6px rgba(0, 0, 255, 0.35);
  padding: 20px;
  margin: 0 10px;
}

label {
  color: #555;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

input, select {
  color: #252525;
  background-color: #fff4e9;
  font-family: 'Gentium Book Plus', serif;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #b2b2b2;
  margin-bottom: 10px;
}

input:focus, select:focus {
  outline: 1px solid #7ee1cf;
}

input::placeholder {
  color: #7a7a7a;
}

input::-ms-input-placeholder {
  color: #7a7a7a;
}

button {
  color: #329f96;
  background-color: #fff4e9;
  box-shadow: 2px 4px 6px rgba(49, 49, 129, 0.35);
  text-transform: uppercase;
  text-align: center;
  border-radius: 4px;
  width: fit-content;
  padding: 8px 12px;
}

a {
  color: #329f96;
  margin-left: 20px;
}
</style>