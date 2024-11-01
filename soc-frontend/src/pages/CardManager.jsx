import { CardModal, AdminCard } from '../components/Card';
import { useGetCards, useCreateCard, useEditCard, useDeleteCard } from '../hooks/CardHooks';

export default function CardManager() {
    const { cards, refreshItems, isLoading } = useGetCards();
    const { createCard } = useCreateCard(refreshItems);
    const { editCard } = useEditCard(refreshItems);
    const { deleteCard } = useDeleteCard(refreshItems);

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
    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className='flex-grow-1 text-center'>
                </div>
                <CardModal createCard={createCard} isEdit={false} />
            </div>

            {cards.length > 0 ? (<div className="row g-4">
                {cards.map((card, index) => {
                    return (
                        <AdminCard key={index} card={card} deleteCard={deleteCard} editCard={editCard} />
                    );
                })}
            </div>) : (
                <h1 className='text-white'>No cards available...</h1>
            )}
        </div>
    )
}



