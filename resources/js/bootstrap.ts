import axios from 'axios';

const windowAny:any = window;

windowAny.axios = axios;

windowAny.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';