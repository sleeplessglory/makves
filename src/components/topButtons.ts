import styled from 'styled-components';
import {rem} from '../functions';
export const TopButtons = styled.button.withConfig({ //React can't process this attribute in HTML for <nav>. I prevented it from reaching the DOM.
    shouldForwardProp: (prop) => prop !== "isExpanded" && prop !== "isActive"})<{isExpanded: boolean, isActive: boolean}>`
    display: flex;
    align-items: center;
    padding: ${rem(10)};
    font-size: ${rem(14)};
    font-family: 'Circular Std 2';
    cursor: pointer;
    background-color: ${(props) => props.isActive
        ? props.theme.sidebarActive
        : "transparent"};
    border: none;
    border-radius: ${rem(12)};
    &:hover {
        background-color: ${(props) => props.theme.sidebarHover};
    }
    svg { //Button logos
        color: ${(props) => props.isActive
        ? props.theme.textActive
        : props.theme.textDefault};
    }
    span {
        opacity: ${(props) => (props.isExpanded ? 1 : 0)};
        color: ${(props) => props.isActive
        ? props.theme.textActive
        : props.theme.textDefault};
        margin-left: ${rem(15)};;
        position: relative;
        transform: ${(props) => (props.isExpanded ? "translateX(0)" : "translateX(-100%)")}; 
        white-space: nowrap;
    }
    &:hover span {
        color: ${(props) => props.isActive 
        ? props.theme.textActive
        : props.theme.textHover};
`;