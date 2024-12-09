import { blurredBackground } from "../BackgroundStyling";

function Home() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column mt-5">
                <h1 className="text-center">Welcome to Saga Of Cards!</h1>
            </div>
            <div style={blurredBackground("/home-background.webp")} />
            <div className="m-5 d-flex flex-row" style={{ position: 'relative', zIndex: 2 }}>
                <div className="flex-grow-1">
                    <header className="text-white text-center py-5">
                        <div className="container">
                            <h1 className="display-4 fw-bold">Welcome to Saga of Cards, the Ultimate Turn-Based Card Game!</h1>
                        </div>
                    </header>
                    <div className="container my-5">
                        <p className="lead">Step into a world where strategy, skill, and cunning collide in thrilling battles! <strong>Saga of Cards</strong> offers a unique, turn-based experience where every decision counts. Collect powerful cards, build your ultimate deck, and face off against friends or AI opponents in epic duels.</p>

                        <p className="mb-4">Whether you're looking to challenge yourself, unlock new quests, or simply enjoy a relaxing game, <strong>Saga of Cards</strong> is your new go-to card battler.</p>

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div className="col">
                                <div className="card text-center shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">Build Your Deck</h5>
                                        <p className="card-text">Choose from a variety of cards, each with its own unique abilities.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card text-center shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">Engage in Tactical Combat</h5>
                                        <p className="card-text">Outthink and outplay your opponent with strategic moves.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card text-center shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">Compete or Cooperate</h5>
                                        <p className="card-text">Play against AI and compete for the win in exciting matches.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;