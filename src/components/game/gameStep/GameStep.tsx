import { useState } from "react";

import { GameScoreProvider } from "@/context/game/GameScoreContext";
import BaseGame from "./baseGame/BaseGame";
import EndGame from "./endGame/EndGame";
import InitGame from "./initGame/InitGame";
import { useGameMode } from "@/context/game/GameModeContext";

const GameStep = () => {
  const [words, setWords] = useState<string[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const { gameMode } = useGameMode();

  // 단어들 세팅하는 핸들러 함수
  const handleSetWords = (words: string[]) => {
    setWords(words);
  };

  // 인덱스 값 +해주는 핸들러 함수
  const handleNextWord = () => {
    setCurrentIdx((prev) => prev + 1);
  };

  return (
    <GameScoreProvider>
      {gameMode === "base" && (
        <BaseGame currentWord={words[currentIdx]} onNextWord={handleNextWord} />
      )}
      {gameMode === "end" && <EndGame />}
      {gameMode === "init" && <InitGame onSetWords={handleSetWords} />}
    </GameScoreProvider>
  );
};

export default GameStep;
