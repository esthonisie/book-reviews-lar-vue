import { ref, computed } from 'vue'
import axios from 'axios'

// state
const book = ref();
const isLoaded = ref(false);

// Axios
export const requestGetBook = async (bookId) => {
  isLoaded.value = false;
  try {
    const response = await axios.get(`/api/books/${bookId}`);
    book.value = response.data;
    isLoaded.value = true;
    // console.log(book.value);
  } catch (err) {
    console.error(err);
  }
};

// getters
export const getBook = computed(() => book.value);
export const checkIsLoaded = computed(() => isLoaded.value);