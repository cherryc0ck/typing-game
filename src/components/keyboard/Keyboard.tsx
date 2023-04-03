import { useGameMode } from "context/game/GameModeContext";
import React, { useEffect, useState } from "react";
import keyboardJson from "static/keyboard/keyboard.json";
import styled, { css } from "styled-components";
import Key from "./key/Key";

export type KeyProps = {
  main?: string;
  ko?: string;
  id?: string;
  sub?: string;
  origin?: string;
  size?: string;
  pos?: string;
  effect?: boolean;
};

const Keyboard = () => {
  const [currentKey, setCurrentKey] = useState<string>("");
  const [isEn, setIsEn] = useState<boolean>(true);

  const handleKeyPress = (e: KeyboardEvent) => {
    e.key === "CapsLock" && setIsEn(!isEn);
    setCurrentKey(e.key.toUpperCase());
  };

  useEffect(() => {
    const keyListener = () =>
      window.addEventListener("keydown", handleKeyPress);

    keyListener();

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <StyledContainer $isEn={isEn}>
      {keyboardJson.map((row, idx) => (
        <ul key={idx}>
          {row.map((el: KeyProps) => (
            <Key
              key={el.id || el.main}
              main={isEn ? el.main : el.ko || el.main}
              sub={el.sub}
              size={el.size}
              pos={el.pos}
              effect={[el.main, el.sub, el.origin].includes(currentKey)}
            />
          ))}
        </ul>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ $isEn: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.4rem;
  background: linear-gradient(
      95.15deg,
      rgba(255, 255, 255, 0.3) 2.86%,
      rgba(255, 255, 255, 0) 30.59%,
      rgba(255, 255, 255, 0.3) 48.18%,
      rgba(255, 255, 255, 0.243) 64.3%,
      rgba(255, 255, 255, 0.3) 96.67%
    ),
    #fff;
  /* #c4c4c4; */
  box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.25);
  border-radius: 24px;

  font-family: ${(props) => (props.$isEn ? "lato" : "nanumSquareNeo")};

  ul {
    display: flex;
    gap: 0.6rem;
  }
`;

export default Keyboard;
