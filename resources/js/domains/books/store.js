import { ref, computed } from 'vue'
import axios from 'axios'

// -----------------------------------------------------------------------------
// ------ ALL BOOKS ------------------------------------------------------------
// -----------------------------------------------------------------------------

// state
const books = ref([]);
const isSortedByAuthor = ref(false);

// Axios
export const requestGetBooks = async () => {
  try {
    const response = await axios.get('api/books');
    books.value = response.data;
  } catch (err) {
    console.error(err);
  }
};

// getters
export const getBooks = computed(() => books.value);
export const getBooksByAuthor = computed(() => 
  JSON.parse(JSON.stringify(books.value))
  .sort((a, b) => a.author.last_name.localeCompare(b.author.last_name))
);
  
export const checkIsSorted = computed(() => isSortedByAuthor.value);

// actions
export const updateIsSorted = (boolean) => isSortedByAuthor.value = boolean;


// -----------------------------------------------------------------------------
// ------ SINGLE BOOK ----------------------------------------------------------
// -----------------------------------------------------------------------------

// state
const book = ref();

// Axios
export const requestGetBook = async (bookId) => {
  try {
    const response = await axios.get(`/api/books/${bookId}`);
    book.value = response.data;
  } catch (err) {
    console.error(err);
  }
};

// getters
export const getBook = computed(() => book.value);