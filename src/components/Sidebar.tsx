import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './themes';
import {Container} from './container';
import Controls from './Controls';
import {Logo} from './logo';
import logo from '../assets/logo.png';
import {Title} from './title';
import {Toggler} from './toggler';
import TopButtons from './TopButtons';
import BottomButtons from './BottomButtons';

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
                <TopButtons />
                <BottomButtons />
            </Container>
        </ThemeProvider>
    );
};