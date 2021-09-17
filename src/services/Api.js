import axios from "axios";

// const URL_LOCAL = "http://localhost:8080";
const URL_PROD = "https://playnargs-api.herokuapp.com";

const api = axios.create({
    baseURL: URL_PROD,
});

export default api;