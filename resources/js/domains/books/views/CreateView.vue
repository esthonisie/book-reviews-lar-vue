<script setup>
import BookForm from '../components/BookForm.vue'
import { ref, provide } from 'vue'
import { useRouter } from 'vue-router'
import { 
  requestGetAuthors, 
  requestPostAuthor, 
  getAuthors 
} from '@/js/domains/authors/store'

const router = useRouter();

// BOOKFORM DATA
const btnText = "add book";

requestGetAuthors();

// AUTHORFORM DATA
const firstName = ref();
const lastName = ref();

const submitAuthor = async () => {
  const newFirstName = firstName.value;
  const newLastName = lastName.value;
  if (newFirstName && newLastName) {
    await requestPostAuthor(newFirstName, newLastName);
    router.go();
  }
};

provide('submitAuthor', submitAuthor);
</script>

<template>
  <BookForm 
    v-model:firstName="firstName"
    v-model:lastName="lastName"
    :authors="getAuthors"
  >{{ btnText }}
  </BookForm>
</template>