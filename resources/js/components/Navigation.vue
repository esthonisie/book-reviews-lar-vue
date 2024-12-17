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
    <div class="nav-border"></div>
  </nav>
</template>

<style scoped>
  nav {
    position: sticky;
    top: 0;
    background-color: #dbdbdb;
    z-index: 1000;
  }

  .nav-links-container {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav-border {
    background-color: #7ee1cf;
    height: 14px;
  }

  a {
    color: #505050;
    font-weight: 700;
    text-transform: uppercase;
    padding: 14px 16px;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }

  .active {
    color: #dbdbdb;
    background-color: #505050;
    border-right: 4px solid #7ee1cf;
    border-left: 4px solid #7ee1cf;
  }
</style>