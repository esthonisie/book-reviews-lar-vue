import { ref, computed } from 'vue'
import axios from 'axios'

// state
const review = ref();
const reviews = ref([]);

// Axios
export const requestGetReview = async (reviewId) => {
  try {
    const response = await axios.get(`/api/reviews/${reviewId}`);
    review.value = response.data;
    // console.log(review.value);
  } catch (err) {
    console.error(err);
  }
};

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

export const requestUpdateReview = async (submitReviewText, reviewId) => {
  try {
      await axios.patch(`/api/reviews/${reviewId}`, {
        body: submitReviewText,
      });
  } catch (err) {
      console.error(err);
  }
};

export const requestDeleteReview = async (id) => {
  try {
      const response = await axios.delete(`/api/reviews/${id}`);
      console.log(response.data);
      // action deleteReview
      const index = reviews.value.findIndex((elem) => elem.id == id);
      reviews.value.splice(index, 1);
  } catch (err) {
      console.error(err);
  }
};

// getters
export const getReview = computed(() => review.value);
export const getReviews = computed(() => reviews.value);