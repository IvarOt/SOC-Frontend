import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { ShopCard } from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';

export function ShopModal({ shop, purchaseCard }) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    return (
        <>
            <button className='btn btn-primary btn-sm' onClick={handleShow}> <FontAwesomeIcon icon={faShop} /> Shop</button>
            <Modal show={show} onHide={handleClose} size='xl' centered>
                <div className='bg-dark-subtle bg-gradient text-light'>
                    <Modal.Header closeButton className='bg-light text-black border-black'>
                        <div className='d-flex justify-content-center align-items-center w-100'>
                            <Modal.Title >
                                <h1>Shop</h1>
                            </Modal.Title>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='container'>
                            <div className='row'>
                                {
                                    shop.cardsForSale.map((card, index) => (
                                        <ShopCard
                                            key={index}
                                            card={card.card}
                                            purchaseCard={purchaseCard}
                                            isPurchased={card.isPurchased}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='border-0'>
                        <div className='d-flex justify-content-center align-items-center w-100'>
                            <button className='btn btn-dark w-25' onClick={handleClose}>Close</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}

