import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CardCreation from './CardCreation';

function CardList() {
    const [cards, setData] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7146/api/Cards/GetAllCards")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <Link to="/CardCreation">Add a new card</Link>
            <h1 className="text-3xl font-bold mb-4 text-center">Cards:</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cards.map((card, index) => {
                    return (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-xl font-semibold">Name: {card.name}</h2>
                            <h2 className="text-lg">HP: {card.hp}</h2>
                            <h2 className="text-lg">DMG: {card.dmg}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default CardList