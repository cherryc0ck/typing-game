import styled, { css } from "styled-components";

export const ThemeContainer = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 1rem;
  `}
`;
