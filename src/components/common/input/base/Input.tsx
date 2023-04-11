import React, { forwardRef, ForwardedRef } from "react";

import * as S from "./Input.styled";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef(
  (
    { placeholder, value, onChange }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <S.Input
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
);

export default Input;
