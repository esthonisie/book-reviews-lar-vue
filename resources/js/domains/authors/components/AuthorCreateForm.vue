<script setup>
import { inject } from 'vue'

// data
const firstName = defineModel('firstName');
const lastName = defineModel('lastName');

// functions
// TODO: ik vind de leesbaarheid met de provide en inject functies er niet beter op worden, waarom deze functie, die gedeclareerd 
// is in CreateView.vue, niet op deze pagina declareren zodat je zonder provide en inject toekunt?
const submitAuthor = inject('submitAuthor');
</script>

<template>
  <form @submit.prevent="submitAuthor">
    <label for="first_name">author's first name</label>
    <input id="first_name" placeholder="e.g. Nicci or J.R.R." v-model="firstName">
    <label for="last_name">author's last name:</label>
    <input id="last_name" placeholder="e.g. French" v-model="lastName">
    <button type="submit"><slot>submit</slot></button>
  </form>
</template>

<style scoped>
  @import "../css/form.css";
  form {
    margin: 0 10px;
  }
</style>