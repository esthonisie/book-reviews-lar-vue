import { ref, computed } from 'vue'
import axios from 'axios'

// state
const reviews = ref([]);

// Axios
export const requestGetReviews = async (bookId) => {
  try {
    const response = await axios.get(`/api/books/${bookId}/reviews`);
    reviews.value = response.data;
    // console.log(reviews.value);
  } catch (err) {
    console.error(err);
  }
};

export const requestPostReview = async (submitReviewText, bookId) => {
  try {
      await axios.post(`/api/reviews`, {
        body: submitReviewText, 
        book_id: bookId, 
      });
  } catch (err) {
      console.error(err);
  }
};

export const requestDeleteReview = async (id) => {
  try {
      const response = await axios.delete(`/api/reviews/${id}`);
      console.log(response.data);
      // action deleteReviewValue
      const index = reviews.value.findIndex((elem) => elem.id == id);
      reviews.value.splice(index, 1);
  } catch (err) {
      console.error(err);
  }
};

// getters
export const getReviewsValue = computed(() => reviews.value);