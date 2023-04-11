import React, { forwardRef, ForwardedRef } from "react";
import { MdCancel, MdCheckCircle } from "react-icons/md";

import * as S from "./WordInput.styled";

type InputProps = {
  placeholder: string;
  value: string;
  isWordCheck: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const WordInput = forwardRef(
  (
    { placeholder, value, isWordCheck, onChange }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <S.Container isWordCheck={isWordCheck}>
        {isWordCheck ? <MdCheckCircle /> : <MdCancel />}
        <S.Input
          ref={ref}
          placeholder={placeholder}
          isWordCheck={isWordCheck}
          value={value}
          onChange={onChange}
        />
      </S.Container>
    );
  }
);

export default WordInput;
