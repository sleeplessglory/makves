import styled from 'styled-components';
import {rem} from '../functions';
export const Title = styled.span.withConfig({ //React can't process this attribute in HTML for <nav>. I prevented it from reaching the DOM.
    shouldForwardProp: (prop) => prop !== "isExpanded"})<{isExpanded: boolean}>`
    opacity: ${(props) => (props.isExpanded ? 1 : 0)};
    transform: ${(props) => (props.isExpanded ? "translateX(0)" : "translateX(100%)")};
    margin-left: ${rem(12)};
    font-size: ${rem(20)};
    color: ${(props) => props.theme.textLogoDefault};
`