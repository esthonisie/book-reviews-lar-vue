import { ref, computed } from 'vue'
import axios from 'axios'

// state
const booksByTitle = ref([]);
const booksByAuthor = ref([]);
const isSortedByAuthor = ref(false);

const book = ref();
const isLoaded = ref(false);

// Axios
export const requestGetBooksByTitle = async () => {
  try {
    const response = await axios.get('api/books');
    booksByTitle.value = response.data;
    // console.log(booksByTitle.value);
  } catch (err) {
    console.error(err);
  }
};

export const requestGetBooksByAuthor = async () => {
  try {
    const response = await axios.get('api/books');
    booksByAuthor.value = response.data.sort((a, b) => 
      a.author.last_name.localeCompare(b.author.last_name)
    );
    // console.log(booksByAuthor.value);
  } catch (err) {
    console.error(err);
  }
};

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
export const getBooksValueByTitle = computed(() => booksByTitle.value);
export const getBooksValueByAuthor = computed(() => booksByAuthor.value);
export const checkIsSorted = computed(() => isSortedByAuthor.value);

export const getBookValue = computed(() => book.value);
export const checkIsLoaded = computed(() => isLoaded.value);

// actions
export const updateIsSorted = (boolean) => isSortedByAuthor.value = boolean;