import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    ${theme.flex.row()};
    min-width: 17.5rem;
    padding: 1rem 2.2rem;
    border: 1px solid ${theme.colors.sub};
    border-radius: ${theme.radius.basic};
    background-color: ${theme.colors.main};
    color: ${theme.colors.sub};
    ${theme.typo.heavy18};
    transition: scale 0.2s ease-in-out;
    :hover {
      scale: 1.05;
    }
  `}
`;
