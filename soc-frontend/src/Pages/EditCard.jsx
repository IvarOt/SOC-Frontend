import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditCard() {

    const {id} = useParams();
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [dmg, setDmg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://localhost:7146/api/Cards/GetCard?id=${id}`)
            .then(response => response.json())
            .then(json => {
                setName(json.name)
                setHp(json.hp)
                setDmg(json.dmg)
            })
            .catch(error => console.error(error));
            console.log(id);
    }, []);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("https://localhost:7146/api/Cards/EditCard", {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                id: parseInt(id),
                name: name,
                hp: parseInt(hp),
                dmg: parseInt(dmg),
            })
        })
        navigate("/CardList");
    }


    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form
                className="bg-dark border border-primary-subtle p-4 rounded shadow w-25 text-light"
                onSubmit={handleSubmit}
            >
                <h1 className="text-center mb-4">Edit Card</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control bg-dark text-white"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="hp" className="form-label">HP</label>
                    <input
                        type="number"
                        id="hp"
                        value={hp}
                        onChange={(e) => setHp(e.target.value)}
                        className="form-control bg-dark text-white"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="dmg" className="form-label">DMG</label>
                    <input
                        type="number"
                        id="dmg"
                        value={dmg}
                        onChange={(e) => setDmg(e.target.value)}
                        className="form-control bg-dark text-white"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-100"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default EditCard