import { ref, computed } from 'vue'
import axios from 'axios'

// state
const authors = ref([]);

// Axios
export const fetchAuthors = async () => {
	const {data} = await axios.get('api/authors');
	if (!data) return;
	authors.value = data;
}

// getters
export const getAllAuthors = computed(() => authors.value);