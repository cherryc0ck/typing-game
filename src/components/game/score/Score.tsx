import { useEffect } from "react";
import { useAnimationControls } from "framer-motion";

import { useGameScore } from "@/context/game/GameScoreContext";
import * as S from "./Score.styled";

const Score = () => {
  const { score } = useGameScore();
  const controls = useAnimationControls();

  useEffect(() => {
    score > 0 && controls.start({ scale: [1, 1.5, 1] });
  }, [score, controls]);

  return <S.Span animate={controls}>{score}</S.Span>;
};

export default Score;
