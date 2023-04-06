import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    padding: 1rem 2rem;

    h1 {
      margin-bottom: 2rem;
      background: -webkit-linear-gradient(-70deg, #189cc4 0%, red 100%);
      background-clip: text;
      font-family: "lato";
      ${theme.typo.heavy32};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-box-decoration-break: clone;
      -webkit-background-clip: text;
    }
  `}
`;
