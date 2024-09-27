import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar bg-dark-subtle border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="d-flex flex-row align-items-center mx-4 justify-content-start">
                    <Link to="/" className="navbar-brand"> <img src="/vite.svg" alt="Logo" width="30" height="30" /> </Link>
                    <ul className="navbar-nav d-flex flex-row align-items-center">
                        <li className="nav-item">
                            <Link to="/CardList" className="nav-link active">Cards</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/CardList" className="nav-link active">Decks</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="navbar-brand"> <img src="/johnny.jpg" alt="Logo" width="30" height="30" /> </Link>
            </div>
        </nav>
    );
}

export default Navbar