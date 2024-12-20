import { ref, computed } from 'vue'
import axios from 'axios'

// state
const reviews = ref([]);
const isLoaded = ref(false);

// Axios
export const fetchReviews = async (url) => {
  isLoaded.value = false;
  try {
    const response = await axios.get(url);
    reviews.value = response.data;
    isLoaded.value = true;
  } catch (error) {
    console.error(error);
  }
}

// getters
export const getAllReviews = computed(() => reviews.value);
export const checkIsLoaded = computed(() => isLoaded.value);