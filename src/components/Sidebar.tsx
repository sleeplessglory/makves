import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './themes';
import {Container} from './container';
import {Head} from './head';
import {Logo} from './logo';
import logo from '../assets/logo.png';
import {Title} from './title';
import {Toggler} from './toggler';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {TopButtonsContainer} from './topButtonsContainer';
import {TopButtons} from './topButtons';
import {BottomButtonsContainer} from './bottomButtonsContainer';
import {BottomButtons} from './bottomButtons';
import {faHouse, faChartLine, faChartColumn, faWallet, faChartPie, faEnvelope, faSliders, faPhoneVolume} from '@fortawesome/free-solid-svg-icons';

type SidebarProps = {
    colour: string
}

export default function Sidebar({colour}: SidebarProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const topButtons = [
        { title: "Home", icon: faHouse, path: "/" },
        { title: "Sales", icon: faChartLine, path: "/sales" },
        { title: "Costs", icon: faChartColumn, path: "/costs" },
        { title: "Payments", icon: faWallet, path: "/payments" },
        { title: "Finances", icon: faChartPie, path: "/finances" },
        { title: "Messages", icon: faEnvelope, path: "/messages" }];
    const bottomButtons = [ 
        { title: "Settings", icon: faSliders, path: "/settings" },
        { title: "Support", icon: faPhoneVolume, path: "/support" }];
    return (
        <ThemeProvider theme={colour === "light" ? lightTheme : darkTheme}>
            <Container isExpanded={isExpanded}>
                <Head>
                    <Logo src={logo} />
                    <Title>TensorFlow</Title>
                    <Toggler onClick={() => setIsExpanded((prev) => !prev)} isExpanded={isExpanded}>
                        {isExpanded ? "<" : ">"}
                    </Toggler>
                </Head>
                <TopButtonsContainer>
                    {topButtons.map((button, index) =>
                        <TopButtons key={index}>
                            <FontAwesomeIcon icon={button.icon} />
                            <span>{button.title}</span>
                        </TopButtons>
                    )}
                </TopButtonsContainer>
                <BottomButtonsContainer>
                    {bottomButtons.map((button, index) =>
                        <BottomButtons key={index}>
                            <FontAwesomeIcon icon={button.icon} />
                            <span>{button.title}</span>
                        </BottomButtons>
                    )}
                </BottomButtonsContainer>
            </Container>
        </ThemeProvider>
    );
};