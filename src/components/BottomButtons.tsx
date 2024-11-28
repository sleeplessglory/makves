export default function BottomButtons() {
    const bottomButtons = [ 
        { id: 1, "name": "Settings"}, 
        { id: 2, "name": "Support"}];
    return (
        <>
            {bottomButtons.map((button) =>
                <button key={button.id}>
                    <span>{button.name}</span>
                </button>
            )}
        </>
    );
};