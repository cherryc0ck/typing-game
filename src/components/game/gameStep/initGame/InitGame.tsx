import { useEffect, useState } from "react";
import axios from "axios";

import { useGameMode } from "@/context/game/GameModeContext";
import SettingTheme from "@/components/settingTheme/SettingTheme";
import Button from "@/components/common/button/base/Button";
import * as S from "./InitGame.styled";

type InitGameProps = {
  onSetWords: (words: string[]) => void;
};

const InitGame = ({ onSetWords }: InitGameProps) => {
  const { handleSetGameMode, handleStartPlay } = useGameMode();
  const [isSetting, setIsSetting] = useState(false);
  useEffect(() => {
    axios
      .get("https://random-word-api.herokuapp.com/word?number=300")
      .then(({ data }) => onSetWords(data))
      .catch((error) => new Error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStartGame = () => {
    handleStartPlay();
    handleSetGameMode("base");
  };

  const handleChangeSetting = () => {
    setIsSetting((prev) => !prev);
  };

  return (
    <S.Container>
      {isSetting ? (
        <SettingTheme onChangeSetting={handleChangeSetting} />
      ) : (
        <>
          <Button onClick={handleStartGame}>Game Start</Button>
          <Button onClick={handleChangeSetting}>Theme Setting</Button>
        </>
      )}
    </S.Container>
  );
};

export default InitGame;
