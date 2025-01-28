import { ref, computed } from 'vue'
import axios from 'axios'

// -----------------------------------------------------------------------------
// ------ ALL AUTHORS ----------------------------------------------------------
// -----------------------------------------------------------------------------

// state
const authors = ref([]);

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

/* export const requestUpdateAuthor = async (submitAuthor, authorId) => {
  try {
      await axios.patch(`/api/authors/${authorId}`, {
        
      });
  } catch (err) {
      console.error(err);
  }
};

export const requestDeletAuthor = async (id) => {
  try {
      const response = await axios.delete(`/api/authors/${id}`);
      console.log(response.data);
      // action delete author front-end
      const index = authors.value.findIndex((elem) => elem.id == id);
      authors.value.splice(index, 1);
  } catch (err) {
      console.error(err);
  }
}; */

// getters
export const getAuthor = computed(() => author.value);