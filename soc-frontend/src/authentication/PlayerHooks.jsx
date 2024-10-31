import { useEffect, useState } from "react"
import * as playerService from "/src/authentication/playerService"
import { useAuth } from "../authentication/AuthProvider"

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


export const useGetPlayer = () => {
    const [player, setPlayer] = useState([]);
    const { user } = useAuth();
    const { execute, isLoading } = useAsync(async (id) => {
        const response = await playerService.getPlayer(id);
        setPlayer(response.data);
    });

    useEffect(() => {
        if (user?.nameid) {
            execute(user.nameid);
        }
    }, [user]);

    return { player, getPlayer: execute, isLoading };
}

export const useCreateAccount = () => {
    const { execute, isLoading, errorMessage } = useAsync(playerService.createAccount);
    return { createAccount: execute, isLoading, errorMessage };
}

export const useEditProfile = () => {
    const { execute, isLoading } = useAsync(playerService.editProfile);
    return { editProfile: execute, isLoading };
}

export const useDeleteAccount = () => {
    const { execute, isLoading } = useAsync(playerService.deleteAccount);
    return { deleteAccount: execute, isLoading };
};


