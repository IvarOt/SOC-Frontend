import { instance } from "../api/api"
import { getLocalAccesToken, UpdateLocalAccesToken } from "../services/TokenService";
import { useAuth } from "../contexts/AuthContext";

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest.retry) {
            originalRequest.retry = true;
            console.log("Refreshing access token...");
            try {
                const response = await instance.post("/player/refresh-token");
                console.log(response);
                const access_token = response.data;
                UpdateLocalAccesToken(access_token);
                originalRequest.headers.Authorization = 'Bearer ' + access_token;
                return instance(originalRequest);
            }
            catch (error) {
                useAuth().logout();
                return Promise.reject(error);
            }
        }
        useAuth().logout();
        return Promise.reject(error);
    }
  );

instance.interceptors.request.use(
    (config) => {
        const acces_token = getLocalAccesToken();
        if (acces_token) {
            config.headers["Authorization"] = 'Bearer ' + acces_token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);  