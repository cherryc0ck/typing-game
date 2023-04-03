import React, { useEffect } from "react";
import axios from "axios";
import styled, { css } from "styled-components";

import { GameMode } from "types/game";
import background from "assets/background/background2.jpg";

type InitGameProps = {
  onSetGameMode: (gameMode: GameMode) => () => void;
  onSetPresenters: (preenters: string[]) => void;
};

const InitGame = ({ onSetGameMode, onSetPresenters }: InitGameProps) => {
  useEffect(() => {
    axios
      .get("https://random-word-api.herokuapp.com/word?number=300")
      .then((res) => {
        onSetPresenters(res.data);
      })
      .catch((error) => new Error(error));
  }, []);

  return (
    <StyledContainer>
      <button onClick={onSetGameMode("base")}>Game Start</button>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 35rem;
    margin-bottom: 3rem;
    border: 12px solid #fff;
    border-radius: 12px;

    ::after {
      content: "";
      position: absolute;
      z-index: -1;
      display: block;
      width: 100%;
      height: 350px;
      background: url(${background}) center, rgba(196, 196, 196, 0.2);
      opacity: 0.6;
    }

    button {
      padding: 1.4rem 2.2rem;
      border-radius: 1.2rem;
      background-color: ${theme.colors.pink};
      color: ${theme.colors.white};
      ${theme.typo.heavy18};
      transition: scale 0.2s ease-in-out;
      :hover {
        scale: 1.05;
      }
    }
  `}
`;

export default InitGame;
