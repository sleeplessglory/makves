export default function TopButtons() {
    const topButtons = [
        { id: 1, "name": "Dashboard"}, 
        { id: 2, "name": "Sales"}, 
        { id: 3, "name": "Costs"}, 
        { id: 4, "name": "Payments"}, 
        { id: 5, "name": "Finances"}, 
        { id: 6, "name": "Messages"}];
    return (
        <>
            {topButtons.map((button) =>
                <button key={button.id}>
                    <span>{button.name}</span>
                </button>
            )}
        </>
    );
};