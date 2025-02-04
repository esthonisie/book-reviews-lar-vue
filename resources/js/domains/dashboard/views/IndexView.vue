<script setup>
import { RouterView } from 'vue-router';
import Navigation from '../components/Navigation.vue';
</script>

<template>
  <div class="main-container">
    <Navigation />
    <RouterView />
  </div>
</template>

<style scoped>
  .main-container {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 5fr;
    padding: 0 12px;
  }
</style>