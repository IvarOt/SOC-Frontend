import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CardCreation() {

    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [dmg, setDmg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("https://localhost:7146/api/Cards/CreateCard", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                hp: parseInt(hp),
                dmg: parseInt(dmg),
            })
        })
        navigate("/CardList");
    }


    return (
        <div className="container d-flex justify-content-center mt-5">
            <form onSubmit={handleSubmit} className='col-md-4 mb-4'>
                <h1 className="text-center mb-4">Create New Card</h1>
                <div className="card bg-warning bg-gradient text-black px-3">
                    <div className='card-header d-flex flex-row align-items-center'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control border-dark bg-dark text-white"
                                required
                            />
                        </div>
                    </div>
                    <div className="bg-dark d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="https://pics.craiyon.com/2023-10-27/935109ad565d4c8eaa1cad34b175506c.webp" />
                    </div>
                    <div className='card-footer'>
                        <div className="mb-3">
                            <div className='d-flex flex-row align-content-center'>
                                <img className='me-1' width="20" height="20" src="https://img.icons8.com/fluency/48/hearts.png" alt="hearts" />
                                <label htmlFor="hp" className="form-label">HP</label>
                            </div>
                            <input
                                type="number"
                                id="hp"
                                value={hp}
                                onChange={(e) => setHp(e.target.value)}
                                className="form-control border-dark bg-dark text-white"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <div className='d-flex flex-row align-content-center'>
                                <img className='me-1' width="20" height="20" src="https://img.icons8.com/windows/32/sword.png" alt="sword" />
                                <label htmlFor="dmg" className="form-label">DMG</label>
                            </div>
                            <input
                                type="number"
                                id="dmg"
                                value={dmg}
                                onChange={(e) => setDmg(e.target.value)}
                                className="form-control border-dark bg-dark text-white"
                                required
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
            </form>
        </div>
    );
}

export default CardCreation