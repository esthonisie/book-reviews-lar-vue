<script setup>

const firstName = defineModel('firstName');
const lastName = defineModel('lastName');
</script>

<template>
  <form @submit.prevent="submitForm">
    <label for="first_name">author's first name</label>
    <input id="first_name" placeholder="e.g. Nicci or J.R.R." v-model="firstName">
    <label for="last_name">author's last name:</label>
    <input id="last_name" placeholder="e.g. French" v-model="lastName">
    <button type="submit"><slot>submit</slot></button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  background-color: #ffcc8a;
  box-shadow: 2px 4px 6px rgba(0, 0, 255, 0.35);
  width: 240px;
  padding: 20px;
  margin: 0 auto;
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