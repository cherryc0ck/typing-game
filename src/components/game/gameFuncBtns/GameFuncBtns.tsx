import { FaPause, FaPlay, FaStop } from "react-icons/fa";
import * as S from "./GameFuncBtns.styled";

type GameFuncBtnsProps = {
  isPlay: boolean;
  onStartGame: () => void;
  onStopGame: () => void;
  onPauseGame: () => void;
};

const GameFuncBtns = ({
  isPlay,
  onStartGame,
  onStopGame,
  onPauseGame,
}: GameFuncBtnsProps) => {
  return (
    <S.Container>
      {isPlay ? (
        <button type="button" onClick={onPauseGame}>
          <FaPause />
        </button>
      ) : (
        <button type="button" onClick={onStartGame}>
          <FaPlay />
        </button>
      )}
      <button type="button" onClick={onStopGame}>
        <FaStop />
      </button>
    </S.Container>
  );
};
export default GameFuncBtns;
