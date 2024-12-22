import axios from "axios";

const instance = axios.create({
    baseURL: "http://sagaofcards-container:8080/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export { instance };
