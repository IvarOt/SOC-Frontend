import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function CardList() {
    const [cards, setData] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7146/api/Cards/GetAllCards")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className='flex-grow-1 text-center'>
                    <h1>Cards:</h1>
                </div>
                <Link to="/CardCreation" className="btn btn-primary">Add a new card</Link>
            </div>
            <div className="row">
                {cards.map((card, index) => {
                    return (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card shadow w25 text-white rounded">
                                <div className="card-body bg-dark border border-primary-subtle ">
                                    <h2 className="card-title">Name: {card.name}</h2>
                                    <p className="card-subtitle mb-2">HP: {card.hp}</p>
                                    <p className="card-subtitle mb-2">DMG: {card.dmg}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default CardList