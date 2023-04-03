import React from "react";
import styled, { css } from "styled-components";

import { useGameScore } from "context/game/GameScoreContext";

const Score = () => {
  const { score } = useGameScore();

  return (
    <StyledContainer>
      <span>{score}</span>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 1rem;
    right: 1rem;
    ${theme.flex.rowCenter};
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background-color: ${theme.colors.white};
    span {
      ${theme.typo.eBold16};
    }
  `}
`;

export default Score;
