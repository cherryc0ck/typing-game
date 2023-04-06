import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 1.4rem 2.2rem;
    border-radius: ${theme.radius.basic};
    background-color: ${theme.colors.pink};
    color: ${theme.colors.white};
    ${theme.typo.heavy18};
    transition: scale 0.2s ease-in-out;
    :hover {
      scale: 1.05;
    }
  `}
`;
