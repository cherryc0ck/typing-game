import { useEffect } from "react";
import axios from "axios";

import Button from "@/components/common/base/Button";
import * as S from "./InitGame.styled";

type InitGameProps = {
  onSetWords: (words: string[]) => void;
  onSetGameMode: () => void;
};

const InitGame = ({ onSetGameMode, onSetWords }: InitGameProps) => {
  useEffect(() => {
    axios
      .get("https://random-word-api.herokuapp.com/word?number=300")
      .then(({ data }) => onSetWords(data))
      .catch((error) => new Error(error));
  }, []);

  return (
    <S.Container>
      <Button onClick={onSetGameMode}>Game Start</Button>
    </S.Container>
  );
};

export default InitGame;
