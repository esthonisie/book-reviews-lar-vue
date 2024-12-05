import { ref, computed } from 'vue'
import axios from 'axios'

// state
const books = ref([]);

// De functie die de aanvraag met Axios naar de backend stuurt
export const fetchBooks = async () => {
    const {data} = await axios.get('api/books');
    if (!data) return;
    books.value = data;
}

// getters
export const getAllBooks = computed(() => books.value);