import axios from "axios";

const API_URL =
    "https://facebook.github.io/react-native/movies.json";

const api = axios.create({
    baseURL: "http://localhost:8080",
});

export default api;