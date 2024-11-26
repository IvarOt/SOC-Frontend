import { useGetPlayer } from "../hooks/PlayerHooks"

export default function Profile() {
    const { player, isLoading } = useGetPlayer();

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
    else {
        return (
            <>
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <div className="col col-lg-10">
                        <div className="card bg-dark border border-black text-white shadow-lg">
                            <div className="row">
                                <div className="col-md-3 gradient-custom text-center pb-3 bg-dark bg-gradient">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                        alt="Avatar" className="img-fluid my-5" />
                                    <h5>{player.username}</h5>
                                    <p>{player.email}</p>
                                    <i className="far fa-edit mb-5"></i>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4 overflow-auto" style={{ maxHeight: '75vh', minHeight: '75vh' }}>
                                        <h6>Match history</h6>
                                        <div className='border my-3 p-3 border-danger'>
                                            <div className="d-flex justify-content-between">
                                                <span>opponent: AI</span>
                                                <span>16-10-2024</span>
                                            </div>
                                            <div>Lost</div>
                                        </div>
                                        <div className='border p-3 border-success'>
                                            <div className="d-flex justify-content-between">
                                                <span>opponent: AI</span>
                                                <span>16-10-2024</span>
                                            </div>
                                            <div>Won</div>
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