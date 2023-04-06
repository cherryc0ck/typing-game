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
  onSetGameMode: (gameMode: GameMode) => void;
};

export const GameModeContext = createContext({} as GameModeContextValues);

export const GameModeProvider = ({ children }: PropsWithChildren) => {
  const [gameMode, setGameMode] = useState<GameMode>("init");

  const onSetGameMode = useCallback((gameMode: GameMode) => {
    setGameMode(gameMode);
  }, []);

  const contextValue = useMemo(
    () => ({
      gameMode,
      onSetGameMode,
    }),
    [gameMode, onSetGameMode]
  );

  return (
    <GameModeContext.Provider value={contextValue}>
      {children}
    </GameModeContext.Provider>
  );
};

export const useGameMode = () => useContext(GameModeContext);
