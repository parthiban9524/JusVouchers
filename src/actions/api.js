import axios from 'axios';
import { API_HOST } from '../config';

console.log("API_HOST ",API_HOST )

var api = axios.create({
    baseURL: "http://192.168.31.192:8001/api/user",
    responseType: 'json',
    responseEncoding: 'utf8',
});

export default api;