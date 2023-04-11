import { FaPause, FaPlay, FaStop } from "react-icons/fa";
import * as S from "./GameFuncBtns.styled";
import { useGameMode } from "@/context/game/GameModeContext";

const GameFuncBtns = () => {
  const { isPlay, handleSetGameMode, handleStartPlay, handleStopPlay } =
    useGameMode();

  const handleEndGame = () => {
    handleStopPlay();
    handleSetGameMode("end");
  };

  return (
    <S.Container>
      {isPlay ? (
        <button type="button" onClick={handleStopPlay}>
          <FaPause />
        </button>
      ) : (
        <button type="button" onClick={handleStartPlay}>
          <FaPlay />
        </button>
      )}
      <button type="button" onClick={handleEndGame}>
        <FaStop />
      </button>
    </S.Container>
  );
};
export default GameFuncBtns;
