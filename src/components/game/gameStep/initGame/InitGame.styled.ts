import styled, { css } from "styled-components";

import pinkThemeImg from "@/assets/background/pinkTheme.jpg";
import darkThemeImg from "@/assets/background/darkTheme.jpg";

const BackgroundTheme = (theme: string) => css`
  ${theme === "pink" && BackgroundPink};
  ${theme === "dark" && BackgroundDark};
`;

const BackgroundPink = () => css`
  background: url(${pinkThemeImg}) center/cover no-repeat,
    rgba(196, 196, 196, 0.2);
`;

const BackgroundDark = () => css`
  background: url(${darkThemeImg}) center/cover no-repeat,
    rgba(196, 196, 196, 0.2);
`;

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.col()}
    z-index: 1;
    gap: 1.2rem;
    width: 100%;
    height: 35rem;
    margin-bottom: 3rem;
    border: 1.2rem solid ${theme.colors.sub};
    border-radius: ${theme.radius.basic};
    background-color: pink;

    ::after {
      content: "";
      position: absolute;
      z-index: -1;
      display: block;
      width: 100%;
      height: 100%;
      ${BackgroundTheme(theme.name)};
      opacity: 0.9;
    }
  `}
`;
