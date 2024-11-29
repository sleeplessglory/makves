import styled from 'styled-components';
import {rem} from '../functions';
export const Title = styled.span`
    display: ${(isExpanded) => (isExpanded ? "inline" : "none")};
    font-size: ${rem(20)};
    color: ${(isExpanded) => isExpanded.theme.textLogoDefault};
    transition: color 0.5s;
`