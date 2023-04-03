import React from "react";
import styled, { css } from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Typing Game</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    padding: 1rem 2rem;

    h1 {
      margin-bottom: 2rem;
      background: -webkit-linear-gradient(-70deg, #189cc4 0%, red 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-box-decoration-break: clone;
      font-family: "lato";
      ${theme.typo.heavy32};
      -webkit-background-clip: text;
    }
  `}
`;

export default Header;
