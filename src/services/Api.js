import axios from "axios";

const URL_LOCAL = "http://localhost:8080";
const URL_PROD = "https://playnargs-api.herokuapp.com";

const getApiUrl = (type) => {
    if (type === 'P') return URL_PROD
    else return URL_LOCAL
}

const api = axios.create({
    baseURL: getApiUrl('P'),
});

export default api;