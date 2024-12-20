<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <div class="nav-links-container">
      <RouterLink 
        active-class="active" 
        to="/">Home
      </RouterLink>
      <RouterLink 
        active-class="active" 
        to="/books">Sort Books by Title
      </RouterLink>
      <RouterLink 
        active-class="active" 
        to="/authors">Sort Books by Author
      </RouterLink>
      <RouterLink 
        active-class="active" 
        to="/books/create">Add New Book
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    position: sticky;
    top: 0;
    background-color: #fff4e9;
    border-bottom: 4px solid #7ee1cf;
    box-shadow: 0 2px 4px rgba(51, 13, 35, 0.2);
    z-index: 1000;
  }

  .nav-links-container {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  a {
    color: #505050;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 14px 16px;
  }

  .active {
    background-color: #ffe1ba;
  }
</style>