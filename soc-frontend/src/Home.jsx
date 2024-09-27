import { Link } from "react-router-dom";
import CardList from "./CardList";

function Home() {
    return (
        <div>
            <h1>Jow</h1>
            <Link to="CardList">List of all Cards</Link>
        </div>
    );
}

export default Home;