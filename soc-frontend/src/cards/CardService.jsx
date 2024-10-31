import { instance } from '../api/api'
import { createEditCardRequest } from './CardModel';

const controller = "Cards";

export const getCards = async () => {
    const response = await instance.get(controller);
    return response.data;
}

export const getCard = async (id) => {
    const data = instance.get(controller, id);
    return data.map(createEditCardRequest);
} 

export const createCard = async (card) => instance.post(controller, card);

export const editCard = async (card) => instance.put(controller, card);

export const deleteCard = async (id) => instance.delete(controller, id);