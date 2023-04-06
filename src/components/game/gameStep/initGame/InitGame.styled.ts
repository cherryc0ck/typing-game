import styled, { css } from "styled-components";

import background from "@/assets/background/background2.jpg";

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.col()}
    width: 100%;
    height: 35rem;
    margin-bottom: 3rem;
    border: 1.2rem solid #fff;
    border-radius: ${theme.radius.basic};

    ::after {
      content: "";
      position: absolute;
      z-index: -1;
      display: block;
      width: 100%;
      height: 35rem;
      background: url(${background}) center, rgba(196, 196, 196, 0.2);
      opacity: 0.6;
    }
  `}
`;
