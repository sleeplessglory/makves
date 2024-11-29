import styled from 'styled-components';
import {rem} from '../functions';
export const TopButtons = styled.button.withConfig({ //React can't process this attribute in HTML for <nav>. I prevented it from reaching the DOM.
    shouldForwardProp: (isExpanded) => isExpanded !== "isExpanded"})<{isExpanded: boolean, isActive: boolean}>`
    display: flex;
    align-items: center;
    padding: ${rem(10)};
    font-family: 'Circular Std 2';
    cursor: pointer;
    background-color: ${(props) => props.isExpanded
        ? props.theme.sidebarActive
        : "transparent"};
    border: none;
    border-radius: ${rem(12)};;
    svg {
        color: ${(props) => props.isActive
        ? props.theme.textActive
        : props.theme.textDefault};
        transition: all 0.4s ease-in-out;
    }
    transition: all 0.4s;
    &:hover {
        background-color: ${(props) => props.theme.sidebarHover};
    }
    span {
        color: ${(props) => props.isActive
        ? props.theme.textActive
        : props.theme.textDefault};
        margin-left: ${rem(15)};;
        position: relative;
        transform: ${(props) => (props.isExpanded ? "translateX(0)" : "translateX(-100%)")}; 
        opacity: ${(props) => (props.isExpanded ? 1 : 0)};
        transition: all 0.4s ease-in-out;
        white-space: nowrap;
    }
    &:hover span {
        color: ${(props) => props.theme.textHover};
    }
`;