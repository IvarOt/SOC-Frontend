import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5113/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export { instance };