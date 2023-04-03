import React, { createContext, useContext, useState } from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

type ContextProps = {
  score: number;
  upScore: () => void;
};

export const GameScoreContext = createContext<ContextProps | undefined>(
  undefined
);

export const GameScoreProvider = ({ children }: ChildrenProps) => {
  const [score, setScore] = useState<number>(0);
  const upScore = () => {
    setScore(score + 1);
  };

  return (
    <GameScoreContext.Provider value={{ score, upScore }}>
      {children}
    </GameScoreContext.Provider>
  );
};

export const useGameScore = () => {
  const context = useContext(GameScoreContext);

  if (!context) {
    throw new Error(
      "useCounterContext must be used within a CounterContextProvider"
    );
  }
  return context;
};
