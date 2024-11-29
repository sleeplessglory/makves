import styled from 'styled-components';
import {rem} from '../functions';
export const Logo = styled.img.withConfig({ //React can't process this attribute in HTML for <nav>. I prevented it from reaching the DOM.
    shouldForwardProp: (prop) => prop !== "isExpanded"})<{isExpanded: boolean}>`
    transform: translateX(${(props) => (props.isExpanded ? "0" : "200%")});
    height: ${rem(30)};
    width: ${rem(30)};
`