import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 1rem;
    left: 1rem;
    ${theme.flex.row()};
    gap: 0.6rem;

    button {
      ${theme.flex.rowCenter};
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
      background-color: ${theme.colors.sub};
      ${theme.typo.eBold16};
      transition: all 0.2s ease-in-out;

      :hover {
        transform: scale(1.1);
      }

      svg {
        color: ${theme.colors.main};
      }
    }
  `}
`;
