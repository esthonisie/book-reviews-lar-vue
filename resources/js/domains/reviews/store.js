import { ref, computed } from 'vue'
import axios from 'axios'

// state
const reviews = ref([]);

// Axios
export const fetchReviews = async (url) => {
	const {data} = await axios.get(url);
	if (!data) return;
	reviews.value = data;
}

// getters
export const getAllReviews = computed(() => reviews.value);