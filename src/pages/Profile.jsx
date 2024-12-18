import { useGetPlayer, useChangeAvatar } from "../hooks/PlayerHooks"
import { blurredBackground } from "../BackgroundStyling";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";


export default function Profile() {
    const { player, isLoading, matchHistory, getPlayer } = useGetPlayer();
    const { changeAvatar } = useChangeAvatar();
    const [show, setShow] = useState(false);
    const avatars = [
        'https://res.cloudinary.com/dnk25qb6c/image/upload/v1733925230/profile_9.jpg',
        'https://res.cloudinary.com/dnk25qb6c/image/upload/v1733925203/profile_8.jpg',
        'https://res.cloudinary.com/dnk25qb6c/image/upload/v1733925156/profile_7.jpg',
        'https://res.cloudinary.com/dnk25qb6c/image/upload/v1733925112/profile_6.jpg',
        'https://res.cloudinary.com/dnk25qb6c/image/upload/v1733925063/profile_5.jpg',
        'https://res.cloudinary.com/dnk25qb6c/image/upload/v1733925045/profile_4.jpg',
        'https://res.cloudinary.com/dnk25qb6c/image/upload/v1733925026/profile_3.jpg',
        'https://res.cloudinary.com/dnk25qb6c/image/upload/v1733925000/profile_2.jpg',
        'https://res.cloudinary.com/dnk25qb6c/image/upload/v1733924960/profile_1.jpg',
    ];

    const handleAvatarChange = async (avatar) => {
        await changeAvatar(avatar, getPlayer);
        setShow(false);
    }

    const handleClose = () => setShow(false);
    if (isLoading) {
        return (
            <>
                <div className='d-flex justify-content-center mt-5'>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        )
    }
    else if (player) {
        return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body className="bg-dark">
                        <h1 className="text-white">Choose your new avatar!</h1>
                        <div className="container">
                            <div className="row">
                                {avatars.map((avatar, index) => (
                                    <div key={index} className="p-2 col-4">
                                        <img
                                            src={avatar}
                                            alt={`Avatar ${index + 1}`}
                                            className="img-thumbnail"
                                            style={{ width: '150px', height: '150px', cursor: 'pointer' }}
                                            onClick={() => handleAvatarChange(avatar)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

                <div style={blurredBackground(player.profileAvatar)} />
                <div className="row d-flex justify-content-center align-items-center mt-5" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="col col-lg-10">
                        <div className="card bg-dark border border-black text-white shadow-lg">
                            <div className="row">
                                <div className="col-md-3 gradient-custom text-center pb-3 bg-dark bg-gradient">
                                    <img src={player.profileAvatar}
                                        alt="Avatar" className="img-fluid mt-5 mb-3" />
                                    <button onClick={() => setShow(true)} className="btn btn-secondary mb-2">Change avatar</button>
                                    <h5>{player.username}</h5>
                                    <p>{player.email}</p>
                                    <i className="far fa-edit mb-5"></i>
                                </div>
                                <div className="col-md-8 mt-2">
                                    <div className="card-body p-4" >
                                        <h5>Match history</h5>
                                        {matchHistory.length === 0 && <div>No matches found.</div>}
                                        <div className=" overflow-auto" style={{ maxHeight: '75vh', minHeight: '75vh' }}>
                                            {matchHistory.map((match, index) => {
                                                return (
                                                    <div key={index} className={`border mb-3 p-3 border-${match.didWin ? 'success' : 'danger'} border-2 me-3 bg-${match.didWin ? 'success' : 'danger'} `}>
                                                        <div className="d-flex justify-content-between">
                                                            <span>Opponent: <b>{match.opponentName}</b></span>
                                                            <span>{new Date(match.dateTime).toLocaleString() }</span>
                                                        </div>
                                                        <div>{match.didWin ? 'Won :)' : 'Lost :('}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}