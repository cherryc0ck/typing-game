import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    ${theme.flex.col()};

    svg {
      width: 2.6rem;
      height: 2.6rem;
      color: ${theme.colors.sub};
    }

    span {
      ${theme.flex.row()};
      gap: 0.5rem;
      color: ${theme.colors.sub};
      ${theme.typo.regular12};
    }

    a {
      color: ${theme.colors.sub};
      ${theme.typo.bold14};
    }
  `};
`;
