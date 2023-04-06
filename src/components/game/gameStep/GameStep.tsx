import { useState } from "react";

import type { GameMode } from "@/types/game";
import { GameScoreProvider } from "@/context/game/GameScoreContext";
import BaseGame from "./baseGame/BaseGame";
import EndGame from "./endGame/EndGame";
import InitGame from "./initGame/InitGame";

const GameStep = () => {
  const [gameMode, setGameMode] = useState<GameMode>("init");
  const [words, setWords] = useState<string[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  // 게임모드 변경하는 핸들러 함수
  const handleSetGameMode = (gameMode: GameMode) => () => {
    setGameMode(gameMode);
  };

  // 단어들 세팅하는 핸들러 함수
  const handleSetWords = (words: string[]) => {
    setWords(words);
  };

  // 인덱스 값 +해주는 핸들러 함수
  const handleNextWord = () => {
    setCurrentIdx((prev) => prev + 1);
  };

  // 게임 시작 핸들러 함수
  const handleStartGame = () => {
    setIsPlay(true);
  };

  // 게임 일시정지 핸들러 함수
  const handlePauseGame = () => {
    setIsPlay(false);
  };

  const handleStopGame = () => {
    handleSetGameMode("end");
  };

  const renderGame = (gameMode: GameMode) => {
    switch (gameMode) {
      case "base":
        return (
          <BaseGame
            isPlay={isPlay}
            currentWord={words[currentIdx]}
            onNextWord={handleNextWord}
            onStartGame={handleStartGame}
            onPauseGame={handlePauseGame}
            onStopGame={handleStopGame}
          />
        );

      case "end":
        return <EndGame />;

      default:
        return (
          <InitGame
            onSetWords={handleSetWords}
            onSetGameMode={handleSetGameMode("base")}
          />
        );
    }
  };

  return <GameScoreProvider>{renderGame(gameMode)}</GameScoreProvider>;
};

export default GameStep;
