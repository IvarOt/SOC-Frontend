import { api } from '../adapters/api'


export const getCards = async () => api.get().then((data) => data.json());

export const getCard = async (id) => api.get(id).then((data) => data.json())

export const createCard = async (card) => api.post(card);

export const editCard = async (card) => api.put(card);

export const deleteCard = async (id) => api.delete(id);