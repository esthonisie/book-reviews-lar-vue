import { ref, computed } from 'vue'
import axios from 'axios'

// -----------------------------------------------------------------------------
// ------ ALL AUTHORS ----------------------------------------------------------
// -----------------------------------------------------------------------------

// state
const authors = ref([]);
const isSortedByQuantityDesc = ref(false);

// Axios
export const requestGetAuthors = async () => {
  try {
    const response = await axios.get('/api/authors');
    authors.value = response.data;
  } catch (err) {
    console.error(err);
  }
};

// getters
export const getAuthors = computed(() => authors.value);
export const getAuthorsByQuantityDesc = computed(() => 
  JSON.parse(JSON.stringify(authors.value))
  .sort((a, b) => b.books_count - a.books_count)
);

export const checkIsSorted = computed(() => isSortedByQuantityDesc.value);

// actions
export const updateIsSorted = (boolean) => isSortedByQuantityDesc.value = boolean;


// -----------------------------------------------------------------------------
// ------ SINGLE AUTHOR --------------------------------------------------------
// -----------------------------------------------------------------------------

// state
const author = ref();

// Axios
export const requestGetAuthor = async (authorId) => {
  try {
    const response = await axios.get(`/api/authors/${authorId}`);
    author.value = response.data;
  } catch (err) {
    console.error(err);
  }
};

export const requestPostAuthor = async (firstName, lastName) => {
  try {
      const { data } = await axios.post(`/api/authors`, {
        first_name: firstName, 
        last_name: lastName, 
      });
      authors.value.push(data);
      return data;
  } catch (err) {
      console.error(err);
  }
};

export const requestUpdateAuthor = async (firstName, lastName, id) => {
  try {
      await axios.patch(`/api/authors/${id}`, {
        first_name: firstName, 
        last_name: lastName, 
      });
  } catch (err) {
      console.error(err);
  }
};

export const requestDeleteAuthor = async (id) => {
  try {
      const response = await axios.delete(`/api/authors/${id}`);
      console.log(response.data);
      // action delete author front-end
      const index = authors.value.findIndex((elem) => elem.id == id);
      authors.value.splice(index, 1);
  } catch (err) {
      console.error(err);
  }
};

// getters
export const getAuthor = computed(() => author.value);