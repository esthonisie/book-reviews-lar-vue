import { ref, computed } from 'vue'
import axios from 'axios'

// state
const authors = ref([]);

// De functie die de aanvraag met Axios naar de backend stuurt
export const fetchAuthors = async () => {
    const {data} = await axios.get('api/authors');
    if (!data) return;
    authors.value = data;
}

// getters
export const getAllAuthors = computed(() => authors.value);