import { api } from '../adapters/api'
import { createEditCardRequest } from './CardModel';

const controller = "Cards";

export const getCards = async () => {
    const data = await api.get(controller).then((data) => data.json());
    return data.map(createEditCardRequest);
}

export const getCard = async (id) => {
    const data = api.get(controller, id).then((data) => data.json())
    return data.map(createEditCardRequest);
} 

export const createCard = async (card) => api.post(controller, card);

export const editCard = async (card) => api.put(controller, card);

export const deleteCard = async (id) => api.delete(controller, id);