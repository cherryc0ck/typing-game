import styled, { css } from "styled-components";

export const Span = styled.span`
  ${({ theme }) => css`
    ${theme.flex.row()};
    color: ${theme.colors.black};
    font-family: "lato";
    ${theme.typo.heavy32};
  `}
`;
