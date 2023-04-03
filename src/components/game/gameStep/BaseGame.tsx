import Button from "components/common/base/Button";
import { useGameScore } from "context/game/GameScoreContext";
import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import CountDown from "../countDown/CountDown";
import Score from "../score/Score";

type BaseGameProps = {
  isPlay: boolean;
  currentWord: string;
  onChangePresenters: () => void;
  onChangePlay: () => void;
};

const BaseGame = ({
  isPlay,
  currentWord,
  onChangePresenters,
  onChangePlay,
}: BaseGameProps) => {
  const [inputWord, setInputWord] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { upScore } = useGameScore();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputWord === currentWord) {
      onChangePresenters();
      setInputWord("");
      upScore();
    }
  };

  return (
    <StyledContainer>
      <Button onClick={onChangePlay}>pause</Button>
      <Score />
      <CountDown isPlay={isPlay} onChangePlay={onChangePlay} />
      <StyledPresenter>{currentWord}</StyledPresenter>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter the above words..."
          ref={inputRef}
          value={inputWord}
          onChange={handleInputChange}
        />
      </StyledForm>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 35rem;
    margin-bottom: 3rem;
    border: 12px solid #fff;
    border-radius: 12px;
    background-color: ${theme.colors.pink};
  `}
`;

const StyledPresenter = styled.p`
  ${({ theme }) => css`
    ${theme.typo.heavy32};
  `};
`;

const StyledForm = styled.form`
  ${({ theme }) => css`
    width: 50%;
    input {
      width: 100%;
      padding: 1rem 0 1rem 1.2rem;
      border-radius: 4px;
      ${theme.typo.regular14};

      ::placeholder {
        color: ${theme.colors.gray500};
      }
    }
  `};
`;

export default BaseGame;
