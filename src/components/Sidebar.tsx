import buttons from './Button';

type SidebarProps = {
    colour: string,
}

export default function Sidebar({colour}: SidebarProps) {
    return (
        <nav className="sidebar">
            {buttons.map((button) =>
                <button key={button.id}>
                    <span>{button.name}</span>
                </button>
            )}
        </nav>
    );
};