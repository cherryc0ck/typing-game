import styled, { css } from "styled-components";

export const ThemeContainer = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    flex-wrap: wrap;
    gap: 1rem;
  `}
`;
