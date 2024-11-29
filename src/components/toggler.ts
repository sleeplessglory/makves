import styled from 'styled-components';
import {rem} from '../functions';
export const Toggler = styled.button.withConfig({ //React can't process this attribute in HTML for <nav>. I prevented it from reaching the DOM.
    shouldForwardProp: (prop) => prop !== "isExpanded"})<{isExpanded: boolean}>`
    position: absolute;
    color: ${(props) => props.theme.textDefault};
    left: ${(props) => (props.isExpanded ? rem(190) : rem(80))};
    width: ${rem(26)};
    height: ${rem(26)};
    padding: ${rem(4)};
    border: none;
    border-radius: 50%;
    background-color: ${(props) => props.isExpanded 
        ? props.theme.togglerActive 
        : props.theme.togglerDefault};
    text-align: center;
    cursor: pointer;
    &:hover {
        cursor: pointer;
    }
`