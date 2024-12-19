import React from 'react';
import useGameHub from '../hooks/GameHooks';
import { ShopCard, GameCard } from './Card';
import { ShopModal } from './ShopModal';
import { blurredBackground } from '../BackgroundStyling';

const GameComponent = () => {
    const { gameState, startGame, resolveFight, endGame, purchaseCard, passTurn, actionExectued } = useGameHub();

    return (
        <>
            <div style={blurredBackground("https://wallpaperaccess.com/full/279729.jpg")} />
            <div className="container mt-3" style={{ position: 'relative', zIndex: 2 }}>
                {gameState ? (
                    !gameState.GameEnded ? (
                        <div className="card bg-dark bg-gradient mb-4 text-light p-2">
                            <div className="card-header">
                                <h5 className="card-title">Turn Number: {gameState.turnNumber}</h5>
                            </div>
                            <div className="card-body">
                                <div className="row d-flex justify-content-evenly">
                                    {gameState.players.map(player => (
                                        <div key={player.id} className="mb-3 col card m-2">
                                            <div className='d-flex justify-content-start align-items-start mt-2'>
                                                <p className="me-5 fw-bold">{player.name}</p>
                                                <p className="me-5"><img width="25" height="25" src="https://img.icons8.com/fluency/48/hearts.png" alt="hearts" /> {player.hp}</p>
                                                <p className="me-5"><img width="25" height="25" src="https://cdn0.iconfinder.com/data/icons/cash-card-starters-colored/48/JD-03-1024.png" alt="coins" /> {player.coins}</p>
                                                <ShopModal shop={player.shop} purchaseCard={purchaseCard} />
                                            </div>
                                            {player.cards.length > 0 ? (
                                                <>
                                                    <div className="row row-cols-2 mb-2">
                                                        {player.cards.map((card, index) => (
                                                            <GameCard key={index} card={card} />
                                                        ))}
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <p>No cards in hand..</p>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='card-footer p-2'>
                                {actionExectued ? (
                                    <button className="btn btn-secondary me-2" onClick={resolveFight}>Resolve Fight</button>
                                ) : (
                                    <button className="btn btn-warning me-2" onClick={passTurn}>Pass Turn</button>
                                )}
                                <button className="btn btn-danger" onClick={endGame}>End Game</button>
                            </div>
                        </div>
                    ) : (
                        <div className="card mb-4">
                            <div className="card-header">
                                Game Over
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">The game has ended.</h5>
                                <p>Thank you for playing!</p>
                                <button className="btn btn-primary" onClick={startGame}>Start New Game</button>
                            </div>
                        </div>
                    )
                ) : (
                    <button className="btn btn-primary me-2" onClick={startGame}>Start Game</button>
                )}
            </div>
        </>
    );
};

export default GameComponent;