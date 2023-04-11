import { useGameScore } from "@/context/game/GameScoreContext";
import { useGameMode } from "@/context/game/GameModeContext";
import Button from "@/components/common/button/base/Button";
import * as S from "./EndGame.styled";

const EndGame = () => {
  const { score } = useGameScore();
  const { handleSetGameMode, handleStartPlay } = useGameMode();

  const handleStartGame = () => {
    handleStartPlay();
    handleSetGameMode("base");
  };

  return (
    <S.Container>
      <p>Game Over</p>
      <p>Score: {score}</p>
      <S.BtnContainer>
        <Button onClick={handleStartGame}>Retry?</Button>
        <Button onClick={() => handleSetGameMode("init")}>Go Home</Button>
      </S.BtnContainer>
    </S.Container>
  );
};

export default EndGame;
