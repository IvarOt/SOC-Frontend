import { Link } from "react-router-dom";
import { useAuth } from "../authentication/AuthProvider";

function Navbar() {
    const { user, logout } = useAuth();
    return (
        <nav className="navbar bg-dark-subtle border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="d-flex flex-row align-items-center mx-4">
                    <Link to="/" className="navbar-brand"> 
                        <img src="/Logo.webp" alt="Logo" width="30" height="30" /> 
                    </Link>
                    <ul className="navbar-nav d-flex flex-row align-items-center">
                        <li className="nav-item me-4">
                            <Link to="/CardList" className="nav-link active">
                                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/bank-card-back-side.png" alt="bank-card-back-side" />Cards
                            </Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link to="/DeckListPage" className="nav-link active">
                                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/gallery.png" alt="gallery" />Decks
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="d-flex justify-content-end align-items-center ms-auto">
                    <ul className="navbar-nav d-flex flex-row align-items-center">
                        {!user ? (
                            <>
                                <li className="nav-item me-4">
                                    <Link to="/Login" className="nav-link active">
                                        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/gallery.png" alt="gallery" />Login
                                    </Link>
                                </li>
                                <li className="nav-item me-4">
                                    <Link to="/SignUp" className="nav-link active">
                                        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/gallery.png" alt="gallery" />Sign Up
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item me-4">
                                    <Link to="/Profile" className="nav-link active">
                                        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/gallery.png" alt="gallery" />Profile
                                    </Link>
                                </li>
                                <li className="nav-item me-4">
                                    <button className="btn btn-primary" onClick={() => logout()}> logout </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar