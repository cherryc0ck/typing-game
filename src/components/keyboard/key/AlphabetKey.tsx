import type { PropsKeyCode } from "@/types/keyCode";
import * as S from "./Key.styled";

export const AlphabetKey = ({ data, isEffect }: PropsKeyCode) => {
  const { main } = data;

  return (
    <S.AlphabetKey isEffect={isEffect}>
      <span>{main}</span>
    </S.AlphabetKey>
  );
};
