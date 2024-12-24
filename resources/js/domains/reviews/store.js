import { ref, computed } from 'vue'
import axios from 'axios'

// state
const reviews = ref([]);
const isLoaded = ref(false);

// Axios
export const sendGetRequest = async (bookId) => {
  isLoaded.value = false;
  try {
    const response = await axios.get(`/api/books/${bookId}/reviews`);
    reviews.value = response.data;
    isLoaded.value = true;
    // console.log(reviews.value);
  } catch (err) {
    console.error(err);
  }
};

export const sendPostRequest = async (submitReviewText, bookId) => {
  try {
      await axios.post(`/api/reviews`, {
        body: submitReviewText, 
        book_id: bookId, 
      });
  } catch (err) {
      console.error(err);
  }
};

export const sendDeleteRequest = async (id) => {
  try {
      const response = await axios.delete(`/api/reviews/${id}`);
      const index = reviews.value.reviews.findIndex((elem) => elem.id == id);
      reviews.value.reviews.splice(index, 1);
      console.log(response.data);
  } catch (err) {
      console.error(err);
  }
};

// getters
export const getAllReviews = computed(() => reviews.value);
export const checkIsLoaded = computed(() => isLoaded.value);