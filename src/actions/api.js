import axios from 'axios';


var api = axios.create({
    baseURL: "http://192.168.190.192:8001/api",
    responseType: 'json',
    responseEncoding: 'utf8',
});

export default api;