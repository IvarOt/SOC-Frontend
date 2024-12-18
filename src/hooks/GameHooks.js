import { act, useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { faL } from '@fortawesome/free-solid-svg-icons';

const useGameHub = () => {
    const [connection, setConnection] = useState(null);
    const [gameState, setGameState] = useState(null);
    const [actionExectued, setActionExecuted] = useState(false);

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:7146/gameHub")
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => {
                    console.log('Connected to GameHub');

                    connection.on('gameState', (state) => {
                        setGameState(state);
                        console.log('Game State:', state);
                    });

                    connection.on('GameEnded', () => {
                        console.log('The game has ended.');
                    });

                    connection.onclose(() => {
                        console.log('Connection closed.');
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    const startGame = async () => {
        if (connection) {
            try {
                await connection.invoke('StartGame');
            } catch (e) {
                console.error('StartGame failed: ', e);
            }
        }
    };

    const resolveFight = async () => {
        if (connection) {
            try {
                await connection.invoke('ResolveFight');
                setActionExecuted(false);
            } catch (e) {
                console.error('ResolveFight failed: ', e);
            }
        }
    };

    const purchaseCard = async (cardId) => {
        if (connection) {
            try {
                await connection.invoke('PurchaseCard', cardId);
                setActionExecuted(true);
            } catch (e) {
                console.error('PurchaseCard failed: ', e);
            }
        }
    };

    const endGame = async () => {
        if (connection) {
            try {
                await connection.invoke('EndGame');
                setGameState(null);
                setActionExecuted(false);
            } catch (e) {
                console.error('EndGame failed: ', e);
            }
        }
    };

    const passTurn = async () => {
        if (connection) {
            try {
                await connection.invoke('PassTurn');
                setActionExecuted(false);
            } catch (e) {
                console.error('PassTurn failed: ', e);
            }
        }
    };

    return { gameState, startGame, resolveFight, purchaseCard, endGame, passTurn, actionExectued };
};

export default useGameHub;
