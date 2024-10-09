import { api } from '../adapters/api'

const controller = "Player";

export const getPlayers = async () => api.get(controller).then((data) => data.json());

export const getPlayer = async (id) => api.get(controller, id).then((data) => data.json());

export const createAccount = async (player) => api.post(controller, player);

export const editProfile = async (player) => api.put(controller, player);

export const deleteAccount = async (id) => api.delete(controller, id);