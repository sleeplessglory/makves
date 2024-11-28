import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './Themes';
import {Container} from './Container';
import Controls from './Controls';
import {Logo} from './Logo';
import logo from '../assets/logo.png';
import {Title} from './Title';
import {Toggler} from './Toggler';
import Buttons from './Buttons';

type SidebarProps = {
    colour: string,
}

export default function Sidebar({colour}: SidebarProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <ThemeProvider theme={colour === "light" ? lightTheme : darkTheme}>
            <Container isExpanded={isExpanded}>
                <Controls />
                <Logo src={logo} />
                <Title><span>Technifly</span></Title>
                <Toggler onClick={() => setIsExpanded((prev) => !prev)}>
                    {isExpanded ? "<" : ">"}
                </Toggler>
                <Buttons />
            </Container>
        </ThemeProvider>
    );
};