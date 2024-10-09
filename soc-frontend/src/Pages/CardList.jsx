import React, { useState, useEffect } from 'react';
import { AdminCard } from '/src/Components/Card'
import { getCards } from '../services/CardService'
import { CardModal } from '../Components/Card';

export default function CardList() {
    const [cards, setCards] = useState([]);

    useEffect(() => async () => {
        const fetchedCards = await getCards()
        setCards(fetchedCards);
    }, []);

    if (cards) {
        return (
            <div className="container mt-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className='flex-grow-1 text-center'>
                    </div>
                    <CardModal />
                </div>
                <div className="row g-4">
                    {cards.map((card, index) => {
                        return (
                            <AdminCard key={index} card={card} />
                        );
                    })}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container mt-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className='flex-grow-1 text-center'>
                        <h1 className='text-white'>Cards:</h1>
                    </div>
                    <CardModal />
                </div>
                <h1 className='text-white'>No cards available..</h1>
            </div>
        )
    }
}
