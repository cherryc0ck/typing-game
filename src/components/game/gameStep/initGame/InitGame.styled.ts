import styled, { css } from "styled-components";

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
  background-image: url("./images/background/pinkTheme.jpg");
`;

const BackgroundDark = () => css`
  background-image: url("./images/background/darkTheme.jpg");
`;

const BackgroundPurple = () => css`
  background-image: url("./images/background/purpleTheme.jpg");
`;

const BackgroundMint = () => css`
  background-image: url("./images/background/mintTheme.jpg");
`;

const BackgroundPeach = () => css`
  background-image: url("./images/background/peachTheme.jpg");
`;

const BackgroundVanilla = () => css`
  background-image: url("./images/background/vanillaTheme.jpg");
`;

const BackgroundLight = () => css`
  background-image: url("./images/background/lightTheme.jpg");
`;

const BackgroundGreen = () => css`
  background-image: url("./images/background/greenTheme.jpg");
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
