import styled from 'styled-components';
import {rem} from '../functions';
export const Container = styled.nav.withConfig({ //React can't process this attribute in HTML for <nav>. I prevented it from reaching the DOM.
    shouldForwardProp: (isExpanded) => isExpanded !== "isExpanded",
})<{isExpanded: boolean}>`
    display: flex;
    flex-direction: column;
    height: 90vh;
    font-family: 'Circular Std 2';
    background-color: ${(isExpanded) => isExpanded.theme.sidebarBackground};
    color: ${(isExpanded) => isExpanded.theme.textDefault};
    width: ${(isExpanded) => (isExpanded ? rem(240) : rem(70))};
    border: ${rem(7)} solid ${(isExpanded) => isExpanded.theme.borderContainer};
    border-radius: ${rem(16)};
    transition: width 0.5s ease-in-out;
    padding: ${rem(25)};
`;