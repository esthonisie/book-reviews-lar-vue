<script setup>
import ReviewForm from '../components/TitleForm.vue'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { requestUpdateTitle, requestGetBook, getBook } from '../store'

const router = useRouter();

const route = useRoute();
const bookId = parseInt(route.params.id);

const titleText = ref();

onMounted(async () => {
  await requestGetBook(bookId);
  const book = Object.assign({}, getBook.value);
  titleText.value = book.title;
});

const submitForm = async () => {
  if (titleText.value) {
    await requestUpdateTitle(titleText.value, bookId);
    router.back();
  }
};

const btnText = "edit";
</script>

<template>
  <ReviewForm 
    v-model:titleText="titleText"
    @submit="submitForm()" 
  >{{ btnText }}
  </ReviewForm>
</template>