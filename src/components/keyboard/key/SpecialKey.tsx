import type { PropsKeyCode } from "@/types/keyCode";
import * as S from "./Key.styled";

export const SpecialKey = ({ data, isEffect }: PropsKeyCode) => {
  const { main, sub } = data;
  return (
    <S.SpecialKey isEffect={isEffect}>
      <span>{main}</span>
      <span>{sub}</span>
    </S.SpecialKey>
  );
};
