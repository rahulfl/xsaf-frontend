import axios from "axios";

axios.defaults.baseURL = 'https://api.x-saf.com/api/v1/';
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');