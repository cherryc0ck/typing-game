import GameStep from "components/game/gameStep/GameStep";
import Keyboard from "components/keyboard/Keyboard";
import { GameModeProvider } from "context/game/GameModeContext";
import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledContainer>
      <GameModeProvider>
        <GameStep />
        <Keyboard />
      </GameModeProvider>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  width: 80rem;
  margin: 0 auto;
`;

export default Home;
