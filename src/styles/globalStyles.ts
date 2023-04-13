import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-display: swap;
    font-family: 'nanumSquareNeo';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/NanumSquareNeo/ttf/NanumSquareNeo-aLt.ttf');
  }
  @font-face {
    font-display: swap;
    font-family: 'nanumSquareNeo';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/NanumSquareNeo/ttf/NanumSquareNeo-bRg.ttf');
  }
  @font-face {
    font-display: swap;
    font-family: 'nanumSquareNeo';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/NanumSquareNeo/ttf/NanumSquareNeo-cBd.ttf');
  }
  @font-face {
    font-display: swap;
    font-family: 'nanumSquareNeo';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/NanumSquareNeo/ttf/NanumSquareNeo-dEb.ttf');
  }
  @font-face {
    font-display: swap;
    font-family: 'nanumSquareNeo';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/NanumSquareNeo/ttf/NanumSquareNeo-eHv.ttf');
  }

  @font-face {
    font-display: swap;
    font-family: 'lato';
    font-style: normal;
    font-weight: 100;
    src: url('/fonts/Lato/ttf/Lato-Thin.ttf');
  }
  @font-face {
    font-display: swap;
    font-family: 'lato';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/Lato/ttf/Lato-Light.ttf');
  }
  @font-face {
    font-display: swap;
    font-family: 'lato';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Lato/ttf/Lato-Regular.ttf');
  }
  @font-face {
    font-display: swap;
    font-family: 'lato';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/Lato/ttf/Lato-Bold.ttf');
  }
  @font-face {
    font-display: swap;
    font-family: 'lato';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/Lato/ttf/Lato-Black.ttf');
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  html {
    font-size: 62.5%; 

    @media screen and (max-width: 1100px) {
      font-size: 52.5%;
    }
  }

  body {
    ${({ theme }) => css`
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "lato";
      background-color: ${(props) => props.theme.colors.main};
    `}
  }

  #root {
    width: 100%;
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    user-select: none;
    
    &:disabled {
      cursor: not-allowed;
    }
  }

  input,
  textarea {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    font-family: 'nanumSquareNeo';
  }

  a {
    text-decoration: none;
    font-family: 'nanumSquareNeo';
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
