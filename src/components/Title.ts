import styled from 'styled-components';
import {rem} from '../functions';
export const Title = styled.span.withConfig({ //React can't process this attribute in HTML for <nav>. I prevented it from reaching the DOM.
    shouldForwardProp: (isExpanded) => isExpanded !== "isExpanded"})<{isExpanded: boolean}>`
    display: ${(props) => (props.isExpanded ? "inline" : "none")};
    font-size: ${rem(20)};
    color: ${(props) => props.theme.textLogoDefault};
    transition: all 0.4s;
`