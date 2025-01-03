

export default function PlayerInfo({ player }) {
    return (
        <>
            <div className="row row-cols-2 text-dark bg-light p-2">
                <div className="col">
                    <p className="fw-bold"> {player.name}</p>
                    <p><img width="25" height="25" src="https://img.icons8.com/fluency/48/hearts.png" alt="hearts" /> {player.hp}</p>
                </div>
                <div className="col align-self-end">
                    <p><img width="25" height="25" src="https://cdn0.iconfinder.com/data/icons/cash-card-starters-colored/48/JD-03-1024.png" alt="coins" /> {player.coins}</p>
                </div>
            </div>
        </>
    )
}