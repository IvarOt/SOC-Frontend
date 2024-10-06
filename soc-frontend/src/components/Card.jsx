import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteCard, editCard, createCard } from "../services/CardService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

export function Card({ card }) {
    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="card bg-info bg-gradient text-dark px-3">
                    <div className='card-header d-flex flex-row align-items-center px-0'>
                        <h1 className="d-flex flex-grow-1">{card.name}</h1>
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
    )
}

export function CardModal({ card = null, isEdit = false }) {
    const [cardData, setCardData] = useState(card || { name: "", hp: 0, dmg: 0 });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEdit) {
            await editCard(cardData);
        } else {
            await createCard(cardData);
        }
        handleClose();
        location.reload();
    };

    return (
        <>
            <button className={isEdit ? "btn btn-dark me-2" : "btn btn-primary me-2"} onClick={handleShow}>
                {isEdit ? <FontAwesomeIcon icon={faPenToSquare} /> : <FontAwesomeIcon icon={faPlus} />}
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body className='bg-info text-dark'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <div className='d-flex flex-row'>
                                <label htmlFor="name" className="form-label flex-grow-1">Name</label>
                                <button type="button" className="btn-close" onClick={handleClose} />
                            </div>
                            <input
                                type="text"
                                value={cardData.name}
                                onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
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
                                value={cardData.hp}
                                onChange={(e) => setCardData({ ...cardData, hp: e.target.value })}
                                className="form-control border-dark bg-dark text-white"
                                required
                            />
                            <div className='d-flex flex-row align-content-center w-100'>
                                <img className='me-1' width="20" height="20" src="https://img.icons8.com/windows/32/sword.png" alt="sword" />
                                <label htmlFor="dmg" className="form-label">DMG</label>
                            </div>
                            <input
                                type="number"
                                value={cardData.dmg}
                                onChange={(e) => setCardData({ ...cardData, dmg: e.target.value })}
                                className="form-control border-dark bg-dark text-white"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            {isEdit ? "Update" : "Create"} Card
                        </button>
                        {isEdit && <input type='hidden' value={cardData.id} />}
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export function AdminCard({ card }) {
    const handleDelete = () => {
        deleteCard(card.id);
        location.reload();
    };
    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="card bg-info bg-gradient text-dark px-3 shadow-lg border border-dark">
                    <div className='card-header d-flex flex-row align-items-center px-0'>
                        <h3 className="d-flex flex-grow-1">{card.name}</h3>
                        <CardModal card={card} isEdit={true} />
                        <button className='btn btn-danger' onClick={handleDelete}>
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
