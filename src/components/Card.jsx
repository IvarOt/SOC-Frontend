import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import { DeleteConfirmationModal } from './DeleteConfirmationModal';

function getContrastYIQ(hexColor) {
    hexColor = hexColor.replace("#", "");
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 150 ? "black" : "white";
}

export function ShopCard({ card, purchaseCard, isPurchased }) {
    const textColor = getContrastYIQ(card.color);
    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="card bg-gradient px-3 border border-dark col" style={{ backgroundColor: card.color, color: textColor }}>
                    <div className='card-header d-flex flex-row align-items-center px-0'>
                    <h5 className="d-flex flex-grow-1 text-truncate">{card.name}</h5>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <img
                            className='img-fluid'
                            src={card.imageURL}
                            style={{ width: "100%", height: "300px", objectFit: "cover" }}
                        />
                    </div>
                    <div className='card-footer px-0'>
                        <p className="mb-2"><img width="30" height="30" src="https://img.icons8.com/fluency/48/hearts.png" alt="hearts" /> {card.hp}</p>
                        <p className="mb-2"><img width="30" height="30" src="https://img.icons8.com/windows/32/sword.png" alt="sword" /> {card.dmg}</p>
                        <p className="mb-2"><img width="30" height="30" src="https://cdn0.iconfinder.com/data/icons/cash-card-starters-colored/48/JD-03-1024.png" alt="coins" /> {card.cost}</p>
                        <button className="btn btn-warning w-100 mb-3 border border border-dark" onClick={() => purchaseCard(card.id)} disabled={isPurchased ? true : false}>Purchase</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export function GameCard({ card }) {
    const textColor = getContrastYIQ(card.card.color);
    return (
        <>
            <div className="col">
                <div className="card bg-gradient px-3 shadow-lg border border-dark" style={{ backgroundColor: card.card.color, color: textColor }}>
                    <div className='card-header d-flex flex-row align-items-center px-0'>
                    <h5 className="d-flex flex-grow-1 text-truncate">{card.card.name}</h5>
                    </div>
                    <div className="bg-light bg-gradient d-flex justify-content-center align-items-center shadow-lg">
                        <img
                            className='img-fluid'
                            src={card.card.imageURL}
                            style={{ width: "100%", height: "300px", objectFit: "cover" }}
                        />
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
    const imagePlaceholder = "https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg"
    const [name, setName] = useState(card ? card.name : "");
    const [hp, setHp] = useState(card ? card.hp : 0);
    const [dmg, setDmg] = useState(card ? card.dmg : 0);
    const [color, setColor] = useState(card ? card.color : "#FFFFFF");
    const [image, setImage] = useState(null);
    const [cost, setCost] = useState(card ? card.cost : 0);
    const [textColor, setTextColor] = useState(getContrastYIQ(color));
    const [imagePreview, setImagePreview] = useState(card ? card.imageURL : imagePlaceholder);

    useEffect(() => {
        setTextColor(getContrastYIQ(color));
    }, [color]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const hanleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            setImage(selectedImage);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(selectedImage);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            const formData = new FormData();
            formData.append("Id", card.id);
            formData.append("Name", name);
            formData.append("HP", hp);
            formData.append("DMG", dmg);
            formData.append("Color", color);
            formData.append("Cost", cost);
            if (image) {
                formData.append("Image", image);
            }
            editCard(formData)
        }
        else if (!isEdit) {
            const formData = new FormData();
            formData.append("Name", name);
            formData.append("HP", hp);
            formData.append("DMG", dmg);
            formData.append("Color", color);
            formData.append("Cost", cost);
            if (image) {
                formData.append("Image", image);
            }
            createCard(formData);
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
                        <div className="bg-light bg-gradient d-flex justify-content-center align-items-center shadow-lg">
                            <img
                                className='img-fluid'
                                src={imagePreview}
                                alt="Card Image"
                                style={{ maxHeight: "300px", objectFit: "cover", width: "100%", height: "100%" }}
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
                            <div className='d-flex flex-row align-content-center w-100'>
                                <img className='me-1' width="20" height="20" src="https://cdn0.iconfinder.com/data/icons/cash-card-starters-colored/48/JD-03-1024.png" alt="coins" />
                                <label htmlFor="cost" className="form-label">Cost</label>
                            </div>
                            <input
                                type="number"
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
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
                            <Form.Control
                                type="file"
                                title="Upload an Image"
                                accept="image/*"
                                onChange={hanleImageChange}
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
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <>
            <DeleteConfirmationModal show={showDeleteModal} onClose={() => setShowDeleteModal(false)} onConfirm={() => deleteCard(card)} />
            <div className="col-md-3 mb-4">
                <div className="card bg-gradient px-3 shadow-lg border border-dark" style={{ backgroundColor: card.color, color: textColor }}>
                    <div className='card-header d-flex flex-row align-items-center px-0'>
                        <h5 className="d-flex flex-grow-1 text-truncate" style={{ maxWidth: "calc(100% - 80px)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{card.name}</h5>
                        <CardModal card={card} isEdit={true} editCard={editCard} createCard={createCard} />
                        <button className='btn btn-danger' onClick={() => setShowDeleteModal(true)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                    <div className="bg-light bg-gradient d-flex justify-content-center align-items-center shadow-lg">
                        <img
                            className='img-fluid'
                            src={card.imageURL}
                            style={{ width: "100%", height: "300px", objectFit: "cover" }}
                        />
                    </div>
                    <div className='card-footer px-0'>
                        <p className="mb-2"><img width="30" height="30" src="https://img.icons8.com/fluency/48/hearts.png" alt="hearts" /> {card.hp}</p>
                        <p className="mb-2"><img width="30" height="30" src="https://img.icons8.com/windows/32/sword.png" alt="sword" /> {card.dmg}</p>
                        <p className="mb-2"><img width="30" height="30" src="https://cdn0.iconfinder.com/data/icons/cash-card-starters-colored/48/JD-03-1024.png" alt="coins" /> {card.cost}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
