import useGameHub from '../hooks/GameHooks';
import React from 'react';
import PlayerInfo from '../components/PlayerInfo';
import { GameCard } from '../components/Card';
import { ShopModal } from '../components/ShopModal';
import { useEffect } from 'react';
import "./GameStyling.css";
import { blurredBackground } from '../BackgroundStyling';

export default function GameFrame() {
    const { gameState, startGame, resolveFight, endGame, purchaseCard, passTurn, actionExectued } = useGameHub();

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <>
            <div style={blurredBackground('https://i.pinimg.com/originals/5b/44/2e/5b442e85a3a35da719c4a5be871862d1.jpg')} />
            {gameState ? (
                <div className="d-flex flex-column min-vh-100 overflow-hidden" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row mt-3">
                        <div className="col-4 ms-4">
                            <PlayerInfo player={gameState.players[0]} />
                        </div>
                    </div>

                    <div className="row bg-light position-absolute bottom-0">
                            <div className="col-8 card-container fixed-height ">
                                <div className="d-flex no-wrap overflow-scroll overflow-y-hidden">
                                    {gameState.players[0].cards.length > 0 ? (
                                        gameState.players[0].cards.map((card, index) => (
                                            <div key={index} className='col-2'>
                                                <GameCard card={card} />
                                            </div>
                                        ))
                                    ) : (
                                        <>
                                            <p>No cards in hand..</p>
                                        </>
                                    )}
                                </div>
                        </div>
                        <div className="col-4 d-flex flex-column justify-content-start">
                            <ShopModal shop={gameState.players[0].shop} purchaseCard={purchaseCard} />
                            {actionExectued ? (
                            <button className="btn w-25 btn-secondary m-2" onClick={resolveFight}>Resolve Fight</button>
                            ) : (
                                <button className="btn w-25 btn-warning m-2" onClick={passTurn}>Pass Turn</button>
                            )}
                            <button className="btn w-25 btn-danger m-2" onClick={endGame}>End Game</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container m-4">
                    <div className="row">
                        <div className="col bg-light">
                            <p className="text-dark fw-bold"> Game Ended </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}