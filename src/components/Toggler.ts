import styled from 'styled-components';
import {rem} from '../functions';
export const Toggler = styled.button.withConfig({ //React can't process this attribute in HTML for <nav>. I prevented it from reaching the DOM.
    shouldForwardProp: (isExpanded) => isExpanded !== "isExpanded"})<{isExpanded: boolean}>`
    position: absolute;
    right: ${(props) => (props.isExpanded ? "-24%" : "-44%")};
    width: ${rem(26)};
    height: ${rem(26)};
    padding: ${rem(4)};
    border-radius: 50%;
    background-color: ${(props) => props.isExpanded 
        ? props.theme.toggleButtonActive 
        : props.theme.toggleButtonDefault};
    text-align: center;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
        background-color: ${(props) => props.theme.toggleButtonHover};
    }
`