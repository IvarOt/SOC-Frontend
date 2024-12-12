import axios from 'axios';
import { instance } from '../api/api'

const controller = "Cards";

export const getCards = async () => {
    const response = await instance.get(controller);
    return response.data;
}

export const getCard = async (id) => {
    const [card, setCard] = useState({ name: "", hp: 0, dmg: 0, color: "#563d7c" });
    const data = instance.get(controller, id);
    return data.map(card);
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