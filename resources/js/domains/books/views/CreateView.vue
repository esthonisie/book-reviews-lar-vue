<script setup>
import BookForm from '../components/BookForm.vue'
import { ref, provide } from 'vue'
import { useRouter } from 'vue-router'
import { 
  requestGetAuthors, 
  requestPostAuthor, 
  getAuthors, 
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
    const newAuthor = await requestPostAuthor(newFirstName, newLastName);
    await requestGetAuthors();
    // fills in new author name in the BookForm
    authorId.value = newAuthor.id;
    // clears new author names in the AuthorForm
    firstName.value = "";
    lastName.value = "";
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
    router.push({ name: 'books.index' })
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