import { ref, computed } from 'vue'

const isLoaded = ref(false);

export const checkIsLoaded = computed(() => isLoaded.value);
export const updateIsLoaded = (boolean) => isLoaded.value = boolean;