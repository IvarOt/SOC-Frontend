import axios from 'axios';
import { instance } from '../api/api'
import { createEditCardRequest } from '../models/CardModel';

const controller = "Cards";

export const getCards = async () => {
    const response = await instance.get(controller);
    return response.data;
}

export const getCard = async (id) => {
    const data = instance.get(controller, id);
    return data.map(createEditCardRequest);
} 

export const createCard = async (card) => instance.post(controller, card, {
    headers: {
        'Content-Type': "multipart/form-data",
    },
}) 

export const editCard = async (card) => instance.put(controller, card, {
    headers: {
        'Content-Type': "multipart/form-data",
    },
});

export const deleteCard = async (id) => instance.delete(`${controller}/${id}`);