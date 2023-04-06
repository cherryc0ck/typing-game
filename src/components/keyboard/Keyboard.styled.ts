import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.col()};
    gap: 0.6rem;
    padding: 1.4rem;
    background: linear-gradient(
        95.15deg,
        rgba(255, 255, 255, 0.3) 2.86%,
        rgba(255, 255, 255, 0) 30.59%,
        rgba(255, 255, 255, 0.3) 48.18%,
        rgba(255, 255, 255, 0.243) 64.3%,
        rgba(255, 255, 255, 0.3) 96.67%
      ),
      #fff;
    /* #c4c4c4; */
    box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.25);
    border-radius: ${theme.radius.big};

    ul {
      display: flex;
      gap: 0.6rem;
    }
  `}
`;
