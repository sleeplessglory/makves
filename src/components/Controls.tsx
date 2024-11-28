export default function Controls() {
    const controls = [
        {id: 1, colour: "red"},
        {id: 2, colour: "yellow"},
        {id: 3, colour: "green"},
    ];
    return (
        <>
            {controls.map((control) => 
                <button key={control.id}></button>  
            )}
        </>
    );
};