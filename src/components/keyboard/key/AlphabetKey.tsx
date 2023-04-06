import type { PropsKeyCode } from "@/types/keyCode";
import * as S from "./Key.styled";

type AlphabetKeyProps = PropsKeyCode & {
  isEn: boolean;
};

export const AlphabetKey = ({ data, isEffect, isEn }: AlphabetKeyProps) => {
  const { main, sub } = data;

  return (
    <S.AlphabetKey isEffect={isEffect} isEn={isEn}>
      <span>{isEn ? main : sub}</span>
    </S.AlphabetKey>
  );
};
