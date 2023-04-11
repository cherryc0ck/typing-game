import React, { useEffect, useRef, useState } from "react";

import { useGameScore } from "@/context/game/GameScoreContext";
import CountDown from "@/components/game/countDown/CountDown";
import Score from "@/components/game/score/Score";
import GameFuncBtns from "@/components/game/gameFuncBtns/GameFuncBtns";
import WordInput from "@/components/common/input/word/WordInput";
import * as S from "./BaseGame.styled";

type BaseGameProps = {
  currentWord: string;
  onNextWord: () => void;
};

const BaseGame = ({ currentWord, onNextWord }: BaseGameProps) => {
  const [inputWord, setInputWord] = useState<string>("");
  const [isWordCheck, setIsWordCheck] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const { addScore } = useGameScore();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    vaildWordCheck(e.target.value);
    setInputWord(e.target.value);
  };

  const vaildWordCheck = (value: string) => {
    currentWord.includes(value) ? setIsWordCheck(true) : setIsWordCheck(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputWord === currentWord) {
      onNextWord();
      setInputWord("");
      addScore();
      setIsWordCheck(true);
    }
  };

  return (
    <S.Container>
      <GameFuncBtns />
      <Score />
      <CountDown />
      <S.Word>{currentWord}</S.Word>
      <S.Form onSubmit={handleSubmit}>
        <WordInput
          placeholder="Please enter the above words..."
          ref={inputRef}
          isWordCheck={isWordCheck}
          value={inputWord}
          onChange={handleInputChange}
        />
      </S.Form>
    </S.Container>
  );
};

export default BaseGame;
