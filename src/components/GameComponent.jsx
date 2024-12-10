import React from 'react';
import useGameHub from '../hooks/GameHooks';
import { ShopCard, GameCard } from './Card';

const GameComponent = () => {
    const { gameState, startGame, resolveFight, endGame, purchaseCard, passTurn } = useGameHub();

    return (
        <div className="container mt-3">
            <h1 className="mb-4">Game Component</h1>
            {gameState && (
                !gameState.GameEnded ? (
                    <div className="card mb-4">
                        <div className="card-header">
                            Game State
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Turn Number: {gameState.turnNumber}</h5>
                            <div className="mb-3">
                                <h6>Players:</h6>
                                {gameState.players.map(player => (
                                    <div key={player.id} className="mb-3">
                                        <h5>{player.name}</h5>
                                        <p>HP: {player.hp}</p>
                                        <p>Coins: {player.coins}</p>
                                        {player.cards.length > 0 ? (
                                            <>
                                                <h6>Cards:</h6>
                                                <div className="row g-4">
                                                    {player.cards.map((card, index) => (
                                                        <GameCard key={index} card={card} />
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <p>No cards in hand</p>
                                        )}
                                        <h6>Shop:</h6>
                                        <div className="row g-4">
                                            {player.shop.cardsForSale.map((card, index) => (
                                                <ShopCard key={index} card={card.card} purchaseCard={purchaseCard} isPurchased={card.isPurchased} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
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
            )}
            <button className="btn btn-primary me-2" onClick={startGame}>Start Game</button>
            <button className="btn btn-secondary me-2" onClick={resolveFight}>Resolve Fight</button>
            <button className="btn btn-warning me-2" onClick={passTurn}>Pass Turn</button>
            <button className="btn btn-danger" onClick={endGame}>End Game</button>
        </div>
    );
};

export default GameComponent;