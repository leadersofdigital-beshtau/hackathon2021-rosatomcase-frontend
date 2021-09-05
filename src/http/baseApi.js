import axios from 'axios';

const baseApi = axios.create({
    baseURL: process.env.VUE_APP_API_HOST,
    // baseURL: process.env.VUE_APP_API_HOST,
});

export default baseApi;