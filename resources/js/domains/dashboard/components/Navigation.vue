<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink 
      class="safe-link"
      :to="{ name: 'dashboard.overview' }">- main overview
    </RouterLink>
    <RouterLink 
      class="safe-link"
      :to="{ name: 'dashboard.books' }">- edit book titles
    </RouterLink>
    <div class="danger-container">
      <p>!!DANGERZONE!!</p>
      <p>Deleting an author also implies deleting every book written by this author.</p>
      <RouterLink 
      :to="{ name: 'dashboard.authors' }">- edit/delete authors
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-right: 24px;
    background-color: #fff4e9;
  }

  .danger-container {
    border: 2px solid #d85050;
    padding: 4px;
  }

  .danger-container p {
    color: #d85050;
  }

  .safe-link {
    margin-left: 4px;
  }

  a {
    color: #329f96;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }
</style>