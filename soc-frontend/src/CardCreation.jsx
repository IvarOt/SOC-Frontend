import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

function CardCreation() {

    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [dmg, setDmg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("https://localhost:7146/api/Cards/CreateCard", {
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
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                className="bg-white p-6 rounded-lg shadow-md w-80"
                onSubmit={handleSubmit}
            >
                <h1 className="text-xl font-bold mb-4 text-center">Card Information</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="hp" className="block text-sm font-medium text-gray-700">HP</label>
                    <input
                        type="number"
                        id="hp"
                        value={hp}
                        onChange={(e) => setHp(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="dmg" className="block text-sm font-medium text-gray-700">DMG</label>
                    <input
                        type="number"
                        id="dmg"
                        value={dmg}
                        onChange={(e) => setDmg(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CardCreation