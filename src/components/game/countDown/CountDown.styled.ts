import styled, { css } from "styled-components";

export const Span = styled.span`
  ${({ theme }) => css`
    ${theme.flex.row()};
    color: ${theme.colors.sub};
    font-family: "lato";
    ${theme.typo.heavy32};
  `}
`;
