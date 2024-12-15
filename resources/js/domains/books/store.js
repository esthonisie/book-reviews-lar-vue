import { ref, computed } from 'vue'
import axios from 'axios'

// state
const books = ref([]);

// Axios
export const fetchBooks = async () => {
	const {data} = await axios.get('api/books');
	if (!data) return;
	books.value = data;
}

// getters
export const getAllBooks = computed(() => books.value);