<script setup>

const firstName = defineModel('firstName');
const lastName = defineModel('lastName');
</script>

<template>
  <form @submit.prevent="submitForm">
    <label for="first_name">author's first name</label>
    <input id="first_name" v-model="firstName">
    <label for="last_name">author's last name:</label>
    <input id="last_name" v-model="lastName">
    <button type="submit"><slot>submit</slot></button>
  </form>
</template>

<style scoped>
  @import "../css/form.css";
  form {
    margin: 0 auto;
  }
</style>