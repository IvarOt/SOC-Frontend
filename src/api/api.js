import axios from "axios";

const instance = axios.create({
    baseURL:  import.meta.env.VITE_API_URL || "https://localhost:7146/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export { instance };