import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function CardList() {
    const [cards, setData] = useState([]);

    const navigate = useNavigate();

    const passCardToEdit = (card) => {
        navigate(`/EditCard/${card.id}`);
    };

    const deleteCard = async (card) => {
        await fetch(`https://localhost:7146/Cards?id=${card.id}`, {
            method: "delete",
        })
            .catch(error => console.error(error));
        window.location.reload();
    }

    useEffect(() => {
        fetch("https://localhost:7146/Cards")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className='flex-grow-1 text-center'>
                    <h1 className='text-white'>Cards:</h1>
                </div>
                <Link to="/CardCreation" className="btn btn-primary"><img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/add--v1.png" alt="new card" /> </Link>
            </div>
            {cards.length > 0 ? (
                <div className="row g-5">
                    {cards.map((card, index) => {
                        return (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card bg-warning bg-gradient text-dark px-3">
                                    <div className='card-header d-flex flex-row align-items-center'>
                                        <h1 className="d-flex flex-grow-1">{card.name}</h1>
                                        <button className="btn btn-dark me-2" onClick={() => passCardToEdit(card)}> <img className='img-fluid' width="25" height="25" src="https://img.icons8.com/?size=100&id=sKp0dy2A108d&format=png&color=FFFFFF" alt="edit" /> </button>
                                        <button className='btn btn-danger' onClick={() => deleteCard(card)}> <img className='img-fluid' width="25" height="25" src="https://img.icons8.com/?size=100&id=99933&format=png&color=FFFFFF" alt="delete" /> </button>
                                    </div>
                                    <div className="bg-light bg-gradient d-flex justify-content-center align-items-center shadow-lg">
                                        <img className='img-fluid' src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1059190-001chasnowtroll191101v083asc300-1280.jpg?itok=7izqoYm1" />
                                    </div>
                                    <div className='card-footer'>
                                        <p className="mb-2"><img width="30" height="30" src="https://img.icons8.com/fluency/48/hearts.png" alt="hearts" /> {card.hp}</p>
                                        <p className="mb-2"><img width="30" height="30" src="https://img.icons8.com/windows/32/sword.png" alt="sword" /> {card.dmg}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <h1 className='text-white'>No cards available..</h1>
            )}
        </div>
    )
}

export default CardList