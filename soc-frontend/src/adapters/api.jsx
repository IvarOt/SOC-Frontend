
const baseURL = "https://localhost:7146/Cards";

const api = {
    get: (endpoint = "") => fetch(`${baseURL}/${endpoint}`),
    post: (body, endpoint = "") => fetch(`${baseURL}/${endpoint}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: body && JSON.stringify(body),
    }),
    put: (body, endpoint = "") => fetch(`${baseURL}/${endpoint}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: body && JSON.stringify(body),
    }),
    delete: (id) => fetch(`${baseURL}?id=${id}`, {
        method: "DELETE",
    }),
};

export { api};