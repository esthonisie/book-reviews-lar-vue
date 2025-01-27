<script setup>
import BookForm from '../components/BookForm.vue'
import { ref, provide } from 'vue'
import { useRouter } from 'vue-router'
import { 
  requestGetAuthors, 
  requestPostAuthor, 
  getAuthors 
} from '@/js/domains/authors/store'
import { requestPostBook } from '../store'

const router = useRouter();

requestGetAuthors();

// AUTHORFORM DATA
const firstName = ref("");
const lastName = ref("");

const submitAuthor = async () => {
  const newFirstName = firstName.value;
  const newLastName = lastName.value;
  if (newFirstName && newLastName) {
    await requestPostAuthor(newFirstName, newLastName);
    await requestGetAuthors();
    firstName.value = "";
    lastName.value = "";
    // make function for retrieving author's ID based on firstname & lastname
    // authorId.value = ;
  }
};

provide('submitAuthor', submitAuthor);

// BOOKFORM DATA
const authorId = ref();
const bookTitle = ref("");
const btnText = "add book";

const submitBook = async () => {
  const newAuthorId = authorId.value;
  const newBookTitle = bookTitle.value;
  if (newAuthorId && newBookTitle) {
    await requestPostBook(newAuthorId, newBookTitle);
    router.push({ path: `/books` })
  }
};
</script>

<template>
  <BookForm 
    v-model:firstName="firstName"
    v-model:lastName="lastName"
    v-model:authorId="authorId"
    v-model:bookTitle="bookTitle"
    :authors="getAuthors"
    @submit="submitBook()"
  >{{ btnText }}
  </BookForm>
</template>