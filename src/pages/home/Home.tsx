import { GameModeProvider } from "@/context/game/GameModeContext";
import GameStep from "@/components/game/gameStep/GameStep";
import Keyboard from "@/components/keyboard/Keyboard";
import * as S from "./Home.styled";

const Home = () => {
  return (
    <GameModeProvider>
      <S.Container>
        <GameStep />
        <Keyboard />
      </S.Container>
    </GameModeProvider>
  );
};

export default Home;
