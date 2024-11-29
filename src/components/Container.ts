import styled from 'styled-components';
import {rem} from '../functions';
export const Container = styled.nav.withConfig({ //React can't process this attribute in HTML for <nav>. I prevented it from reaching the DOM.
    shouldForwardProp: (prop) => prop !== "isExpanded"})<{isExpanded: boolean}>`
    display: flex;
    flex-direction: column;
    height: 98vh;
    font-family: 'Circular Std 2';
    background-color: ${(props) => props.theme.sidebarBackground};
    color: ${(props) => props.theme.textDefault};
    width: ${(props) => (props.isExpanded ? rem(240) : rem(100))};
    transform: translateX(${(props) => (props.isExpanded ? "0" : "50%")});
    border: ${rem(7)} solid ${(props) => props.theme.borderContainer};
    border-radius: ${rem(16)};
    padding: ${rem(25)};
`;