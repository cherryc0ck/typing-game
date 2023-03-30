import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'nanumSquareNeo';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/NanumSquareNeo/ttf/NanumSquareNeo-aLt.ttf');
  }
  @font-face {
    font-family: 'nanumSquareNeo';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/NanumSquareNeo/ttf/NanumSquareNeo-bRg.ttf');
  }
  @font-face {
    font-family: 'nanumSquareNeo';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/NanumSquareNeo/ttf/NanumSquareNeo-cBd.ttf');
  }
  @font-face {
    font-family: 'nanumSquareNeo';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/NanumSquareNeo/ttf/NanumSquareNeo-dEb.ttf');
  }
  @font-face {
    font-family: 'nanumSquareNeo';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/NanumSquareNeo/ttf/NanumSquareNeo-eHv.ttf');
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  html {
    font-size: 62.5%; 
  }

  body {
    box-sizing: border-box;
    background: white;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
