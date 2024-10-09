import { useEffect, useState } from "react"
import * as playerService from "/src/services/playerService"
import { RegisterPlayerRequest } from "../models/PlayerModel";

export const useGetPlayers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        playerService.getPlayers().then((players) => {
            setPlayers(players);
            setIsLoading(false);
        });
    }, [refresh]);
    const refreshItems = () => {
        setRefresh(!refresh);
    };
    return { players, refreshItems, isLoading };
}

export const useGetPlayer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [player, setPlayer] = useState(new RegisterPlayerRequest());

    const getPlayer = (id) => {
        setIsLoading(true);
        playerService.getPlayer(id).then((player) => {
            setPlayer(player);
            setIsLoading(false);
        });
    }
    return { player, getPlayer, isLoading };
}

export const useCreateAccount = () => {
    const [isLoading, setIsLoading] = useState(false);
    const createAccount = async (player) => {
        setIsLoading(true);
        playerService.createAccount(player).then(setIsLoading(false));
    }
    return { createAccount, isLoading };
}

export const useEditProfile = () => {
    const [isLoading, setIsLoading] = useState(false);
    const editProfile = async (player) => {
        setIsLoading(true);
        playerService.editProfile(player).then(setIsLoading(false));
    }
    return { editProfile, isLoading };
}

export const useDeleteAccount = () => {
    const [isLoading, setIsLoading] = useState(false);
    const deleteAccount = async (player) => {
        setIsLoading(true);
        playerService.deleteAccount(player).then(setIsLoading(false));
    }
    return { deleteAccount, isLoading };
}