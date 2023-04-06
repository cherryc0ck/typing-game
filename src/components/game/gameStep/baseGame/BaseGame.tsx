import React, { useEffect, useRef, useState } from "react";

import { useGameScore } from "@/context/game/GameScoreContext";
import CountDown from "@/components/game/countDown/CountDown";
import Score from "@/components/game/score/Score";
import GameFuncBtns from "@/components/game/gameFuncBtns/GameFuncBtns";
import * as S from "./BaseGame.styled";

type BaseGameProps = {
  isPlay: boolean;
  currentWord: string;
  onNextWord: () => void;
  onStartGame: () => void;
  onPauseGame: () => void;
  onStopGame: () => void;
};

const BaseGame = ({
  isPlay,
  currentWord,
  onNextWord,
  onStartGame,
  onPauseGame,
  onStopGame,
}: BaseGameProps) => {
  const [inputWord, setInputWord] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { addScore } = useGameScore();

  useEffect(() => {
    inputRef.current?.focus();
    onStartGame();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputWord === currentWord) {
      onNextWord();
      setInputWord("");
      addScore();
    }
  };

  return (
    <S.Container>
      <GameFuncBtns
        isPlay={isPlay}
        onStartGame={onStartGame}
        onStopGame={onStopGame}
        onPauseGame={onPauseGame}
      />
      <Score />
      <CountDown
        isPlay={isPlay}
        onStartGame={onStartGame}
        onStopGame={onStopGame}
      />
      <S.Word>{currentWord}</S.Word>
      <S.Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter the above words..."
          ref={inputRef}
          value={inputWord}
          onChange={handleInputChange}
        />
      </S.Form>
    </S.Container>
  );
};

export default BaseGame;
