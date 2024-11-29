import styled from 'styled-components';
import {rem} from '../functions';
export const Toggler = styled.button.withConfig({ //React can't process this attribute in HTML for <nav>. I prevented it from reaching the DOM.
    shouldForwardProp: (isExpanded) => isExpanded !== "isExpanded",
})<{isExpanded: boolean}>`
    position: absolute;
    right: ${(isExpanded) => (isExpanded ? "-24%" : "-44%")};
    width: ${rem(26)};
    height: ${rem(26)};
    padding: ${rem(4)};
    border-radius: 50%;
    background-color: ${(isExpanded) => typeof isExpanded === 'object' && isExpanded !== null 
        ? isExpanded.theme.toggleButtonActive
        : (isExpanded as any).theme.toggleButtonDefault};
    text-align: center;
    cursor: pointer;
    transition: right 0.5s ease-in-out, background-color 0.5s ease-in-out;
    &:hover {
        background-color: ${(isExpanded) => isExpanded.theme.toggleButtonHover};
    }
`