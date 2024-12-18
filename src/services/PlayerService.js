import { instance } from '../api/api';

const controller = "Player";

//Admin?
export const getPlayers = async () => instance.get(controller);

//profile
export const getPlayer = async (id) => instance.get(`${controller}/${id}`);

//sign up
export const createAccount = async (player) => {
    const response = await instance.post(controller, player);
    return response;
}

//changing account information
export const editProfile = async (player) => instance.put(controller, player);

//neccessary?
export const deleteAccount = async (id) => instance.delete(`${controller}/${id}`);

export const loginPlayer = async (player) => {
    const response = await instance.post(`${controller}/Login`, player);
    return response;
};

export const getMatchHistory = async (id) => instance.get(`${controller}/MatchHistory?PlayerId=${id}`);

export const changeAvatar = async (id, url) => instance.put(`${controller}/ChangeAvatar?PlayerId=${id}&imageURL=${url}`);