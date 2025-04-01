<script setup>
import AuthorEditForm from '../components/AuthorEditForm.vue'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { 
  requestGetAuthor, 
  requestUpdateAuthor, 
  getAuthor, 
} from '../store'

const router = useRouter();

const route = useRoute();
const authorId = parseInt(route.params.id);

const firstName = ref();
const lastName = ref();

onMounted(async () => {
  await requestGetAuthor(authorId);
  // TODO: deep copy van gehele auteursobject is makkelijker om mee te geven ipv losse velden
  const author = Object.assign({}, getAuthor.value);
  firstName.value = author.first_name;
  lastName.value = author.last_name;
});

const submitForm = async () => {
  if (firstName.value && lastName.value) {
    await requestUpdateAuthor(firstName.value, lastName.value, authorId);
    router.back();
  }
};

const btnText = "edit";
</script>

<template>
  <AuthorEditForm 
    v-model:firstName="firstName"
    v-model:lastName="lastName"
    @submit="submitForm()" 
  >{{ btnText }}
  </AuthorEditForm>
</template>