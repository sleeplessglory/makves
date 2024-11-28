export default function Buttons() {
    const buttons = [
        { id: 1, "name": "Dashboard"}, 
        { id: 2, "name": "Sales"}, 
        { id: 3, "name": "Costs"}, 
        { id: 4, "name": "Payments"}, 
        { id: 5, "name": "Finances"}, 
        { id: 6, "name": "Messages"}, 
        { id: 7, "name": "Settings"}, 
        { id: 8, "name": "Support"}];
    return (
        <>
            {buttons.map((button) =>
                <button key={button.id}>
                    <span>{button.name}</span>
                </button>
            )}
        </>
    );
};