import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";

const user = JSON.parse(localStorage.getItem("persist:root"))?.currentUser;
const currentUser = user && JSON.parse(user);
const TOKEN = currentUser?.accessToken;

console.log(TOKEN);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});