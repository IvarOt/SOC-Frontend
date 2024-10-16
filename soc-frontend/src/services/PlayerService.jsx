import { api } from '../adapters/api'

const controller = "Player";

//Admin?
export const getPlayers = async () => api.get(controller).then((data) => data.json());

//profile
export const getPlayer = async (id) => api.get(controller, id).then((data) => data.json());

//sign up
export const createAccount = async (player) => api.post(controller, player);

//changing account information
export const editProfile = async (player) => api.put(controller, player);

//neccessary?
export const deleteAccount = async (id) => api.delete(controller, id);

export const loginPlayer = async (player) => {
    const response = await api.post(controller, player, "login");
    return response;
};