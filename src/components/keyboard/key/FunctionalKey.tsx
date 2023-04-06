import type { PropsKeyCode } from "@/types/keyCode";
import * as S from "./Key.styled";

export const FunctionalKey = ({ data, isEffect }: PropsKeyCode) => {
  const { code } = data;
  return (
    <S.FuncKey isEffect={isEffect} code={code}>
      <span>{data.main}</span>
    </S.FuncKey>
  );
};
