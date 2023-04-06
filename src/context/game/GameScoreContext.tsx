import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

type GameScoreContextValues = {
  score: number;
  addScore: () => void;
};

export const GameScoreContext = createContext({} as GameScoreContextValues);

export const GameScoreProvider = ({ children }: PropsWithChildren) => {
  const [score, setScore] = useState(0);

  const addScore = () => setScore((prev) => prev + 1);

  return (
    <GameScoreContext.Provider value={{ score, addScore }}>
      {children}
    </GameScoreContext.Provider>
  );
};

export const useGameScore = () => {
  const context = useContext(GameScoreContext);

  if (!context) {
    throw new Error("GameScoreContext must be used within a GameScoreProvider");
  }
  return context;
};
