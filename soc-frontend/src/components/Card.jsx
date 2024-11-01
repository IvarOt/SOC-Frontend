import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import { CreateCardRequest, EditCardRequest } from '../models/CardModel';

function getContrastYIQ(hexColor) {
    hexColor = hexColor.replace("#", "");
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 150 ? "black" : "white";
}

export function Card({ card }) {
    const textColor = getContrastYIQ(card.color);
    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="card bg-info bg-gradient px-3" style={{color: textColor}}>
                    <div className='card-header d-flex flex-row align-items-center px-0'>
                        <h1 className="d-flex flex-grow-1">{card.name}</h1>
                    </div>
                    <div className="bg-light bg-gradient d-flex justify-content-center align-items-center shadow-lg">
                        <img className='img-fluid' src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1059190-001chasnowtroll191101v083asc300-1280.jpg?itok=7izqoYm1" alt="placeholder"/>
                    </div>
                    <div className='card-footer px-0'>
                        <p className="mb-2"><img width="30" height="30" src="https://img.icons8.com/fluency/48/hearts.png" alt="hearts" /> {card.hp}</p>
                        <p className="mb-2"><img width="30" height="30" src="https://img.icons8.com/windows/32/sword.png" alt="sword" /> {card.dmg}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export function CardModal({ card = null, isEdit = false, createCard, editCard }) {
    const [name, setName] = useState(card ? card.name : ""); 
    const [hp, setHp] = useState(card? card.hp : 0);
    const [dmg, setDmg] = useState(card? card.dmg : 0);
    const [color, setColor] = useState(card? card.color : "#FFFFFF");

    const [textColor, setTextColor] = useState(getContrastYIQ(color));

    useEffect(() => {
        setTextColor(getContrastYIQ(color));
    }, [color]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            const editCardRequest = new EditCardRequest(card.id, name, hp, dmg, color);
            editCard(editCardRequest)
        }
        else if (!isEdit) {
            const createCardRequest = new CreateCardRequest(name, hp, dmg, color);
            createCard(createCardRequest);
        }
        handleClose();
    };

    return (
        <>
            <button className={isEdit ? "btn btn-dark me-2" : "btn btn-primary me-2"} onClick={handleShow}>
                {isEdit ? <FontAwesomeIcon icon={faPenToSquare} /> : <FontAwesomeIcon icon={faPlus} />}
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body style={{ backgroundColor: color, color: textColor }}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <div className='d-flex flex-row'>
                                <label htmlFor="name" className="form-label flex-grow-1">Name</label>
                                <button type="button" className="btn-close" onClick={handleClose} />
                            </div>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control border-dark bg-dark text-white"
                                required
                            />
                        </div>
                        <div className="bg-dark d-flex justify-content-center align-items-center shadow-lg">
                            <img
                                className='img-fluid'
                                src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1059190-001chasnowtroll191101v083asc300-1280.jpg?itok=7izqoYm1"
                                alt="Card Image"
                            />
                        </div>
                        <div className='modal-footer d-flex flex-column justify-content-start'>
                            <div className='d-flex flex-row align-content-center w-100'>
                                <img className='me-1' width="20" height="20" src="https://img.icons8.com/fluency/48/hearts.png" alt="hearts" />
                                <label htmlFor="hp" className="form-label">HP</label>
                            </div>
                            <input
                                type="number"
                                value={hp}
                                onChange={(e) => setHp(e.target.value)}
                                className="form-control border-dark bg-dark text-white"
                                required
                            />
                            <div className='d-flex flex-row align-content-center w-100'>
                                <img className='me-1' width="20" height="20" src="https://img.icons8.com/windows/32/sword.png" alt="sword" />
                                <label htmlFor="dmg" className="form-label">DMG</label>
                            </div>
                            <input
                                type="number"
                                value={dmg}
                                onChange={(e) => setDmg(e.target.value)}
                                className="form-control border-dark bg-dark text-white"
                                required
                            />
                            <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
                            <Form.Control
                                type="color"
                                value={color}
                                title="Choose your color"
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            {isEdit ? "Edit Card" : "Create Card"}
                        </button>
                        {isEdit && <input type='hidden' value={card.id} />}
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export function AdminCard({ card, deleteCard, editCard, createCard }) {
    const textColor = getContrastYIQ(card.color);
    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="card bg-gradient px-3 shadow-lg border border-dark" style={{ backgroundColor: card.color, color: textColor }}>
                    <div className='card-header d-flex flex-row align-items-center px-0'>
                        <h3 className="d-flex flex-grow-1">{card.name}</h3>
                        <CardModal card={card} isEdit={true} editCard={editCard} createCard={createCard} />
                        <button className='btn btn-danger' onClick={() => deleteCard(card)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                    <div className="bg-light bg-gradient d-flex justify-content-center align-items-center shadow-lg">
                        <img className='img-fluid' src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1059190-001chasnowtroll191101v083asc300-1280.jpg?itok=7izqoYm1" />
                    </div>
                    <div className='card-footer px-0'>
                        <p className="mb-2"><img width="30" height="30" src="https://img.icons8.com/fluency/48/hearts.png" alt="hearts" /> {card.hp}</p>
                        <p className="mb-2"><img width="30" height="30" src="https://img.icons8.com/windows/32/sword.png" alt="sword" /> {card.dmg}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
