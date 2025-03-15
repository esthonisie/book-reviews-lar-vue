<script setup>
import AuthorsListBlock from './AuthorsListBlock.vue'

defineProps({
  authors: Array,
  authorsByQuantityDesc: Array,
  checkIsSorted: Boolean,
});

const emit = defineEmits(['updateIsSorted']);
</script>

<template>
  <div class="all-authors-main-box">
    <div class="title-bar">
      <div class="title-names-box">
        <p>Authors:</p>
        <p>Books in Database:</p>
      </div>
      <div class="database-btn-box">
        <button @click="emit('updateIsSorted', false)"
          :class="checkIsSorted ? 'btn-inactive' : 'btn-active'"
          >&#8593;
        </button>
        <button @click="emit('updateIsSorted', true)" 
          :class="checkIsSorted ? 'btn-active' : 'btn-inactive'"
          >&#8595;
        </button>
      </div>
    </div>
    <template v-if="checkIsSorted">
      <AuthorsListBlock :authors="authorsByQuantityDesc" />
    </template>
    <template v-else>
      <AuthorsListBlock :authors="authors" />
    </template>
  </div>
</template>

<style scoped>
  .all-authors-main-box {
    display: flex;
    flex-direction: column;
  }

  .title-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .title-names-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .title-names-box p {
    color: #7a7a7a;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #fff4e9;
    padding: 8px 20px 10px;
  }

  .database-btn-box {
    display: flex;
    justify-content: space-between;
    width: 97px;
    margin-left: 40px;
  }

  .database-btn-box button {
    color: #5f5f5f;
    font-size: 22px;
    font-weight: 700;
    background-color: #fff4e9;
    padding: 0 8px;
  }

  .btn-active {
    box-shadow: 2px 4px 6px rgba(51, 13, 35, 0.2);
  }

  .btn-inactive {
    opacity: 0.8;
  }
</style>