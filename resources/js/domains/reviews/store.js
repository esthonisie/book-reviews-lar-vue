import { ref, computed } from 'vue'
import axios from 'axios'

// state
const reviews = ref([]);
const newReview = {};
const isLoaded = ref(false);

// Axios
export const sendGetRequest = async (bookId) => {
  isLoaded.value = false;
  try {
    const response = await axios.get(`/api/books/${bookId}/reviews`);
    reviews.value = response.data;
    isLoaded.value = true;
    console.log(reviews.value);
  } catch (err) {
    console.error(err);
  }
};

export const sendPostRequest = async () => {
  try {
      await axios.post(`/api/reviews`, newReview);
      console.log(newReview.body);
  } catch (err) {
      console.error(err);
  }
};

export const sendDeleteRequest = async (id) => {
  try {
      const response = await axios.delete(`/api/reviews/${id}`);
      // console.log(response.data);
  } catch (err) {
      console.error(err);
  }
};

// getters
export const getAllReviews = computed(() => reviews.value);
export const checkIsLoaded = computed(() => isLoaded.value);

// actions
export const addNewReview = (text, id) => {
  newReview.body = text;
  newReview.book_id = id;
};
export const removeFromArray = (index) => reviews.value.reviews.splice(index, 1);