import { GameScoreProvider } from "context/game/GameScoreContext";
import React, { useState } from "react";
import type { GameMode } from "types/game";
import BaseGame from "./BaseGame";
import InitGame from "./InitGame";

const GameStep = () => {
  const [gameMode, setGameMode] = useState<GameMode>("init");
  const [presenters, setPresenters] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const handleSetGameMode = (gameMode: GameMode) => () => {
    setGameMode(gameMode);
  };

  const handleSetPresenters = (presenters: string[]) => {
    setPresenters(presenters);
    setCurrentWord(presenters[0]);
  };
  const handleChangePreseners = () => {
    setPresenters((prev) => {
      prev.shift();
      return prev;
    });
    setCurrentWord(presenters[0]);
  };

  const handleSetIsPlay = () => {
    setIsPlay(!isPlay);
  };

  const renderGame = (gameMode: GameMode) => {
    switch (gameMode) {
      case "base":
        return (
          <BaseGame
            isPlay={isPlay}
            currentWord={currentWord}
            onChangePresenters={handleChangePreseners}
            onChangePlay={handleSetIsPlay}
          />
        );
      default:
        return (
          <InitGame
            onSetPresenters={handleSetPresenters}
            onSetGameMode={handleSetGameMode}
          />
        );
    }
  };

  return <GameScoreProvider>{renderGame(gameMode)}</GameScoreProvider>;
};

export default GameStep;
