<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
 <div class="main-container">
    <Navigation />
    <div class="content-container">
      <RouterView /> 
    </div>
  </div>
</template>

<style scoped>
  .main-container {
    width: 100vw;
    min-width: 920px;
  }

  .content-container {
    background-color: #ffded8;
    max-width: 1200px;
    min-width: 920px;
    min-height: calc(100vh - 66px);
    padding: 36px 24px 60px;
    margin: 0 auto;
  }
</style>