import {useState} from 'react';
import Container from './Container';
import Controls from './Controls';
import Logo from './Logo';
import Title from './Title';
import Toggler from './Toggler';
import Buttons from './Buttons';

type SidebarProps = {
    colour: string,
}

export default function Sidebar({colour}: SidebarProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    
    return (
        <Container isExpanded={isExpanded}>
            <Controls />
            <Logo />
            <Title><span>Technifly</span></Title>
            <Toggler onClick={() => setIsExpanded((prev) => !prev)}>
                {isExpanded ? "<" : ">"}
            </Toggler>
            <Buttons />
        </Container>
    );
};