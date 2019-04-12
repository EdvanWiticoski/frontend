import axios from 'axios';

const api = axios.create({
    baseURL: 'https://monistack-backend.herokuapp.com',
});
export default api;
