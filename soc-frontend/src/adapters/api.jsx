const baseURL = "https://localhost:7146/";

const request = (controller, body, endpoint = "", method) => {
    const requestOptions = {
        method,
        headers: authHeader()
    };
    if (body) {
        requestOptions.headers['Content-Type'] = 'application/json';
        requestOptions.body = JSON.stringify(body);
    }
    return fetch(`${baseURL}${controller}/${endpoint}`, requestOptions).then(handleResponse);
}

const authHeader = () => {
    const token = localStorage.getItem("site");
    return token ? { Authorization: token } : {};
}

const api = {
    get: (controller, endpoint) => request(controller, null, endpoint, 'GET'),
    post: (controller, body, endpoint) => request(controller, body, endpoint, 'POST'),
    put: (controller, body, endpoint) => request(controller, body, endpoint, 'PUT'),
    delete: (controller, id, endpoint) => request(controller, {id}, endpoint, 'DELETE'),
};

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        const token = localStorage.getItem('site');

        if (!response.ok) {
            if ([401, 403].includes(response.status) && token) {
                localStorage.removeItem('site');
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}


export { api };