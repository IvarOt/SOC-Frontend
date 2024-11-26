import { blurredBackground } from "../BackgroundStyling";

function Home() {
    return (
        <>
            <div style={blurredBackground("/home-background.webp")} />
            <div className="m-5 d-flex flex-row" style={{ position: 'relative', zIndex: 2 }}>
                <div className="flex-grow-1">
                    <header class="text-white text-center py-5">
                        <div class="container">
                            <h1 class="display-4 fw-bold">Welcome to Saga of Cards, the Ultimate Turn-Based Card Game!</h1>
                        </div>
                    </header>
                    <div class="container my-5">
                        <p class="lead">Step into a world where strategy, skill, and cunning collide in thrilling battles! <strong>Saga of Cards</strong> offers a unique, turn-based experience where every decision counts. Collect powerful cards, build your ultimate deck, and face off against friends or AI opponents in epic duels.</p>

                        <p class="mb-4">Whether you're looking to challenge yourself, unlock new quests, or simply enjoy a relaxing game, <strong>Saga of Cards</strong> is your new go-to card battler.</p>

                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card text-center shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title text-primary">Build Your Deck</h5>
                                        <p class="card-text">Choose from a variety of cards, each with its own unique abilities.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card text-center shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title text-primary">Engage in Tactical Combat</h5>
                                        <p class="card-text">Outthink and outplay your opponent with strategic moves.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card text-center shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title text-primary">Compete or Cooperate</h5>
                                        <p class="card-text">Play against AI and compete for the win in exciting matches.</p>
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