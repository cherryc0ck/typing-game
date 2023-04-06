import { useEffect, useState } from "react";
import * as S from "./CountDown.styled";

type CountDownProps = {
  isPlay: boolean;
  onStartGame: () => void;
  onStopGame: () => void;
};

const CountDown = ({ isPlay, onStartGame, onStopGame }: CountDownProps) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(id);
      onStopGame();
    }

    return () => clearInterval(id);
  }, [timer]);

  return <S.Span>{timer}</S.Span>;
};

export default CountDown;
