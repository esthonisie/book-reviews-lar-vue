import { ref, computed } from 'vue'
import axios from 'axios'

// state
const reviews = ref([]);
const isLoaded = ref(false);

// Axios
export const sendGetRequest = async (url) => {
  isLoaded.value = false;
  try {
    const response = await axios.get(url);
    reviews.value = response.data;
    isLoaded.value = true;
  } catch (err) {
    console.error(err);
  }
}

export const sendDeleteRequest = async (id) => {
  try {
      const response = await axios.delete(`/api/reviews/${id}`);
      console.log(response.data);
  } catch (err) {
      console.error(err);
  }
};

// getters
export const getAllReviews = computed(() => reviews.value);
export const checkIsLoaded = computed(() => isLoaded.value);

// actions
export const removeFromArray = (index) => reviews.value.reviews.splice(index, 1);