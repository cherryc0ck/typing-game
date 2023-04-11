import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  PropsWithChildren,
} from "react";

import type { GameMode } from "@/types/game";

type GameModeContextValues = {
  gameMode: GameMode;
  isPlay: boolean;
  handleSetGameMode: (gameMode: GameMode) => void;
  handleStartPlay: () => void;
  handleStopPlay: () => void;
};

export const GameModeContext = createContext({} as GameModeContextValues);

export const GameModeProvider = ({ children }: PropsWithChildren) => {
  const [gameMode, setGameMode] = useState<GameMode>("init");
  const [isPlay, setIsPlay] = useState(false);

  const handleSetGameMode = useCallback((gameMode: GameMode) => {
    setGameMode(gameMode);
  }, []);

  const handleStartPlay = useCallback(() => {
    setIsPlay(true);
  }, []);

  const handleStopPlay = useCallback(() => {
    setIsPlay(false);
  }, []);

  const contextValue = useMemo(
    () => ({
      gameMode,
      isPlay,
      handleSetGameMode,
      handleStartPlay,
      handleStopPlay,
    }),
    [gameMode, isPlay, handleSetGameMode, handleStartPlay, handleStopPlay]
  );

  return (
    <GameModeContext.Provider value={contextValue}>
      {children}
    </GameModeContext.Provider>
  );
};

export const useGameMode = () => useContext(GameModeContext);
