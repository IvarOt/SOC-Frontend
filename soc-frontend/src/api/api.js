import axios from "axios";

const instance = axios.create({
    baseURL: "https://localhost:7146/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export { instance };