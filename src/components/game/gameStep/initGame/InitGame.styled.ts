import styled, { css } from "styled-components";

import pinkThemeImg from "@/assets/background/pinkTheme.jpg";
import darkThemeImg from "@/assets/background/darkTheme.jpg";
import purpleThemeImg from "@/assets/background/purpleTheme2.jpg";
import mintThemeImg from "@/assets/background/mintTheme.jpg";
import peachThemeImg from "@/assets/background/peachTheme.jpg";
import vanillaThemeImg from "@/assets/background/vanillaTheme.jpg";
// import lightThemeImg from "./images/lightTheme.jpg";
import greenThemeImg from "@/assets/background/greenTheme.jpg";

const BackgroundTheme = (theme: string) => css`
  ${theme === "pink" && BackgroundPink};
  ${theme === "dark" && BackgroundDark};
  ${theme === "purple" && BackgroundPurple};
  ${theme === "mint" && BackgroundMint};
  ${theme === "peach" && BackgroundPeach};
  ${theme === "vanilla" && BackgroundVanilla};
  ${theme === "light" && BackgroundLight};
  ${theme === "green" && BackgroundGreen};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(196, 196, 196, 0.2);
`;

const BackgroundPink = () => css`
  background-image: url(${pinkThemeImg});
`;

const BackgroundDark = () => css`
  background-image: url(${darkThemeImg});
`;

const BackgroundPurple = () => css`
  background-image: url(${purpleThemeImg});
`;

const BackgroundMint = () => css`
  background-image: url(${mintThemeImg});
`;

const BackgroundPeach = () => css`
  background-image: url(${peachThemeImg});
`;

const BackgroundVanilla = () => css`
  background-image: url(${vanillaThemeImg});
`;

const BackgroundLight = () => css`
  background-image: url("./images/lightTheme.jpg");
`;

const BackgroundGreen = () => css`
  background-image: url(${greenThemeImg});
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
    }
  `}
`;
