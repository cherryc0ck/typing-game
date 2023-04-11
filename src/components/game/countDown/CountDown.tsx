import { useEffect, useState } from "react";
import * as S from "./CountDown.styled";
import { useGameMode } from "@/context/game/GameModeContext";

const CountDown = () => {
  const [timer, setTimer] = useState(60);
  const { isPlay, handleStopPlay, handleSetGameMode } = useGameMode();

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(id);
      handleStopPlay();
      handleSetGameMode("end");
    }

    if (!isPlay) {
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [timer, isPlay, handleStopPlay, handleSetGameMode]);

  return <S.Span>{timer}</S.Span>;
};

export default CountDown;
