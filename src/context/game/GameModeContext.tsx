import React, { createContext, useContext, useState } from "react";
import type { GameMode } from "types/game";

type ChildrenProps = {
  children: React.ReactNode;
};

type ContextProps = {
  gameMode: string;
  onSetGameMode: (gameMode: GameMode) => void;
};

export const GameModeContext = createContext<ContextProps | undefined>(
  undefined
);

export const GameModeProvider = ({ children }: ChildrenProps) => {
  const [gameMode, setGameMode] = useState<GameMode>("init");
  const onSetGameMode = (gameMode: GameMode) => {
    setGameMode(gameMode);
  };

  return (
    <GameModeContext.Provider value={{ gameMode, onSetGameMode }}>
      {children}
    </GameModeContext.Provider>
  );
};

export const useGameMode = () => useContext(GameModeContext);
