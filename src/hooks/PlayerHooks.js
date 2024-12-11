import { useEffect, useState } from "react"
import * as playerService from "../services/PlayerService"
import { useAuth } from "../contexts/AuthContext"

const useAsync = (asyncFunction) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const execute = async (...args) => {
        setIsLoading(true);
        setErrorMessage(null);
        try {
            await asyncFunction(...args);
        } catch (error) {
            console.error("Error in execute:", error);
            setErrorMessage(error.response.data.Message);
        } finally {
            setIsLoading(false);
        }
    };
    return { execute, isLoading, errorMessage };
}

export const useGetPlayers = () => {
    const [players, setPlayers] = useState([]);
    const { execute, isLoading } = useAsync(async () => {
        const playersData = await playerService.getPlayers();
        setPlayers(playersData);
    })

    useEffect(() => {
        execute();
    })[refresh];
    return { players, refreshItems: execute, isLoading };
}

export const useChangeAvatar = () => {
    const { user } = useAuth();

    const changeAvatar = async (url, getPlayer) => {
        if (user?.nameid) {
            await playerService.changeAvatar(user.nameid, url);
            await getPlayer(user.nameid);
        }
    }
    return { changeAvatar };
}

export const useGetPlayer = () => {
    const [player, setPlayer] = useState([]);
    const [matchHistory, setMatchHistory] = useState([]);
    const { user } = useAuth();
    const { execute, isLoading } = useAsync(async (id) => {
        const response = await playerService.getPlayer(id);
        const matchResponse = await playerService.getMatchHistory(id);
        setPlayer(response.data);
        setMatchHistory(matchResponse.data);
    });

    useEffect(() => {
        if (user?.nameid) {
            execute(user.nameid);
        }
    }, [user]);

    return { player, matchHistory, getPlayer: execute, isLoading };
}

export const useCreateAccount = () => {
    const [isLoading, setIsLoading] = useState(false);

    const createAccount = async (player) => {
        setIsLoading(true);
        try {
            const response = await playerService.createAccount(player);
            return response;
        } 
        catch (error) {
            setIsLoading(false);
            throw error;
        }
        finally {
            setIsLoading(false);
        }
    }

    return { createAccount, isLoading };
}

export const useEditProfile = () => {
    const { execute, isLoading } = useAsync(playerService.editProfile);
    return { editProfile: execute, isLoading };
}

export const useDeleteAccount = () => {
    const { execute, isLoading } = useAsync(playerService.deleteAccount);
    return { deleteAccount: execute, isLoading };
};


