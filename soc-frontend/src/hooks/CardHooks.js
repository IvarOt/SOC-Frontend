import { useEffect, useState } from "react"
import * as cardService from "../services/CardService"

export const useGetCards = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [cards, setCards] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        cardService.getCards().then((cards) => {
            setCards(cards);
            setIsLoading(false);
        });
    }, [refresh]);

    const refreshItems = () => {
        setRefresh(!refresh);
    };
    return { cards, refreshItems, isLoading };
}

export const useGetCard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [card, setCard] = useState({ name: "", hp: 0, dmg: 0, color: "#563d7c" });

    const getCard = async (id) => {
        setIsLoading(true);
        cardService.getCard(id).then(({ card }) => {
            setCard(card);
        });
        setIsLoading(false);
    }
    return { getCard, card,  isLoading };
}

export const useCreateCard = (refreshItems) => {
    const [isLoading, setIsLoading] = useState(false);
    const createCard = async (card) => {
        setIsLoading(true);
        await cardService.createCard(card).then(setIsLoading(false));
        refreshItems();
    }

    return { createCard, isLoading };
}

export const useEditCard = (refreshItems) => {
    const [isLoading, setIsLoading] = useState(false);
    const editCard = async (card) => {
        setIsLoading(true);
        await cardService.editCard(card).then(setIsLoading(false));
        refreshItems();
    }
    return { editCard, isLoading };
}

export const useDeleteCard = (refreshItems) => {
    const [isLoading, setIsLoading] = useState(false);
    const deleteCard = async (card) => {
        setIsLoading(true);
        await cardService.deleteCard(card.id).then(setIsLoading(false));
        refreshItems();
    }
    return { deleteCard, isLoading };
}